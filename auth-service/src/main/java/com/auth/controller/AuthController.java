package com.auth.controller;

import com.auth.exception.ErrorCode;
import com.auth.exception.ErrorResponse;
import com.auth.model.request.LoginRequest;
import com.auth.model.request.RegisterRequest;
import com.auth.security.CustomUserDetails;
import com.auth.security.JwtUtil;
import com.auth.service.AuthService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(path = "/auth/${api.version}", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    @Value("${jwt.refresh-token-expiry}")
    private long refreshTokenExpiry;

    private final AuthService authService;

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello, world!");
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(HttpServletResponse response, @RequestBody LoginRequest loginRequest) {
        String[] tokens = authService.login(response, loginRequest);
        String accessToken = tokens[0];
        String refreshToken = tokens[1];
        response.addHeader(HttpHeaders.SET_COOKIE, createRefreshTokenCookie(refreshToken).toString());
        return ResponseEntity.ok(Map.of("accessToken", accessToken));
    }

    private ResponseCookie createRefreshTokenCookie(String refreshToken) {
        return ResponseCookie.from("refreshToken", refreshToken)
                .httpOnly(true)
//            .secure(true)
                .path("/")
                .maxAge(refreshTokenExpiry / 1000)
                .sameSite("Strict")
                .build();
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("user " + request.username() + " registered");
    }

}
