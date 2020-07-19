package br.com.customerrelationship.entities;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table( name = "CLIENTS" )
public class Client {


  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  @Column( nullable = false )
  private Integer id;

  @Column( nullable = false )
  private String name;

  @Column( nullable = false, name = "birthDate" )
  @JsonFormat( shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy" )
  private Date birthDate;

  @Column( nullable = false )
  private String email;

  @Column
  private String telephone;

  @Column
  private String address;

  @Column
  private Integer number;

  @Column
  private String complement;

  public Client() {}

  public Client( String name, Date birthDate, String email ) {
    this.name = name;
    this.birthDate = birthDate;
    this.email = email;
  }

  public Integer getId() {
    return id;
  }

  public void setId( Integer id ) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Date getBirthDate() {
    return birthDate;
  }

  public void setBirthDate(Date birthDate) {
    this.birthDate = birthDate;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getTelephone() {
    return telephone;
  }

  public void setTelephone( String telephone ) {
    this.telephone = telephone;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String adress) {
    this.address = adress;
  }

  public Integer getNumber() {
    return number;
  }

  public void setNumber(Integer number) {
    this.number = number;
  }

  public String getComplement() {
    return complement;
  }

  public void setComplement(String complement) {
    this.complement = complement;
  }
}
