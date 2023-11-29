package com.nininho.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nininho.javaapi.model.ReclamacoesModel;
import com.nininho.javaapi.repository.ReclamacoesRepository;
@Service
public class ReclamacoesService {

    @Autowired
    private ReclamacoesRepository reclamacoesRepository;

    public void save(ReclamacoesModel reclamacoesModel) {
        this.reclamacoesRepository.save(reclamacoesModel);
    }

    public List<ReclamacoesModel> findAll() {
        return this.reclamacoesRepository.findAll();
    }

    public List<ReclamacoesModel> findByInfoID(String id) {
        return this.reclamacoesRepository.findByUserID(id);
    }

    public void delete(String id) {
        this.reclamacoesRepository.deleteById(id);
    }

}