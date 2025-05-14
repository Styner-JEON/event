package com.content.model.dto;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class CommentDto {

    private Long commentId;

    private Long contentId;

    private Long userId;
    private String username;

    private String content;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
