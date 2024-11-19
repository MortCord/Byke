package com.byke.bykeShop.service.Users;

import com.byke.bykeShop.model.Users;

import java.util.List;

public interface UsersService {

    public Users saveUsers(Users users);

    public List<Users> getAllUsers();

    public void deleteById(int id);

    public Users updateUser(Users updatedUser, int id) throws IllegalAccessException;
}
