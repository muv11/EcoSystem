package com.muv.ecosystem.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "appeal", schema = "eco_system")
public class Appeal {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;
    @Basic
    @Column(name = "longitude")
    private Double longitude;
    @Basic
    @Column(name = "latitude")
    private Double latitude;
    @Basic
    @Column(name = "date_time")
    private Timestamp dateTime;
    @Basic
    @Column(name = "description", length = 500)
    private String description;
    @Basic
    @Column(name = "answer", length = 700)
    private String answer;
    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "specialist", referencedColumnName = "id")
    private User specialist;
    @ManyToOne
    @JoinColumn(name = "topic_type", referencedColumnName = "id")
    private TopicType topicType;

}
