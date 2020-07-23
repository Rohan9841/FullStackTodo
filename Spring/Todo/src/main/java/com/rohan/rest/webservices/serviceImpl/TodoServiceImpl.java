//package com.rohan.rest.webservices.serviceImpl;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import org.springframework.stereotype.Service;
//
//import com.rohan.rest.webservices.model.Todo;
//import com.rohan.rest.webservices.service.TodoService;
//
//@Service
//public class TodoServiceImpl implements TodoService {
//
//	private static List<Todo> todos = new ArrayList<>();
//	private static int idCounter = 0;
//
//	static {
//		todos.add(new Todo(++idCounter, "Rohan", "Learn to dance", new Date(), false));
//		todos.add(new Todo(++idCounter, "Rohan", "Learn Angular", new Date(), false));
//		todos.add(new Todo(++idCounter, "Rohan", "Do Laundry", new Date(), false));
//	}
//
//	@Override
//	public List<Todo> findAll() {
//		return todos;
//	}
//
//	@Override
//	public Todo deleteById(long id) {
//		Todo todo = findById(id);
//		if (todo == null)
//			return null;
//		todos.remove(todo);
//		return todo;
//	}
//
//	@Override
//	public Todo findById(long id) {
//		for (Todo todo : todos) {
//			if (todo.getId() == id) {
//				return todo;
//			}
//		}
//		return null;
//	}
//
//	@Override
//	public Todo save(Todo todo) {
//		if (todo.getId() <= 0) {
//			todo.setId(++idCounter);
//			todos.add(todo);
//		}else {
//			deleteById(todo.getId());
//			todos.add(todo);
//		}
//		return todo;
//	}
//
//}
