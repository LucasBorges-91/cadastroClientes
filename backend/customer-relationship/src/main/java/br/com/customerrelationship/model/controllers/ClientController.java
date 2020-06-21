package br.com.customerrelationship.model.controllers;

import br.com.customerrelationship.model.Servicies.ClientService;
import br.com.customerrelationship.model.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping( value = "/client" )
public class ClientController {

  @Autowired
  ClientService service;

  @GetMapping( value = "/clients" )
  @ResponseBody
  public List<Client> allClients() {
    return service.todosClientes();
  }

  @PostMapping( value = "/addclient" )
  @ResponseBody
  public Client addClient( @RequestBody Client client ) {
    return service.salvar( client );
  }

  @PutMapping( value = "/editclient/{id}")
  @ResponseBody
  public Client editClient( @PathVariable Integer id, @RequestBody Client client ) {
    return service.editar( client, id );
  }

  @GetMapping( value = "/name/{nome}" )
  @ResponseBody
  public List<Client> findByName( @PathVariable String name ) {
    return service.findByNome( name );
  }

  @GetMapping( value = "/cpf/{cpf}" )
  @ResponseBody
  public Client findByEmail( @PathVariable String email ) {
    return service.findByEmail( email );
  }

  @GetMapping( value = "/{id}" )
  @ResponseBody
  public Client findById( @PathVariable Integer id ) {
    return service.clientEspecific( id );
  }

  @RequestMapping( value = "/delete/{id}" )
  @ResponseBody
  public Boolean delete( @PathVariable Integer id ) {
    service.delete( id );
    return true;
  }

}
