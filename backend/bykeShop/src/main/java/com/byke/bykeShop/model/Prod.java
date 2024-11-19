package com.byke.bykeShop.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Prod {

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
    private String brand;

    @Getter
    @Setter
    private int price;

    @Getter
    @Setter
    @Column(name = "`desc`", columnDefinition = "LONGTEXT")
    private String desc;

    @Getter
    @Setter
    private int type;

    @Getter
    @Setter
    private int isAvail;

    @Getter
    @Setter
    private String photo;
}
