package com.muv.ecosystem.service;

import com.muv.ecosystem.entity.User;
import com.muv.ecosystem.repository.RoleRepository;
import com.muv.ecosystem.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserManagementService userManagementService;

    public RegistrationService(UserRepository userRepository, RoleRepository roleRepository, UserManagementService userManagementService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userManagementService = userManagementService;
    }

    public void storeUser(User user) {
        assignRole(user);
        userRepository.save(user);
    }

    private void assignRole(User user) {
        if (userManagementService.getRole() == null) {
            user.setRole(roleRepository.findByName("user"));
            return;
        }
        if (userManagementService.getRole().equals(roleRepository.findByName("eco_specialist"))) {
            user.setRole(roleRepository.findByName("eco_specialist"));
            return;
        }
        if (userManagementService.getRole().equals(roleRepository.findByName("content_manager"))) {
            user.setRole(roleRepository.findByName("content_manager"));
        }
    }

}
