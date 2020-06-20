package br.com.customerrelationship.model.Servicies;

import br.com.customerrelationship.model.Repositories.ClientRepository;
import br.com.customerrelationship.model.entities.Client;
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
  public Client salvar( Client client ) {
    return repository.save( client );
  }

  @Transactional( rollbackFor = Exception.class )
  public Client editar( Client client, Integer id ) {
    client.setId( id );
    return repository.save( client );
  }

  public List<Client> todosClientes() {
    return ( List<Client> ) repository.findAll();
  }

  public Client clientEspecific( Integer id ) {
    Optional<Client> client = repository.findById( id );
    return client.get();
  }

  public List<Client> FindByNome( String nome ) {
    return repository.findByNome( nome );
  }

  public Client findByEmail( String email ) {
    return repository.findByEmail( email );
  }

  public boolean delete( Integer id ) {
    repository.deleteById( id );
    return true;
  }

}
