package com.nininho.javaapi.controller;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nininho.javaapi.model.ApartamentoModel;
import com.nininho.javaapi.service.ApartamentoService;

@RestController
@RequestMapping("/apartamento")
public class ApartamentoController {

    @Autowired
    private ApartamentoService apartamentoService;

    @GetMapping("")
    public List<ApartamentoModel> getAllUser() {
        List<ApartamentoModel> listRes = apartamentoService.findAll();
        return listRes;
    }

    // @GetMapping("/{email}")
    // public List<ApartamentoModel> getUserByEmail(@PathVariable String email) {
    //     List<ApartamentoModel> listRes = userService.findByEmail(email);
    //     return listRes;
    // }

    @PostMapping("")
    public void newUser(@RequestBody ApartamentoModel newApartamento) {
        apartamentoService.save(newApartamento);
    }

    @PutMapping("/{numero}")
    public void putUser(@RequestBody ApartamentoModel newApartamento, @PathVariable String numero) {
        newApartamento.setId(numero);
        apartamentoService.save((ApartamentoModel) newApartamento);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        apartamentoService.delete(id);
    }

}