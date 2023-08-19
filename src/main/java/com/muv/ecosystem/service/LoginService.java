package com.muv.ecosystem.service;

import com.muv.ecosystem.entity.User;
import com.muv.ecosystem.repository.UserRepository;
import jakarta.persistence.NoResultException;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final UserRepository userRepository;
    private final UserManagementService userManagementService;

    public LoginService(UserRepository userRepository, UserManagementService userManagementService) {
        this.userRepository = userRepository;
        this.userManagementService = userManagementService;
    }

    public boolean isLoginDataCorrect(String login, String password) {
        try {
            User user = userRepository.findByLogin(login);
            if (user.getPassword().equals(password)) {
                setUserSessionData(user);
                return true;
            }
        } catch (NoResultException | NullPointerException exception) {
            return false;
        }
        return false;
    }

    public void setUserSessionData(User user) {
        userManagementService.setLogin(user.getLogin());
        userManagementService.setRole(user.getRole());
    }

}
