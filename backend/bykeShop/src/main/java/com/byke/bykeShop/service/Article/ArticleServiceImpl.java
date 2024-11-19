package com.byke.bykeShop.service.Article;

import com.byke.bykeShop.model.Article;
import com.byke.bykeShop.repository.ArticleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    ArticleRepo articleRepo;
    @Override
    public Article saveArticle(Article article) {
        return articleRepo.save(article);
    }

    @Override
    public List<Article> getAllArticles() {
        return articleRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        articleRepo.deleteById(id);
    }

    @Override
    public Article updateArticle(int id, Article updatedArticle) throws IllegalAccessException {
        if (updatedArticle == null){
            throw new IllegalAccessException("Updated article can't be null");
        }

        Optional<Article> optionalArticle = articleRepo.findById(id);
        if(optionalArticle.isPresent()){
            Article article = optionalArticle.get();
            article.setName(updatedArticle.getName());
            article.setDesc(updatedArticle.getDesc());
            article.setLildesc(updatedArticle.getLildesc());
            article.setDesc(updatedArticle.getDesc());
            article.setLilphoto(updatedArticle.getLilphoto());
            article.setPhoto(updatedArticle.getPhoto());
            return articleRepo.save(article);
        }
        return updatedArticle;
    }
}
