package com.nininho.javaapi;
import java.util.Date;

public class Moradores {
	public String nome;
	public String cpf;
	public Date data_nascimento;

	public Moradores(String _nome, String _cpf, Date _data) {
		this.nome = _nome;
		this.cpf = _cpf;
		this.data_nascimento = _data;
	}
}