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

import com.nininho.javaapi.model.ReclamacoesModel;
import com.nininho.javaapi.service.ReclamacoesService;

@RestController
@RequestMapping("/reclamacao")
public class ReclamacoesController {

    @Autowired
    private ReclamacoesService reclamacoesService;

    @GetMapping("")
    public List<ReclamacoesModel> getAllInfo() {
        List<ReclamacoesModel> listRes = reclamacoesService.findAll();
        return listRes;
    }

    @GetMapping("/{id}")
    public List<ReclamacoesModel> getById(@PathVariable String id) {
        List<ReclamacoesModel> listRes = reclamacoesService.findByInfoID(id);
        return listRes;
    }

    @PostMapping("")
    public void newInfo(@RequestBody ReclamacoesModel newInfo) {
        reclamacoesService.save(newInfo);
    }

    @PutMapping("/{id}")
    public void putInfo(@RequestBody ReclamacoesModel newInfo, @PathVariable String id) {
        newInfo.setId(id);
        reclamacoesService.save((ReclamacoesModel) newInfo);
    }

    @DeleteMapping("/{id}")
    public void deleteInfo(@PathVariable String id) {
        reclamacoesService.delete(id);
    }

}