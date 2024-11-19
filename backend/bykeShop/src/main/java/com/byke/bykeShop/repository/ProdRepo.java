package com.byke.bykeShop.repository;

import com.byke.bykeShop.model.Prod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdRepo extends JpaRepository<Prod, Integer> {
}
