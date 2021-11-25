package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ParkingController {
		
	@RequestMapping("/login")
	public String login() {
		System.out.println("This is the Login Page");
		return "Login";
	}
	
	@RequestMapping("/dashboard")
	public String dashboard() {
		System.out.println("This is the Dashboard");
		return "DashBoard";
	}
	
	@RequestMapping("/registrationdetails")
	public String registrationdetails() {
		System.out.println("This is the Registration Details.");
		return "RegistrationDetails";
	}
}
