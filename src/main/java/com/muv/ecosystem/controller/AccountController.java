package com.muv.ecosystem.controller;

import com.muv.ecosystem.entity.Role;
import com.muv.ecosystem.service.UserManagementService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AccountController {

    private final UserManagementService userManagementService;

    public AccountController(UserManagementService userManagementService) {
        this.userManagementService = userManagementService;
    }

    @GetMapping("/account")
    public String getMainPage() {
        Role role = userManagementService.getRole();
        if (role.getName().equals("user")) {
            return "user_account";
        }
        if (role.getName().equals("eco_specialist")) {
            return "eco_specialist_account";
        }
        if (role.getName().equals("content_manager")) {
            return "content_manager_account";
        }
        return "index";
    }

}
