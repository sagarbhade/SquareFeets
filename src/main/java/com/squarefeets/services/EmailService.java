package com.squarefeets.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendEmailForNewRegistration(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("cloud.sagarb@gmail.com");
        message.setTo(email);
        message.setSubject("Welcome to SquareFeets.");
        message.setText("Thank you for Registering with us!");
        emailSender.send(message);
    }

    public void sendOtp(String email, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setFrom("cloud.sagarb@gmail.com");
        message.setSubject("OTP");
        message.setText(otp);
        emailSender.send(message);
    }

    public void sendEmailForPasswordReset(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("cloud.sagarb@gmail.com");
        message.setTo(email);
        message.setSubject("Your password has been changed!");
        message.setText("This is a confirmation that the password for your SquareFeets account has just been changed.");
        emailSender.send(message);
    }
}
