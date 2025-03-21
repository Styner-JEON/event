package com.auth.service;

import com.auth.exception.CustomLoginException;
import com.auth.exception.ErrorCode;
import com.auth.exception.ErrorResponse;
import com.auth.exception.RegistrationException;
import com.auth.model.entity.UserEntity;
import com.auth.model.request.LoginRequest;
import com.auth.model.request.RegisterRequest;
import com.auth.repository.UserRepository;
import com.auth.security.CustomUserDetails;
import com.auth.security.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final AuthenticationManager authenticationManager;

    private final JwtUtil jwtUtil;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public String[] login(HttpServletResponse response, LoginRequest loginRequest) {
        String username = loginRequest.username();
        String password = loginRequest.password();
        Authentication authentication = UsernamePasswordAuthenticationToken.unauthenticated(username, password);
        try {
            authentication = authenticationManager.authenticate(authentication);
        } catch (AuthenticationException e) {
            log.warn("Authentication failed for user {}: {}", loginRequest.username(), e.getMessage());
            throw new CustomLoginException("username or password is incorrect");
        }
        CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
        Long userId = customUserDetails.getUserEntity().getUserId();

        String accessToken = jwtUtil.createAccessToken(userId);
        String refreshToken = jwtUtil.createRefreshToken(userId);
        return new String[]{accessToken, refreshToken};
    }

    @Transactional
    public void register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.username())) {
            throw new RegistrationException("Username already exists");
        }

        if (userRepository.existsByEmail(request.email())) {
            throw new RegistrationException("Email already exists");
        }

        String encodedPassword = passwordEncoder.encode(request.password());
        UserEntity userEntity = new UserEntity(request.username(), encodedPassword, request.email());
        userRepository.save(userEntity);
    }

}
