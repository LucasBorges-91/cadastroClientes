package br.com.customerrelationship.repositories;

import br.com.customerrelationship.entities.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends CrudRepository<Client, Integer> {

  List<Client> findAll();
  List<Client> findByName( String name );
  Client findByEmail( String email );
}
