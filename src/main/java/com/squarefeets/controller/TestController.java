package com.squarefeets.controller;

import com.squarefeets.payload.TestPayload;
import com.squarefeets.payload.TestResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/session")
public class TestController {

    @RequestMapping(value = "/post-session", method = RequestMethod.POST)
    @RolesAllowed("ROLE_CUSTOMER")
    public List returnSession(@RequestBody String str, HttpServletRequest request){
        String append = "";
        append+=str;
        List sessionData = (List) request.getSession().getAttribute("usernameOrEmail");
        if(sessionData == null){
            sessionData = new ArrayList<>();
            request.getSession().setAttribute("usernameOrEmail", sessionData);
        }
        System.out.println(request.getSession().getAttribute("SPRING_SECURITY_CONTEXT"));
        sessionData.add(append);
        request.getSession().setAttribute("usernameOrEmail", sessionData);
        return sessionData;
    }

    @RequestMapping(value = "/get-list", method = RequestMethod.GET)
    public ResponseEntity<?> getList(){
        List<String> listOfProperties = new ArrayList<>();
        listOfProperties.add("test1");
        listOfProperties.add("test2");
        listOfProperties.add("test3");
        listOfProperties.add("test4");
        TestResponse testResponse = new TestResponse("anujgaonkar11@gmail.com", Collections.singletonList(listOfProperties));
        return new ResponseEntity<>(testResponse, HttpStatus.OK);
    }

    @RequestMapping(value = "/add-to-list", method = RequestMethod.POST)
    public ResponseEntity<?> addToList(@RequestBody TestPayload testPayload){
        System.out.println(testPayload);
        TestResponse testResponse = new TestResponse();
        testResponse.setUsernameOrEmail(testPayload.getUsernameOrEmail());
        testResponse.setLisOfProperties(testPayload.getLisOfProperties());
        return new ResponseEntity<>(testResponse, HttpStatus.OK);
    }
}
