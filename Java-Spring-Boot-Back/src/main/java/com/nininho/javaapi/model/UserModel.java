package com.nininho.javaapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private String cpf;
    private String email;
    private String dateOfBirth;
    private String isAdm;
    private String password;
    private String phone;

    public UserModel(String id, String name, String cpf, String dateOfBirth, String isAdm, String password, String phone) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.dateOfBirth = dateOfBirth;
        this.isAdm = isAdm;
        this.password = password;
        this.phone = phone;
    }
    
    public UserModel()
    {

    }
    
}