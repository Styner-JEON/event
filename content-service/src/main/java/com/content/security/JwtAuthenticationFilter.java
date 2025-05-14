package com.content.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Value("${comment-url.insert}")
    private String commentInsertUrl;

    @Value("${comment-url.update}")
    private String commentUpdateUrl;

    @Value("${comment-url.delete}")
    private String commentDeleteUrl;

    private final JwtUtil jwtUtil;

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        log.info("요청 URI = {}, Method = {}", request.getRequestURI(), request.getMethod());

        List<AntPathRequestMatcher> matchers = List.of(
                new AntPathRequestMatcher(commentInsertUrl, "POST"),
                new AntPathRequestMatcher(commentUpdateUrl, "PUT"),
                new AntPathRequestMatcher(commentDeleteUrl, "DELETE")
        );

        for (AntPathRequestMatcher matcher : matchers) {
            if (matcher.matches(request)) {
                log.info("JWT Authentication Filter is applied to the request");
                return false;
            }
        }

        return true;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        Cookie tokenCookie = WebUtils.getCookie(request, "accessToken");
        if (tokenCookie == null) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), "No accessToken");
            return;
        }

        Claims claims;
        try {
            claims = jwtUtil.readJwt(tokenCookie.getValue()).getPayload();
        } catch (JwtException e) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), "Invalid accessToken");
            return;
        }


        String username = claims.get("username", String.class);
        String userRole = claims.get("userRole", String.class);

        log.info("JWT Authentication Filter: username = {}, userRole = {}", username, userRole);

        List<SimpleGrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(userRole));

        Authentication auth = new UsernamePasswordAuthenticationToken(
                username, null, authorities
        );
        log.info("JWT Authentication Filter: auth = {}", auth);
        SecurityContextHolder.getContext().setAuthentication(auth);
        filterChain.doFilter(request, response);
    }

}
