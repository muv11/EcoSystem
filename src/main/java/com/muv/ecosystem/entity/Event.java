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
@Table(name = "event", schema = "eco_system")
public class Event {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;
    @Basic
    @Column(name = "header", length = 50)
    private String header;
    @Basic
    @Column(name = "date_time")
    private Timestamp dateTime;
    @Basic
    @Column(name = "address", length = 100)
    private String address;
    @Basic
    @Column(name = "description", length = 500)
    private String description;
    @OneToOne
    @JoinColumn(name = "picture", referencedColumnName = "id")
    private Picture picture;

}
