package com.choi.controller;

import com.choi.model.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    @Autowired
    UserService userService;

    @GetMapping("/")
    public String home() {
        System.out.println("여기 왓니..");
        System.out.println(userService.selectAllUsers());
        return "/";
    }
}
