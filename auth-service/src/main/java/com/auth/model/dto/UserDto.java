package com.auth.model.dto;

import com.auth.model.role.UserRole;
import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Getter
public class UserDto {

    private UUID userId;

    private String username;

    private String password;

    private String email;

    private UserRole userRole;

    private boolean enabled;

}
