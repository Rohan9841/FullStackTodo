package com.rohan.rest.webservices.model;

import org.springframework.stereotype.Component;

@Component
public class AuthenticationBean {

	private String message;

	
	public AuthenticationBean() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AuthenticationBean(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
