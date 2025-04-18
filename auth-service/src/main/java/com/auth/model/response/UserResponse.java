package com.auth.model.response;

import com.auth.model.role.UserRole;

public record UserResponse(
        Long id,
        String name,
        String role
) {
}
