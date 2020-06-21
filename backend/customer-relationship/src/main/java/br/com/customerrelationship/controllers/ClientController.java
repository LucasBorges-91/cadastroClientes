package br.com.customerrelationship.controllers;

import br.com.customerrelationship.Servicies.ClientService;
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
    return service.salvar( client );
  }

  @PutMapping( value = "/{id}")
  @ResponseBody
  public Client editClient( @PathVariable Integer id, @RequestBody Client client ) {
    return service.editar( client, id );
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
    return service.todosClientes();
  }

  @GetMapping( value = "/name/{name}" )
  @ResponseBody
  public List<Client> findByName( @PathVariable String name ) {
    return service.findByNome( name );
  }

  @GetMapping( value = "/email/{email}" )
  @ResponseBody
  public Client findByEmail( @PathVariable String email ) {
    return service.findByEmail( email );
  }

  @GetMapping( value = "/{id}" )
  @ResponseBody
  public Client findById( @PathVariable Integer id ) {
    return service.clientEspecific( id );
  }
}
