package com.byke.bykeShop.service.Article;

import com.byke.bykeShop.model.Article;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ArticleService {

    public Article saveArticle(Article article);

    public List<Article> getAllArticles();

    public void deleteById(int id);

    public Article updateArticle(int id, Article updatedArticle) throws IllegalAccessException;

    public ResponseEntity<Resource> serveFile(String filename);
}
