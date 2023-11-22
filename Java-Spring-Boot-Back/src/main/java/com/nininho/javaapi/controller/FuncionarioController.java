package com.nininho.javaapi.controller;

import java.util.List;
// import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nininho.javaapi.model.FuncionarioModel;
import com.nininho.javaapi.service.FuncionarioService;

@RestController
@RequestMapping("/func")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping("")
    public List<FuncionarioModel> getAllUser() {
        List<FuncionarioModel> listRes = funcionarioService.findAll();
        return listRes;
    }

    // @GetMapping("/{email}")
    // public List<FuncionarioModel> getUserByEmail(@PathVariable String email) {
    //     List<FuncionarioModel> listRes = userService.findByEmail(email);
    //     return listRes;
    // }

    @PostMapping("")
    public void newUser(@RequestBody FuncionarioModel newFuncionario) {
        funcionarioService.save(newFuncionario);
    }

    @PutMapping("/{numero}")
    public void putUser(@RequestBody FuncionarioModel newFuncionario, @PathVariable String numero) {
        newFuncionario.setId(numero);
        funcionarioService.save((FuncionarioModel) newFuncionario);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        funcionarioService.delete(id);
    }

}