package com.byke.bykeShop.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private int id;
    @Getter
    @Setter
    private String name;
    @Getter
    @Setter
    @Column(name = "`lildesc`", columnDefinition = "LONGTEXT")
    private String lildesc;
    @Getter
    @Setter
    @Column(name = "`desc`", columnDefinition = "LONGTEXT")
    private String desc;
    @Getter
    @Setter
    private String lilphoto;
    @Getter
    @Setter
    private String photo;

}
