//package com.rohan.rest.webservices.controller;
//
//import java.net.URI;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//import com.rohan.rest.webservices.model.Todo;
//import com.rohan.rest.webservices.service.TodoService;
//
//@RestController
//@RequestMapping("/users")
//@CrossOrigin(origins = "http://localhost:4200")
//public class TodoController {
//
//	@Autowired
//	private TodoService todoService;
//
//	@GetMapping("/{username}/todos")
//	public List<Todo> getAllTodos(@PathVariable("username") String username) {
//		return todoService.findAll();
//	}
//
//	@GetMapping("/{username}/todos/{id}")
//	public Todo getTodo(@PathVariable("username") String username, @PathVariable("id") long id) {
//		return todoService.findById(id);
//	}
//
//	@PutMapping("/{username}/todos/{todoId}")
//	public ResponseEntity<Todo> updateTodo(@PathVariable("username") String username, @PathVariable("todoId") long id,
//			@RequestBody Todo todo) {
//		Todo todoToSave = todoService.save(todo);
//		return new ResponseEntity<Todo>(todoToSave, HttpStatus.OK);
//	}
//
//	@PostMapping("/{username}/todos")
//	public ResponseEntity<Void> createTodo(@PathVariable("username") String username, @RequestBody Todo todo) {
//		Todo createdTodo = todoService.save(todo);
//		URI uri = ServletUriComponentsBuilder
//					.fromCurrentRequest()
//					.path("/{id}")
//					.buildAndExpand(createdTodo.getId())
//					.toUri();
//		return ResponseEntity.created(uri).build();
//	}
//
//	@DeleteMapping("/{username}/todos/{todoId}")
//	public ResponseEntity<Void> deleteTodo(@PathVariable("username") String username, @PathVariable("todoId") long id) {
//		Todo todo = todoService.deleteById(id);
//		if (todo != null) {
//			return ResponseEntity.noContent().build();
//		}
//		return ResponseEntity.notFound().build();
//	}
//}
