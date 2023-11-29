package com.nininho.javaapi.model;
// import java.util.List;
import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("reclamacao")
public class ReclamacoesModel {
    @Id
    private String id;
    private String problema;
    private String data;
    private String horario;
    private String dataAviso;
    private String descricao;
    private String resolvido;
    
public ReclamacoesModel() {}

}