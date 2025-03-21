package com.auth.security;

import com.auth.exception.CustomJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;

import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.io.Decoders;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
@Slf4j
public class JwtUtil {

    private final SecretKey secretKey;

    private final long accessTokenExpiry;

    private final long refreshTokenExpiry;

    public JwtUtil(
            @Value("${jwt.secret-string}") String secretString,
            @Value("${jwt.access-token-expiry}") long accessTokenExpiry,
            @Value("${jwt.refresh-token-expiry}") long refreshTokenExpiry
    ) {
        this.secretKey = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode(secretString));
        this.accessTokenExpiry = accessTokenExpiry;
        this.refreshTokenExpiry = refreshTokenExpiry;
    }

    private String createJwt(Long userId, long expirationTime) {
        long now = System.currentTimeMillis();
        return Jwts.builder()
                .subject(String.valueOf(userId))
                .expiration(new Date(now + expirationTime))
                .issuedAt(new Date(now))
                .signWith(secretKey, Jwts.SIG.HS256)
                .compact()
                ;
    }

    public String createAccessToken(Long userId) {
        return createJwt(userId, accessTokenExpiry);
    }

    public String createRefreshToken(Long userId) {
        return createJwt(userId, refreshTokenExpiry);
    }

    public Jws<Claims> readJwt(String token) {
        Jws<Claims> jws;
        try {
            jws = Jwts.parser()
                    .verifyWith(secretKey)
                    .build()
                    .parseSignedClaims(token)
            ;
        } catch (JwtException e) {
            throw new CustomJwtException(e.getMessage());
        }
        return jws;
    }

}
