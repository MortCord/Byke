package com.byke.bykeShop.controller;

import com.byke.bykeShop.model.Users;
import com.byke.bykeShop.service.Users.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersService usersService;

    @PostMapping("/add")
    public String add(Users users){
        usersService.saveUsers(users);
        return "User has been saved";
    }
    @GetMapping("/get")
    public List<Users> getAll(){
        return  usersService.getAllUsers();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUsers(@PathVariable int id){
        usersService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public Users updateUsers(@RequestBody Users users, @PathVariable int id) throws IllegalAccessException {
        usersService.updateUser(users,id);
        return users;
    }



}
