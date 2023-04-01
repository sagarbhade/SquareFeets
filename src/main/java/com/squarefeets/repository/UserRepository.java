package com.squarefeets.repository;

import com.squarefeets.model.Feedback;
import com.squarefeets.model.Property;
import com.squarefeets.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    List<User> findByIdIn(List<Long> userIds);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    
    public User findByUsername(String username);

	Property findById(Integer id);

	User getById(String id);

	User getById(Integer id);

	Feedback save(Feedback feedback);

}
