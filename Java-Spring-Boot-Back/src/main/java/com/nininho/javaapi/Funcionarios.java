package com.nininho.javaapi;
import java.util.Date;

public class Funcionarios extends Moradores {
	public Funcionarios(String _nome, String _cpf, Date _data) {
		super(_nome, _cpf, _data);
	}
	public double salario;
	public Date data_admissao;
	public String cargo;
}