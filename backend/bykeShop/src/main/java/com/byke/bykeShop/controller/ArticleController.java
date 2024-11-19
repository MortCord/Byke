package com.byke.bykeShop.controller;

import com.byke.bykeShop.model.Article;
import com.byke.bykeShop.service.Article.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/article")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @PostMapping("/add")
    public String add(@RequestBody Article article){
        articleService.saveArticle(article);
        return "Article has been saved";
    }

    @GetMapping("/get")
    public List<Article> getAll(){
        return articleService.getAllArticles();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable int id){
        articleService.deleteById(id);
    }

    @PutMapping("update/{id}")
    public Article updateArticle(@PathVariable int id, @RequestBody Article article) throws IllegalAccessException {
        return articleService.updateArticle(id,article);
    }
}
