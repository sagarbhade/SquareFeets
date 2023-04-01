package com.squarefeets.services;

import com.squarefeets.model.User;
import com.squarefeets.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean isEmailPresent(String email){
        return userRepository.findByEmail(email).isPresent();
    }
}
