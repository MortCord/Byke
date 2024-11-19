package com.byke.bykeShop.repository;

import com.byke.bykeShop.model.Prodtype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdtypeRepo extends JpaRepository<Prodtype, Integer> {
}
