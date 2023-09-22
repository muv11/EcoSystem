package com.muv.ecosystem.controller;

import com.muv.ecosystem.entity.Appeal;
import com.muv.ecosystem.service.AppealService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AppealController {

    public AppealController(AppealService appealService) {
        this.appealService = appealService;
    }

    private record AppealForm(String description, double longitude, double latitude) {}
    private final AppealService appealService;

    @PostMapping("/appeal")
    public String sendAppeal(
            AppealForm appealForm,
            @RequestParam long dateTimeMs,
            @RequestParam String login
    ) {
        Appeal appeal = new Appeal(appealForm.longitude, appealForm.latitude, appealForm.description);
        appealService.storeAppeal(appeal, login, dateTimeMs);
        return "index";
    }

}
