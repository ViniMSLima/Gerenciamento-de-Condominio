package com.nininho.javaapi.model;

// import java.util.List;
import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("apartamento")
public class ApartamentoModel {
    @Id
    private String id;
    private String numero;
    private String vagasDeEstacionamento;
    private String bloco;
    
    // private List<ApartamentoModel> listApartamento;

    public ApartamentoModel(String id, String numero, String vagasDeEstacionamento, String bloco) {
        this.id = id;
        this.numero = numero;
        this.bloco = bloco;
        this.vagasDeEstacionamento = vagasDeEstacionamento;
    }

    public ApartamentoModel(String bloco, String numero) {
        this.numero = numero;
        this.bloco = bloco;
    }

    public ApartamentoModel() {
    }
}