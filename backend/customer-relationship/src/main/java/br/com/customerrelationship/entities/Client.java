package br.com.customerrelationship.entities;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table( name = "CLIENTS")
public class Client {


  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  @Column( nullable = false )
  private Integer id;

  @Column( nullable = false )
  private String nome;

  @Column( nullable = false )
  @JsonFormat( shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy" )
  private Date dataNascimento;

  @Column( nullable = false )
  private String email;

  @Column
  private String telefone;

  @Column
  private String endereco;

  @Column
  private Integer numero;

  @Column
  private String complemento;

  public Client() {}

  public Client(String nome, Date dataNascimento, String email) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.email = email;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public Date getDataNascimento() {
    return dataNascimento;
  }

  public void setDataNascimento(Date dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getTelefone() {
    return telefone;
  }

  public void setTelefone(String telefone) {
    this.telefone = telefone;
  }

  public String getEndereco() {
    return endereco;
  }

  public void setEndereco(String endereco) {
    this.endereco = endereco;
  }

  public Integer getNumero() {
    return numero;
  }

  public void setNumero(Integer numero) {
    this.numero = numero;
  }

  public String getComplemento() {
    return complemento;
  }

  public void setComplemento(String complemento) {
    this.complemento = complemento;
  }
}
