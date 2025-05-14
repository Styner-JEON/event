package com.content.model.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Setter
@Getter
public class EventListResponse {

    private Long contentId;

    private String title;

//    private LocalDateTime createdTime;
//    private LocalDateTime modifiedTime;
//
//    private String addr1;
//    private String addr2;

    private String area;

    private String firstImage;
//    private String firstImage2;

//    private Double mapX;
//    private Double mapY;
//
//    private String zipCode;
//
//    private String homepage;
//
//    private String overview;

    private LocalDate eventStartDate;
    private LocalDate eventEndDate;

//    private String playTime;
//
//    private String useTimeFestival;
//
//    private String sponsor1;
//    private String sponsor1Tel;
//
//    private String sponsor2;
//    private String sponsor2Tel;
//
//    private LocalDateTime dbUpdatedAt;

}
