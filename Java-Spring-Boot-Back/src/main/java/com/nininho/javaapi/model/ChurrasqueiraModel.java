package com.nininho.javaapi.model;

// import java.util.List;
import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document("churrasqueira")
public class ChurrasqueiraModel {
    @Id
    private String id;
    private String numero;
    private String data;
    private String email;
    
    // private List<ApartamentoModel> listApartamento;

    public ChurrasqueiraModel(String id, String numero, String data, String email) {
        this.id = id;
        this.numero = numero;
        this.data = data;
        this.email = email;
    }

    public ChurrasqueiraModel(String numero, String email) {
        this.numero = numero;
        this.email = email;
    }

    public ChurrasqueiraModel() {
    }
}