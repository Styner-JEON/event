package com.content.model.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class EventListResponse {

    private Long contentId;

    private String title;

    private String area;

    private String firstImage;

}
