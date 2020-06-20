package br.com.customerrelationship.model.Repositories;

import br.com.customerrelationship.model.entities.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends CrudRepository<Client, Integer> {

  List<Client> findAll();
  List<Client> findByNome( String name );
  Client findByEmail( String email );
}
