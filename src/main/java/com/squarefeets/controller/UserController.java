package com.squarefeets.controller;

import com.squarefeets.model.User;
import com.squarefeets.payload.EmailPresentPayload;
import com.squarefeets.repository.UserRepository;
import com.squarefeets.services.EmailService;
import com.squarefeets.services.OtpGenerationService;
import com.squarefeets.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    OtpGenerationService otpGenerationService;

    @Autowired
    EmailService emailService;

    @GetMapping("/getUserData/{userId}")
    public ResponseEntity<?> getUserData(@PathVariable("userId") String userId){
        User user = userRepository.findById((long)Integer.parseInt(userId)).get();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/CheckUserEmail")
    public ResponseEntity<?> isEmailPresent(@RequestBody EmailPresentPayload emailPresentPayload){
        boolean isEmailPresent = userService.isEmailPresent(emailPresentPayload.getEmail());
        if (isEmailPresent){
            return ResponseEntity.ok().body(true);
        }
        return ResponseEntity.ok().body(false);
    }

    @GetMapping("/SendOtp/{email}")
    public ResponseEntity<?> SendOtp(@PathVariable("email") String email){
        String otp = otpGenerationService.generateOTP();
        emailService.sendOtp(email, otp);
        return ResponseEntity.ok().body("OTP Sent Successfully");
    }

    @GetMapping("/VerifyOtp/{otp}")
    public ResponseEntity<?> verifyOtp(@PathVariable("otp") String otp){
        boolean validOtp = OtpGenerationService.verifyOtp(otp);
        if (validOtp){
            return ResponseEntity.ok().body(true);
        }
        return ResponseEntity.ok().body(false);
    }

} 
