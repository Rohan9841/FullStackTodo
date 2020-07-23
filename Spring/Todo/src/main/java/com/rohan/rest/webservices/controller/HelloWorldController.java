package com.rohan.rest.webservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rohan.rest.webservices.model.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
	
	@GetMapping("hello-world")
	public String helloWorld() {
		return "hello world!";
	}
	
	@GetMapping("hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World - changed");
	}
	
	@GetMapping("/hello-world-bean/pathVariable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable("name") String name) {
		return new HelloWorldBean("Hello "+name);
	}
}
