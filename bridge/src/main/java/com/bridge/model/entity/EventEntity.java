package com.bridge.model.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
//@NoArgsConstructor
//@Getter
public class EventEntity {

    // 지역기반관광정보조회

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;

//    private String resultCode;
//    private String resultMsg;
//
//    private Integer numOfRows;
//    private Long pageNo;
//    private Long totalCount;

    /**
     * 콘텐츠 ID
     */
    @Id
    private Long contentId;

    /**
     * 콘텐츠
     * 15=행사/공연/축제
     */
//    private Integer contentTypeId;

    /**
     * 콘텐츠 생성일
     */
    private LocalDateTime createdTime;

    /**
     * 콘텐츠 수정일
     */
    private LocalDateTime modifiedTime;

    /**
     * 주소
     */
    private String addr1;

    /**
     * 상세 주소
     */
    private String addr2;

    /**
     * { "code": "1", "name": "서울" },
     * { "code": "2", "name": "인천" },
     * { "code": "3", "name": "대전" },
     * { "code": "4", "name": "대구" },
     * { "code": "5", "name": "광주" },
     * { "code": "6", "name": "부산" },
     * { "code": "7", "name": "울산" },
     * { "code": "8", "name": "세종특별자치시" },
     * { "code": "31", "name": "경기도" },
     * { "code": "32", "name": "강원특별자치도" },
     * { "code": "33", "name": "충청북도" },
     * { "code": "34", "name": "충청남도" },
     * { "code": "35", "name": "경상북도" },
     * { "code": "36", "name": "경상남도" },
     * { "code": "37", "name": "전북특별자치도" },
     * { "code": "38", "name": "전라남도" },
     * { "code": "39", "name": "제주도" }
     */
    private Integer areaCode;

    /**
     * 교과서 속의 여행인지 여부
     */
//    private String bookTour;

    /**
     * 대분류
     */
//    private String cat1;

    /**
     * 중분류
     */
//    private String cat2;

    /**
     * 소분류
     */
//    private String cat3;

    /**
     * 대표이미지(원본)
     */
    private String firstImage;

    /**
     * 대표이미지(썸네일)
     */
    private String firstImage2;

    /**
     * 저작권 유형
     * Type1: 제1유형(출처표시-권장)
     * Type3: 제3유형(제1유형 + 변경금지)
     */
//    private String cpyrhtDivCd;

    /**
     * GPS 경도 좌표
     */
    private Double mapX;

    /**
     * GPS 위도 좌표
     */
    private Double mapY;

//    private Integer mLevel;

//    private Integer siGunGuCode;

    /**
     * 전화번호
     */
//    private String tel;

    /**
     * 콘텐츠 제목
     */
    private String title;

    /**
     * 우편번호
     */
    private String zipCode;

//    @ElementCollection
//    private List<String> itemList;


    // 공통정보조회
    private String homepage;
    private String overview;

    // 소개정보조회
    private LocalDate eventstartdate;
    private LocalDate eventenddate;
    private String playtime;
    private String usetimefestival;
    private String sponsor1;
    private String sponsor1tel;
    private String sponsor2;
    private String sponsor2tel;

}
