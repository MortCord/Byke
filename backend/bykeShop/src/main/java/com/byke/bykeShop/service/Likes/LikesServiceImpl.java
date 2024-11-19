package com.byke.bykeShop.service.Likes;

import com.byke.bykeShop.model.Likes;
import com.byke.bykeShop.repository.LikesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LikesServiceImpl implements LikesService {

    @Autowired
    LikesRepo likesRepo;
    @Override
    public Likes saveLike(Likes likes) {
        return likesRepo.save(likes);
    }

    @Override
    public List<Likes> getAllLikes() {
        return likesRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        likesRepo.deleteById(id);
    }

    @Override
    public Likes updateLikes(int id, Likes updatedLikes) throws IllegalAccessException {

        if (updatedLikes == null){
            throw new IllegalAccessException("Updated likes can't be null");
        }

        Optional<Likes> optionalLikes = likesRepo.findById(id);
        if(optionalLikes.isPresent()){
            Likes likes = optionalLikes.get();
            likes.setProdId(updatedLikes.getProdId());
            likes.setUserId(updatedLikes.getUserId());
            return likesRepo.save(likes);
        }

        return updatedLikes;
    }
}
