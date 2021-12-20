package com.example.cardarmourbackendmongodb.Repository;

import com.example.cardarmourbackendmongodb.Model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CustomerRepository extends MongoRepository<Customer,String> {

    Customer findByUsername(String username);

    Customer findByUsernameAndPassword(String username,String password);


}
