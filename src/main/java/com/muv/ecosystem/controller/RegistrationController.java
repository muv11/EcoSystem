package com.muv.ecosystem.controller;

import com.muv.ecosystem.entity.User;
import com.muv.ecosystem.service.RegistrationService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RegistrationController {

    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping("/register")
    public String registerUser(User user) {
        registrationService.storeUser(user);
        return "index";
    }


}
