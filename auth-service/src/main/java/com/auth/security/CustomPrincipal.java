package com.auth.security;

import com.auth.model.role.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

public record CustomPrincipal(Long userId, String username) {}
