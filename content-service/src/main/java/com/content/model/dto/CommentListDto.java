package com.content.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class CommentListDto {

    private Long commentId;

    private Long contentId;

    private Long userId;
    private String username;

    private String content;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
