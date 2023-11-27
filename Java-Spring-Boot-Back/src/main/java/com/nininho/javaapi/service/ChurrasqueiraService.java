package com.nininho.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nininho.javaapi.model.ChurrasqueiraModel;
import com.nininho.javaapi.repository.ChurrasqueiraRepository;

@Service
public class ChurrasqueiraService {

    @Autowired
    private ChurrasqueiraRepository churrasqueiraRepository;

    public void save(ChurrasqueiraModel churrasqueiraModel) {
        this.churrasqueiraRepository.save(churrasqueiraModel);
    }

    public List<ChurrasqueiraModel> findAll() {
        return this.churrasqueiraRepository.findAll();
    }

    public List<ChurrasqueiraModel> findByUserID(String userId) {
        return this.churrasqueiraRepository.findByUserID(userId);
    }

    public void delete(String id) {
        this.churrasqueiraRepository.deleteById(id);
    }

}