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

import com.nininho.javaapi.model.InformacoesModel;
import com.nininho.javaapi.service.InformacoesService;

@RestController
@RequestMapping("/info")
public class InformacoesController {

    @Autowired
    private InformacoesService informacoesService;

    @GetMapping("")
    public List<InformacoesModel> getAllInfo() {
        List<InformacoesModel> listRes = informacoesService.findAll();
        return listRes;
    }

    @PostMapping("")
    public void newInfo(@RequestBody InformacoesModel newInfo) {
        informacoesService.save(newInfo);
    }

    @PutMapping("/{id}")
    public void putInfo(@RequestBody InformacoesModel newInfo, @PathVariable String id) {
        newInfo.setId(id);
        informacoesService.save((InformacoesModel) newInfo);
    }

    @DeleteMapping("/{id}")
    public void deleteInfo(@PathVariable String id) {
        informacoesService.delete(id);
    }

}