package com.muv.ecosystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StatisticsController {

    @GetMapping("/statistics")
    public String getStatistics() {
        return "statistics";
    }

}
