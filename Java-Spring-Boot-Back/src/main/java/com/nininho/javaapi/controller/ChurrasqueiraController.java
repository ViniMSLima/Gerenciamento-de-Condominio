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

import com.nininho.javaapi.model.ChurrasqueiraModel;
import com.nininho.javaapi.service.ChurrasqueiraService;

@RestController
@RequestMapping("/churras")
public class ChurrasqueiraController {

    @Autowired
    private ChurrasqueiraService churrasqueiraService;

    @GetMapping("")
    public List<ChurrasqueiraModel> getAllUser() {
        List<ChurrasqueiraModel> listRes = churrasqueiraService.findAll();
        return listRes;
    }

    // @GetMapping("/{email}")
    // public List<ApartamentoModel> getUserByEmail(@PathVariable String email) {
    //     List<ApartamentoModel> listRes = userService.findByEmail(email);
    //     return listRes;
    // }

    @PostMapping("")
    public void newUser(@RequestBody ChurrasqueiraModel newChurrasqueira) {
        churrasqueiraService.save(newChurrasqueira);
    }

    @PutMapping("/{numero}")
    public void putUser(@RequestBody ChurrasqueiraModel newChurrasqueira, @PathVariable String numero) {
        newChurrasqueira.setId(numero);
        churrasqueiraService.save((ChurrasqueiraModel) newChurrasqueira);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        churrasqueiraService.delete(id);
    }

}