package com.content.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "event_table")
@Setter
@Getter
public class EventEntity {

    @Id
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

    @Column(columnDefinition = "TEXT")
    private String homepage;

    @Column(columnDefinition = "TEXT")
    private String overview;

    private LocalDate eventStartDate;
    private LocalDate eventEndDate;

    private String playTime;

    @Column(columnDefinition = "TEXT")
    private String useTimeFestival;

    private String sponsor1;
    private String sponsor1Tel;

    private String sponsor2;
    private String sponsor2Tel;

    private LocalDateTime dbUpdatedAt;

}
