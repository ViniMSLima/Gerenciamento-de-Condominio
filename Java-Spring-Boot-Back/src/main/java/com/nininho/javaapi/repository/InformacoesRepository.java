package com.nininho.javaapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nininho.javaapi.model.InformacoesModel;

import java.util.List;

public interface InformacoesRepository extends MongoRepository<InformacoesModel, String> {
    // @Query("{'listUser.id': ?0 }")
    @Query("{'idUser.id': ?0 }")
    List<InformacoesModel> findByUserID(String userId);

}