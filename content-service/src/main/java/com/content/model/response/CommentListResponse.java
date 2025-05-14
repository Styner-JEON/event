package com.content.model.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class CommentListResponse {

    private Long commentId;

    private Long contentId;

    private Long userId;
    private String username;

    private String content;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
