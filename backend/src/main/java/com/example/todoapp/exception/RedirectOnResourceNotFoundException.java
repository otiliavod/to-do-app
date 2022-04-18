package com.example.todoapp.exception;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RedirectOnResourceNotFoundException implements ErrorController {
    @RequestMapping("/error")
    public String index() {
        return "index.html";
    }
}
