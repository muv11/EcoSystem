package com.muv.ecosystem.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "user", schema = "eco_system")
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;
    @Basic
    @Column(name = "login", length = 30)
    private String login;
    @Basic
    @Column(name = "password", length = 30)
    private String password;
    @Basic
    @Column(name = "email", length = 40)
    private String email;
    @Basic
    @Column(name = "phone_number", length = 12)
    private String phoneNumber;
    @Basic
    @Column(name = "name", length = 30)
    private String name;
    @Basic
    @Column(name = "last_name", length = 30)
    private String lastName;
    @Basic
    @Column(name = "fathers_name", length = 30)
    private String fathersName;
    @Basic
    @Column(name = "birth_date")
    private Date birthDate;
    @ManyToOne
    @JoinColumn(name = "role", referencedColumnName = "id")
    private Role role;

}
