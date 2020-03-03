package com.fullstack.tutorial.backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Accessors(chain = true)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "first_name", length = 55, nullable = false)
    private String firstName;
    @Column(name = "last_name", length = 55, nullable = false)
    private String lastName;
    @Column(name = "email", length = 255, nullable = false, unique = true)
    private String email;
    @Column(name = "phone", length = 255, nullable = false, unique = true)
    private Long phone;
    @Column(name = "country", length = 255, nullable = false)
    private String country;
    @Column(name = "genre", length = 255, nullable = false)
    private Genre genre;
}
