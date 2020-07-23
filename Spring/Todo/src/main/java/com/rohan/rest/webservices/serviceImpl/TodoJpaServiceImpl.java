package com.rohan.rest.webservices.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohan.rest.webservices.model.Todo;
import com.rohan.rest.webservices.repositories.TodoJpaRepository;
import com.rohan.rest.webservices.service.TodoService;

@Service
public class TodoJpaServiceImpl implements TodoService{
	
	@Autowired
	TodoJpaRepository todoRepo;

	@Override
	public List<Todo> findAll(String username) {
		return todoRepo.findAllByUsername(username);
	}

	@Override
	public void deleteById(long id) {
		todoRepo.deleteById(id);
	}

	@Override
	public Todo findById(long id) {
		Optional<Todo> optTodo = todoRepo.findById(id);
		return(optTodo.isPresent()?optTodo.get():null);
	}

	@Override
	public Todo save(Todo todo) {
		return todoRepo.save(todo);
	}
}
