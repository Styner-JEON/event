package com.content.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@JsonIgnoreProperties(ignoreUnknown = true)
@NoArgsConstructor
@Setter
@Getter
public class EventDto {

    // 지역기반관광정보조회
    @JsonProperty("contentid")
    private Long contentId;

    private String title;

    @JsonProperty("createdtime")
    @JsonFormat(pattern = "yyyyMMddHHmmss")
    private LocalDateTime createdTime;

    @JsonProperty("modifiedtime")
    @JsonFormat(pattern = "yyyyMMddHHmmss")
    private LocalDateTime modifiedTime;

    private String addr1;

    private String addr2;

    @JsonProperty("areacode")
    private Integer areaCode;

    @JsonProperty("firstimage")
    private String firstImage;

    @JsonProperty("firstimage2")
    private String firstImage2;

    @JsonProperty("mapx")
    private Double mapX;

    @JsonProperty("mapy")
    private Double mapY;

    @JsonProperty("zipcode")
    private String zipCode;

    // 공통정보조회
    private String homepage;

    private String overview;

    // 소개정보조회
    @JsonProperty("eventstartdate")
    private LocalDate eventStartDate;

    @JsonProperty("eventenddate")
    private LocalDate eventEndDate;

    @JsonProperty("playtime")
    private String playTime;

    @JsonProperty("usetimefestival")
    private String useTimeFestival;

    private String sponsor1;

    @JsonProperty("sponsor1tel")
    private String sponsor1Tel;

    private String sponsor2;

    @JsonProperty("sponsor2tel")
    private String sponsor2Tel;

}
