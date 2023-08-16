package com.muv.ecosystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppealAnswerController {

    @GetMapping("/appeal-answer")
    public String getMainPage() {
        return "appeal_answer";
    }

}
