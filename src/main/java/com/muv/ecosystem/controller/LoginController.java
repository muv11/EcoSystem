package com.muv.ecosystem.controller;

import com.muv.ecosystem.service.LoginService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

    private final LoginService loginService;
    private record LoginForm(String login, String password) {}

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping(value = "/login")
    public String login(LoginForm loginForm, Model model) {
        if (loginService.isLoginDataCorrect(loginForm.login, loginForm.password)) {
            return "index";
        }
        model.addAttribute("falseTry", "Неверный логин или пароль");
        return "index";
    }

}
