package com.byke.bykeShop.controller;

import com.byke.bykeShop.model.Prodtype;
import com.byke.bykeShop.service.Prodtype.ProdtypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prodtype")
public class ProdtypeController {
    @Autowired
    private ProdtypeService prodtypeService;

    @PostMapping("/add")
    public String add(Prodtype prodtype){
        prodtypeService.saveProdtype(prodtype);
        return "Prodtype has been saved";
    }

    @GetMapping("/get")
    public List<Prodtype> getAll(){
        return prodtypeService.getAllProdtype();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable int id){
        prodtypeService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public Prodtype update(@RequestBody Prodtype prodtype, @PathVariable int id) throws IllegalAccessException {
        return prodtypeService.updateProdtype(prodtype, id);
    }
}
