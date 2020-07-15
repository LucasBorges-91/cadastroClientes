package br.com.customerrelationship.controllers;

import br.com.customerrelationship.services.ClientService;
import br.com.customerrelationship.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping( value = "/client" )
public class ClientController {

  @Autowired
  ClientService service;

  @PostMapping
  @ResponseBody
  public Client addClient( @RequestBody Client client ) {
    return service.save( client );
  }

  @PutMapping( value = "/{id}")
  @ResponseBody
  public Client editClient( @PathVariable Integer id, @RequestBody Client client ) {
    return service.edit( client, id );
  }

  @RequestMapping( value = "/{id}" )
  @ResponseBody
  public Boolean delete( @PathVariable Integer id ) {
    service.delete( id );
    return true;
  }

  @GetMapping
  @ResponseBody
  public List<Client> allClients() {
    return service.allClients();
  }

  @GetMapping( value = "/name/{name}" )
  @ResponseBody
  public List<Client> findByName( @PathVariable String name ) {
    return service.findByName( name );
  }

  @GetMapping( value = "/email/{email}" )
  @ResponseBody
  public Client findByEmail( @PathVariable String email ) {
    return service.findByEmail( email );
  }

  @GetMapping( value = "/id/{id}" )
  @ResponseBody
  public Client findById( @PathVariable Integer id ) {
    return service.specificCustomer( id );
  }
}
