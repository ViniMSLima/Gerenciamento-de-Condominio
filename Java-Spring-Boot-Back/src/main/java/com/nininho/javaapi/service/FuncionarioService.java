package com.nininho.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nininho.javaapi.model.FuncionarioModel;
import com.nininho.javaapi.repository.FuncionarioRepository;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public void save(FuncionarioModel funcionarioModel) {
        this.funcionarioRepository.save(funcionarioModel);
    }

    public List<FuncionarioModel> findAll() {
        return this.funcionarioRepository.findAll();
    }

    public List<FuncionarioModel> findByUserID(String userId) {
        return this.funcionarioRepository.findByUserID(userId);
    }

    public void delete(String id) {
        this.funcionarioRepository.deleteById(id);
    }

}