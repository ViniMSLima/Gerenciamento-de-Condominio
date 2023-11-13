package com.nininho.javaapi;
import java.util.Date;

public class Usuario extends Moradores {
	public Usuario(String _nome, String _cpf, Date _data) {
		super(_nome, _cpf, _data);
	}
	public String user_name;
	public Date data_primeiro_acesso;
	public String patente_no_cs;
}