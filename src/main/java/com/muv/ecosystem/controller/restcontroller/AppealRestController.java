package com.muv.ecosystem.controller.restcontroller;

import com.muv.ecosystem.entity.Appeal;
import com.muv.ecosystem.repository.AppealRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/appeals")
public class AppealRestController {

    private final AppealRepository appealRepository;

    public AppealRestController(AppealRepository appealRepository) {
        this.appealRepository = appealRepository;
    }

    @GetMapping
    public List<Appeal> getAppeals() {
        return appealRepository.findAll();
    }

}
