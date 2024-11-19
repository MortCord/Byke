package com.byke.bykeShop.service.Prod;

import com.byke.bykeShop.model.Prod;
import com.byke.bykeShop.repository.ProdRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdServiceImpl implements ProdService {
    @Autowired
    ProdRepo prodRepo;
    @Override
    public Prod saveProd(Prod prod) {
        return prodRepo.save(prod);
    }

    @Override
    public List<Prod> getAllProds() {
        return prodRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        prodRepo.deleteById(id);
    }

    @Override
    public Prod updateProd(int id, Prod updatedProd) throws IllegalAccessException {
        if (updatedProd == null){
            throw new IllegalAccessException("Updated product can't be null");
        }

        Optional<Prod> optionalProd = prodRepo.findById(id);
        if(optionalProd.isPresent()){
            Prod prod = optionalProd.get();
            prod.setDesc(updatedProd.getDesc());
            prod.setName(updatedProd.getName());
            prod.setPhoto(updatedProd.getPhoto());
            prod.setBrand(updatedProd.getBrand());
            prod.setIsAvail(updatedProd.getIsAvail());
            prod.setPrice(updatedProd.getPrice());
            prod.setType(updatedProd.getType());
            return prodRepo.save(prod);
        }
        return updatedProd;
    }
}
