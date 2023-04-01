package com.squarefeets.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PlainTextController {

    @RequestMapping(value = "/secured", method = RequestMethod.GET)
    @RolesAllowed("ROLE_CUSTOMER")
    public String secured(){
        return "Secured";
    }

    @RequestMapping(value = "/welcome", method = RequestMethod.GET)
    public String welcome(){
        return "welcome";
    }

    @RequestMapping(value = "/only-for-builder", method = RequestMethod.GET)
    @RolesAllowed("ROLE_BUILDER")
    public String onlyForBuilder(){
        return "Only for Builder";
    }
    
    @RequestMapping(value = "/add-builder-property", method = RequestMethod.GET)
    @RolesAllowed("ROLE_BUILDER")
    public String addBuilderProperty(){
        return "Add Builder Property";
        
    }

}
