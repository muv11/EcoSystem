package com.muv.ecosystem.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@EqualsAndHashCode
@ToString
@Embeddable
@Table(name = "appeals_pictures", schema = "eco_system")
public class AppealsPicturesPK implements Serializable {
    @Column(name = "appeal_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer appealId;
    @Column(name = "picture_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pictureId;

}
