package com.muv.ecosystem.controller.restcontroller;

import com.muv.ecosystem.entity.Appeal;
import com.muv.ecosystem.repository.AppealRepository;
import com.muv.ecosystem.service.AppealService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/appeals")
public class AppealRestController {

    private final AppealRepository appealRepository;
    private final AppealService appealService;

    public AppealRestController(AppealRepository appealRepository, AppealService appealService) {
        this.appealRepository = appealRepository;
        this.appealService = appealService;
    }

    @GetMapping
    public List<Appeal> getAppeals() {
        return appealRepository.findAll();
    }

    @GetMapping("/current-user")
    public List<Appeal> getAppealsByCurrentUser() {
        return appealService.getAppealsByCurrentUser();
    }

}
