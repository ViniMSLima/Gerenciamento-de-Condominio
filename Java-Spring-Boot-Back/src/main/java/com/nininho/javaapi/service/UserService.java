package com.nininho.javaapi.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nininho.javaapi.model.UserModel;
import com.nininho.javaapi.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public void save(String id, String name, String cpf, String dateOfBirth, String isAdm, String password) {
        this.userRepository.save(new UserModel(id, name, cpf, dateOfBirth, isAdm, password));
    }

    public List<UserModel> findAll() {
        return (List<UserModel>) this.userRepository.findAll();
    }

    public List<UserModel> findByEmail(String name) {
        return (List<UserModel>) this.userRepository.findByEmail(name);
    }

    public void delete(String id) {
        this.userRepository.deleteById(id);
    }

}