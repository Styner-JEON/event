package com.auth.model.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

public record LoginResponse(
        String accessToken,
        String refreshToken,
        UserResponse user
) {
}
