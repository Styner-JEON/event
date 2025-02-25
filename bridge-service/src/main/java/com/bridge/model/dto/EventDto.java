package com.bridge.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@JsonIgnoreProperties(ignoreUnknown = true)
@NoArgsConstructor
@Setter
@Getter
public class EventDto implements Serializable {

    private static final long serialVersionUID = 1L;  // 🚀 직렬화 ID 추가

    // 지역기반관광정보조회
    private Long contentId;

    private String title;

    private LocalDateTime createdTime;
    private LocalDateTime modifiedTime;

    private String addr1;
    private String addr2;

    private String area;

    private String firstImage;
    private String firstImage2;

    private Double mapX;
    private Double mapY;

    private String zipCode;

    // 공통정보조회
    private String homepage;

    private String overview;

    // 소개정보조회
    private LocalDate eventStartDate;
    private LocalDate eventEndDate;

    private String playTime;

    private String useTimeFestival;

    private String sponsor1;
    private String sponsor1Tel;

    private String sponsor2;
    private String sponsor2Tel;

    @Override
    public String toString() {
        return "EventDto{" +
                "contentId=" + contentId +
                ", title='" + title + '\'' +
                ", createdTime=" + createdTime +
                ", modifiedTime=" + modifiedTime +
                ", addr1='" + addr1 + '\'' +
                ", addr2='" + addr2 + '\'' +
                ", area='" + area + '\'' +
                ", firstImage='" + firstImage + '\'' +
                ", firstImage2='" + firstImage2 + '\'' +
                ", mapX=" + mapX +
                ", mapY=" + mapY +
                ", zipCode='" + zipCode + '\'' +
                ", homepage='" + homepage + '\'' +
                ", overview='" + overview + '\'' +
                ", eventStartDate=" + eventStartDate +
                ", eventEndDate=" + eventEndDate +
                ", playTime='" + playTime + '\'' +
                ", useTimeFestival='" + useTimeFestival + '\'' +
                ", sponsor1='" + sponsor1 + '\'' +
                ", sponsor1Tel='" + sponsor1Tel + '\'' +
                ", sponsor2='" + sponsor2 + '\'' +
                ", sponsor2Tel='" + sponsor2Tel + '\'' +
                '}';
    }

}
