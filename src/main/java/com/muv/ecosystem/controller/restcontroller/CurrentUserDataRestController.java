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
    private final UserRepository userRepository;

    public CurrentUserDataRestController(UserManagementService userManagementService, UserRepository userRepository) {
        this.userManagementService = userManagementService;
        this.userRepository = userRepository;
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

    @GetMapping("/personal-data")
    public Map<String, String> getPersonalDataByLogin(@RequestParam String login) {
        Map<String, String> personalData = new HashMap<>();
        var user = userRepository.findByLogin(login);
        personalData.put("fullName", user.getLastName() + " " + user.getName() + " " + user.getFathersName());
        personalData.put("birthDate", user.getBirthDate().toString());
        personalData.put("phoneNumber", user.getPhoneNumber());
        personalData.put("email", user.getEmail());
        return personalData;
    }

}
