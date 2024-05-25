package com.example.backend.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "user_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idusr;
    private String username;
    private String password;
    private String question;
    private String answer;
    private String firstname;
    private String lastname;
    private char sex;
    private String address;
    private String phone;
    private String creditcard;
    private String email;

    public enum Type {
        ADMIN, GUEST, WAITER
    }

    @Enumerated(EnumType.STRING)
    private Type type;
}
