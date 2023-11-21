package com.nininho.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nininho.javaapi.model.ApartamentoModel;
import com.nininho.javaapi.repository.ApartamentoRepository;

@Service
public class ApartamentoService {

    @Autowired
    private ApartamentoRepository apartamentoRepository;

    public void save(ApartamentoModel apartamentoModel) {
        this.apartamentoRepository.save(apartamentoModel);
    }

    public List<ApartamentoModel> findAll() {
        return this.apartamentoRepository.findAll();
    }

    public List<ApartamentoModel> findByUserID(String userId) {
        return this.apartamentoRepository.findByUserID(userId);
    }

    public void delete(String id) {
        this.apartamentoRepository.deleteById(id);
    }

}