package com.muv.ecosystem.service;

import com.muv.ecosystem.entity.Appeal;
import com.muv.ecosystem.repository.AppealRepository;
import com.muv.ecosystem.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class AppealService {

    private final AppealRepository appealRepository;
    private final UserRepository userRepository;

    public AppealService(AppealRepository appealRepository, UserRepository userRepository) {
        this.appealRepository = appealRepository;
        this.userRepository = userRepository;
    }

    public void storeAppeal(Appeal appeal, String login, long dateTimeMs) {
        Instant dateTime = Instant.ofEpochMilli(dateTimeMs);
        appeal.setDateTime(dateTime);
        appeal.setUser(userRepository.findByLogin(login));
        appealRepository.save(appeal);
    }

}
