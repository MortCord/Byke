package com.byke.bykeShop.service.Prodtype;

import com.byke.bykeShop.model.Prodtype;
import com.byke.bykeShop.repository.ProdtypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdtypeServiceImpl implements ProdtypeService {
    @Autowired
    ProdtypeRepo prodtypeRepo;
    @Override
    public Prodtype saveProdtype(Prodtype prodtype) {
        return prodtypeRepo.save(prodtype);
    }

    @Override
    public List<Prodtype> getAllProdtype() {
        return prodtypeRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        prodtypeRepo.deleteById(id);
    }

    @Override
    public Prodtype updateProdtype(Prodtype updatedProdtype, int id) throws IllegalAccessException {
        if (updatedProdtype == null){
            throw new IllegalAccessException("Updated product type can't be null");
        }

        Optional<Prodtype> optionalProdtype = prodtypeRepo.findById(id);
        if(optionalProdtype.isPresent()){
            Prodtype prodtype = optionalProdtype.get();
            prodtype.setName(updatedProdtype.getName());
            return prodtypeRepo.save(prodtype);
        }
        return updatedProdtype;
    }
}
