package com.byke.bykeShop.repository;

import com.byke.bykeShop.model.Likes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikesRepo extends JpaRepository<Likes, Integer> {
}
