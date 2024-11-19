package com.byke.bykeShop.controller;

import com.byke.bykeShop.model.Prod;
import com.byke.bykeShop.service.Prod.ProdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prod")
public class ProdController {

    @Autowired
    ProdService prodService;

    @PostMapping("/add")
    public String add(@RequestBody Prod prod){
        prodService.saveProd(prod);
        return "Product has been saved";
    }

    @GetMapping("/get")
    public List<Prod> getAll(){
        return prodService.getAllProds();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable int id){
        prodService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public Prod updateProd(@RequestBody Prod prod, @PathVariable int id) throws IllegalAccessException {
        return prodService.updateProd(id, prod);
    }
}
