package com.byke.bykeShop.service.Users;

import com.byke.bykeShop.model.Users;
import com.byke.bykeShop.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UsersService {
    @Autowired
    UsersRepo usersRepo;
    @Override
    public Users saveUsers(Users users) {
        return usersRepo.save(users);
    }

    @Override
    public List<Users> getAllUsers() {
        return usersRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        usersRepo.deleteById(id);
    }

    @Override
    public Users updateUser(Users updatedUser, int id) throws IllegalAccessException {
        if (updatedUser == null){
            throw new IllegalAccessException("Updated user can't be null");
        }

        Optional<Users> optionalUser = usersRepo.findById(id);
        if(optionalUser.isPresent()){
            Users user = optionalUser.get();
            user.setEmail(updatedUser.getEmail());
            user.setName(updatedUser.getName());
            user.setPassword(updatedUser.getPassword());
            user.setIsBanned(updatedUser.getIsBanned());
        }
        return updatedUser;
    }
}
