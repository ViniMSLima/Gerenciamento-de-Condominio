package com.nininho.javaapi.model;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("apartamento")
public class ApartamentoModel {
    @Id
    private String id;
    private String numero;
    private String vagasDeEstacionamento;
    
    private List<ApartamentoModel> listApartamento;

    public ApartamentoModel(String id, String numero, String vagasDeEstacionamento) {
        this.id = id;
        this.numero = numero;
        this.vagasDeEstacionamento = vagasDeEstacionamento;
    }

    public ApartamentoModel(String numero) {
        this.numero = numero;
    }

    public ApartamentoModel() {
    }
}