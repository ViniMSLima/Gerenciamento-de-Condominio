package com.nininho.javaapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nininho.javaapi.model.ReclamacoesModel;

import java.util.List;

public interface ReclamacoesRepository extends MongoRepository<ReclamacoesModel, String> {
    // @Query("{'listUser.id': ?0 }")
    @Query("{'id': ?0 }")
    List<ReclamacoesModel> findByUserID(String id);

}