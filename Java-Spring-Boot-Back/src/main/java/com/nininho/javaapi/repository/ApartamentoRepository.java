package com.nininho.javaapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nininho.javaapi.model.ApartamentoModel;

import java.util.List;

public interface ApartamentoRepository extends MongoRepository<ApartamentoModel, String> {
    // @Query("{'listUser.id': ?0 }")
    @Query("{'idUser.id': ?0 }")
    List<ApartamentoModel> findByUserID(String userId);

}