package com.nininho.javaapi.model;

// import java.util.List;
import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("func")
public class FuncionarioModel {
    @Id
    private String id;
    private String name;
    private String cpf;
    private String email;
    private String dateOfBirth;
    private String phone;
    private String carteiraDeTrabalho;

    public FuncionarioModel(String id, String name, String cpf, String email, String dateOfBirth, String phone, String carteiraDeTrabalho) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.dateOfBirth = dateOfBirth;
        this.carteiraDeTrabalho = carteiraDeTrabalho;
        this.phone = phone;
        this.email = email;
    }
    
    public FuncionarioModel()
    {

    }
}