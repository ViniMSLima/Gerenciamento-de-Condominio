package com.nininho.javaapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nininho.javaapi.model.FuncionarioModel;

import java.util.List;

public interface FuncionarioRepository extends MongoRepository<FuncionarioModel, String> {
    // @Query("{'listUser.id': ?0 }")
    @Query("{'idUser.id': ?0 }")
    List<FuncionarioModel> findByUserID(String userId);

}