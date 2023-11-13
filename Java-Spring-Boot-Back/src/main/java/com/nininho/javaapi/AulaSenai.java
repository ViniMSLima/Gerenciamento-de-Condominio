package com.nininho.javaapi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Scanner;

import org.apache.tomcat.jni.Sockaddr;

public class AulaSenai {

	public static class Exercicios
	{

		public static void Exercicio1()
		{
			Scanner scan = new Scanner(System.in);

			System.out.print("Quantidade de notas a serem somadas\n> ");
			int qtdNotas = scan.nextInt();

			float sum = 0;
			float grade = 0;

			for (int i = 0; i < qtdNotas; i++)
			{
				System.out.print("Nota " + (i + 1) + "\n> ");

				grade = scan.nextFloat();
				sum += grade;
			}

			float mean = sum/qtdNotas;

			System.out.println("Media: " + mean);

			if (mean > 8.9)
			{
				System.out.print("Parabens!!");
			}
			else if (mean > 6.9)
			{
				System.out.println("Aprovado!!!");
			}
			else if (mean > 3.9) 
			{
				System.out.println("Recuperacao!!!");
			} 
			else
			{
				System.out.println("Reprovado!!!");
			}
			scan.close();
		}

		public static void Exercicio2()
		{
			float floatArray[] = {1, 2, 3, 4, 5};
			float sum = 0;

			for (float f : floatArray) {
				sum += f;
			}

			System.out.println("Soma dos valores da array: " + sum);
		}

		public static void Exercicio3()
		{
			ArrayList<Float> lista = new ArrayList<Float> (); 

			for(float i = 0; i < 20; i++)
				lista.add(i+1.0f);

			float sum = 0;

			for (float f : lista) {
				sum += f;
			}

			float mean = sum/20.0f;

			System.out.println("Media dos valores da lista: " + mean);
		}

		public static void Exercicio4()
		{
			for(float i = 1000; i < 2000; i++)
			{
				if(i % 11 == 5)
					System.out.println(i);
			}
		}

		public static void Exercicio5()
		{
			int somaImpares = 0;
			for(float i = 0; i < 1001; i++)
			{
				if(i % 2 == 0)
					System.out.println(i);
				else	
					somaImpares++;
			}

			System.out.println("Quantidade de impares: " + somaImpares);
		}

		public static void Exercicio6()
		{
			Funcionario Jennifer = new Funcionario("Jennifer", "123.456.789-00", new Date());		
			Funcionario Thiago = new Funcionario("Thiago", "987.654.321-00", new Date());

			System.out.println(Jennifer.nome);
			System.out.println(Thiago.nome);

		}

		public static void Exercicio7()
		{
			Funcionario Jennifer = new Funcionario("Jennifer", "123.456.789-00", new Date());		
			Funcionario Thiago = new Funcionario("Thiago", "987.654.321-00", new Date());
			Funcionario Amanda = new Funcionario("Amanda", "987.654.321-00", new Date());
			Funcionario Roger = new Funcionario("Roger", "987.654.321-00", new Date());

			ArrayList<Funcionario> lista = new ArrayList<Funcionario> (); 
			Funcionario floatArray[] = {Jennifer, Thiago, Amanda, Roger};

			for (Funcionario funcionario : floatArray) {
				lista.add(funcionario);
				System.out.println(funcionario.nome);
			}
		}

		public static void Exercicio8()
		{
			Scanner scan = new Scanner(System.in);

			ArrayList<Float> lista = new ArrayList<Float> (); 

			System.out.print("Quantidade de valores\n> ");

			int qtdValores = scan.nextInt();
			
			for(int i=0; i < qtdValores; i++)
			{
				System.out.print("\nValor" + (i+1) + "\n> ");
				lista.add(scan.nextFloat());
			}

			scan.close();

			Collections.sort(lista);
			System.out.println(lista.get(qtdValores-1));
		}

		public static void Exercicio9()
		{
			Scanner scan = new Scanner(System.in);

			String palavra = scan.nextLine();

			String array[] = palavra.split(" ");
			int count = 0;

			for (String string : array) {
				count++;
			}

			if (count % 2 != 0)
				System.out.println(array[count/2]);
			else
				System.out.println(array[(int)(count/2 - 1)] + " " + array[(int)(count/2)]);

			scan.close();
		}
	}
}
