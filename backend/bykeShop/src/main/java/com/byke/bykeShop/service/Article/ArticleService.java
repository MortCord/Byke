package com.byke.bykeShop.service.Article;

import com.byke.bykeShop.model.Article;

import java.util.List;

public interface ArticleService {

    public Article saveArticle(Article article);

    public List<Article> getAllArticles();

    public void deleteById(int id);

    public Article updateArticle(int id, Article updatedArticle) throws IllegalAccessException;
}
