package com.nininho.javaapi.dto;

import com.nininho.javaapi.model.UserModel;
import com.nininho.javaapi.model.ApartamentoModel;

import lombok.Data;
import java.util.List;

@Data
public class CompanyUserDTO {
    private UserModel user;
    private List<UserModel> userList;
    private ApartamentoModel company;
}
    