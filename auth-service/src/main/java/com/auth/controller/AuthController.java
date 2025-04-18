package com.auth.controller;

import com.auth.exception.CustomJwtException;
import com.auth.model.request.LoginRequest;
import com.auth.model.request.SignupRequest;
import com.auth.model.response.LoginResponse;
import com.auth.model.response.SignupResponse;
import com.auth.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(path = "/auth/${api.version}", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    @Value("${jwt.access-token-expiry}")
    private long accessTokenExpiry;

    @Value("${jwt.refresh-token-expiry}")
    private long refreshTokenExpiry;

    private final AuthService authService;

    @GetMapping("/hello")
    public ResponseEntity<String> hello(Authentication authentication) {
        return ResponseEntity.ok("Hello, world!");
    }

    @PostMapping("/signup")
    public ResponseEntity<SignupResponse> signup(@RequestBody SignupRequest request) {
        SignupResponse signupResponse = authService.signup(request);
        log.info("User signed up: {}", request.username());
        return ResponseEntity.ok(signupResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(HttpServletResponse response, @RequestBody LoginRequest loginRequest) {
        LoginResponse loginResponse = authService.login(response, loginRequest);
//        addTokenToCookie(response, "accessToken", tokenDto.getAccessToken(), accessTokenExpiry);
//        addTokenToCookie(response, "refreshToken", tokenDto.getRefreshToken(), refreshTokenExpiry);
        log.info("Login successful: {}", loginRequest.username());
        return ResponseEntity.ok(loginResponse);
    }

//    private void addTokenToCookie(HttpServletResponse response, String tokenType, String tokenValue, long tokenExpiry) {
//        ResponseCookie cookie = ResponseCookie.from(tokenType, tokenValue)
//                .httpOnly(true)
//                .path("/auth/refresh")
//                .maxAge(tokenExpiry / 1000)
//                .secure(false)
//                .sameSite("Lax")
//                .build();
//        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
//    }

}
