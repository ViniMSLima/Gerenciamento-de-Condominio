package com.nininho.javaapi.model;
// import java.util.List;
import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("info")
public class InformacoesModel {
    @Id
    private String id;
    private String aviso;
    private String data;
    private String horario;
    private String dataAviso;
    private String informacoes;
    
public InformacoesModel() {}

}