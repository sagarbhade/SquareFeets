package com.squarefeets.services;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class OtpGenerationService {

    static String otp;

    public String generateOTP() {
        String numbers = "1234567890";
        Random random = new Random();
        otp = "";
        for (int i = 0; i < 4; i++) {
            char c = numbers.charAt(random.nextInt(numbers.length()));
            otp = otp + c;
        }
        return otp;
    }

    public static boolean verifyOtp(String o) {
        if (o.equals(otp))
            return true;
        return false;
    }
}
