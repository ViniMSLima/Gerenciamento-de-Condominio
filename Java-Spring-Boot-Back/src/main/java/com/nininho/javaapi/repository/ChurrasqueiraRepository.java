package com.nininho.javaapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nininho.javaapi.model.ChurrasqueiraModel;

import java.util.List;

public interface ChurrasqueiraRepository extends MongoRepository<ChurrasqueiraModel, String> {
    // @Query("{'listUser.id': ?0 }")
    @Query("{'idUser.id': ?0 }")
    List<ChurrasqueiraModel> findByUserID(String userId);

}