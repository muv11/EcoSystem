package com.muv.ecosystem.controller.restcontroller;

import com.muv.ecosystem.entity.Role;
import com.muv.ecosystem.repository.UserRepository;
import com.muv.ecosystem.service.UserManagementService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class CurrentUserDataRestController {

    private final UserManagementService userManagementService;

    public CurrentUserDataRestController(UserManagementService userManagementService, UserRepository userRepository) {
        this.userManagementService = userManagementService;
    }

    @GetMapping("/current")
    public Map<String, String> getCurrentUserData() {
        Map<String, String> currentUserData = new HashMap<>();
        currentUserData.put("login", userManagementService.getLogin());
        Role role = userManagementService.getRole();
        if (role == null) {
            currentUserData.put("role", null);
        } else {
            currentUserData.put("role", userManagementService.getRole().getName());
        }
        return currentUserData;
    }

}
