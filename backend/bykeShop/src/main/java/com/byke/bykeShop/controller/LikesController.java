package com.byke.bykeShop.controller;

import com.byke.bykeShop.model.Likes;
import com.byke.bykeShop.service.Likes.LikesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/likes")
public class LikesController {

    @Autowired
    private LikesService likesService;

    @PostMapping("/add")
    public String add(@RequestBody Likes likes){
        likesService.saveLike(likes);
        return "Like has been saved";
    }

    @GetMapping("/get")
    public List<Likes> getAll(){
        return likesService.getAllLikes();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable int id){
        likesService.deleteById(id);
    }

    @PutMapping("update/{id}")
    public Likes updateLikes(@RequestBody Likes likes, @PathVariable int id) throws IllegalAccessException {
        return likesService.updateLikes(id,likes);
    }
}
