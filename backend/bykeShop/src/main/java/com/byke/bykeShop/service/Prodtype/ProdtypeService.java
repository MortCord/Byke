package com.byke.bykeShop.service.Prodtype;

import com.byke.bykeShop.model.Prodtype;

import java.util.List;

public interface ProdtypeService {
    public Prodtype saveProdtype(Prodtype prodtype);

    public List<Prodtype> getAllProdtype();

    public void deleteById(int id);

    public Prodtype updateProdtype(Prodtype updatedProdtype, int id) throws IllegalAccessException;
}
