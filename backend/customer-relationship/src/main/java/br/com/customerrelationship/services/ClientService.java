package br.com.customerrelationship.services;

import br.com.customerrelationship.repositories.ClientRepository;
import br.com.customerrelationship.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

  @Autowired
  private ClientRepository repository;

  @Transactional( rollbackFor = Exception.class )
  public Client save( Client client ) {
    return repository.save( client );
  }

  @Transactional( rollbackFor = Exception.class )
  public Client edit( Client client, Integer id ) {
    client.setId( id );
    return repository.save( client );
  }

  public List<Client> allClients() {
    return ( List<Client> ) repository.findAll();
  }

  public Client specificCustomer( Integer id ) {
    Optional<Client> client = repository.findById( id );
    return client.get();
  }

  public List<Client> findByName( String name ) {
    return repository.findByName( name );
  }

  public Client findByEmail( String email ) {
    return repository.findByEmail( email );
  }

  public void delete( Integer id ) {
    repository.deleteById( id );
  }

}
