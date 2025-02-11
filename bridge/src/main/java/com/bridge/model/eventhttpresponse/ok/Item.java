package com.bridge.model.eventhttpresponse.ok;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
public class Item {

    @JsonProperty("contentid")
    Long contentId;
    @JsonProperty("contenttypeid")
    Integer contentTypeId;

    @JsonProperty("createdtime")
    @JsonFormat(pattern = "yyyyMMddHHmmss")
    LocalDateTime createdTime;

    @JsonProperty("modifiedtime")
    @JsonFormat(pattern = "yyyyMMddHHmmss")
    LocalDateTime modifiedTime;

    String addr1;
    String addr2;

    @JsonProperty("areacode")
    Integer areaCode;

    @JsonProperty("booktour")
    String bookTour;

    String cat1;
    String cat2;
    String cat3;

    @JsonProperty("firstimage")
    String firstImage;
    @JsonProperty("firstimage2")
    String firstImage2;

    String cpyrhtDivCd;

    @JsonProperty("mapx")
    Double mapX;
    @JsonProperty("mapy")
    Double mapY;

    @JsonProperty("mlevel")
    Integer mLevel;

    @JsonProperty("sigungucode")
    Integer siGunGuCode;

    String tel;

    String title;

    @JsonProperty("zipcode")
    String zipCode;

}
