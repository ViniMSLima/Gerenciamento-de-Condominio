package com.nininho.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nininho.javaapi.model.InformacoesModel;
import com.nininho.javaapi.repository.InformacoesRepository;
@Service
public class InformacoesService {

    @Autowired
    private InformacoesRepository informacoesRepository;

    public void save(InformacoesModel informacoesModel) {
        this.informacoesRepository.save(informacoesModel);
    }

    public List<InformacoesModel> findAll() {
        return this.informacoesRepository.findAll();
    }

    public List<InformacoesModel> findByInfoID(String infoId) {
        return this.informacoesRepository.findByUserID(infoId);
    }

    public void delete(String id) {
        this.informacoesRepository.deleteById(id);
    }

}