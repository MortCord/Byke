package com.byke.bykeShop.service.Prod;

import com.byke.bykeShop.model.Prod;

import java.util.List;

public interface ProdService {
    public Prod saveProd(Prod prod);

    public List<Prod> getAllProds();

    public void deleteById(int id);

    public Prod updateProd(int id, Prod updatedProd) throws IllegalAccessException;
}
