package com.content.model.request;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class CommentRequest {

    private String content;

    private String contentId;

}
