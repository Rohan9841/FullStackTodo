package com.rohan.rest.webservices.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rohan.rest.webservices.model.Todo;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo,Long>{
	List<Todo> findAllByUsername(String username);
}
