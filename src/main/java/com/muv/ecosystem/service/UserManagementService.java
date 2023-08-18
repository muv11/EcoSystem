package com.muv.ecosystem.service;

import com.muv.ecosystem.entity.Role;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
@Getter
@Setter
public class UserManagementService {

    private String login;
    private Role role;

}
