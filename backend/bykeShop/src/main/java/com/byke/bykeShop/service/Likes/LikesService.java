package com.byke.bykeShop.service.Likes;

import com.byke.bykeShop.model.Likes;

import java.util.List;

public interface LikesService {
    public Likes saveLike(Likes likes);
    public List<Likes> getAllLikes();
    public void deleteById(int id);
    public Likes updateLikes(int id, Likes updatedLikes) throws IllegalAccessException;

}
