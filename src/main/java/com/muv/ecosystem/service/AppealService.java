package com.muv.ecosystem.service;

import com.muv.ecosystem.entity.Appeal;
import com.muv.ecosystem.repository.AppealRepository;
import com.muv.ecosystem.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class AppealService {

    private final AppealRepository appealRepository;
    private final UserRepository userRepository;
    private final UserManagementService userManagementService;

    public AppealService(AppealRepository appealRepository, UserRepository userRepository, UserManagementService userManagementService) {
        this.appealRepository = appealRepository;
        this.userRepository = userRepository;
        this.userManagementService = userManagementService;
    }

    public void storeAppeal(Appeal appeal, String login, long dateTimeMs) {
        Instant dateTime = Instant.ofEpochMilli(dateTimeMs);
        appeal.setDateTime(dateTime);
        appeal.setUser(userRepository.findByLogin(login));
        appealRepository.save(appeal);
    }

    public List<Appeal> getAppealsByCurrentUser() {
        return appealRepository.findAllByUser(userRepository.findByLogin(userManagementService.getLogin()));
    }

}
