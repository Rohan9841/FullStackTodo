package com.rohan.rest.webservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rohan.rest.webservices.model.AuthenticationBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/auth")
public class BasicAuthController {

	@GetMapping("/basicAuth")
	public AuthenticationBean basicAuthentication() {
		return new AuthenticationBean("You are authenticated");
	}
}
