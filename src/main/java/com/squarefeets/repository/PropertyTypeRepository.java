package com.squarefeets.repository;

import com.squarefeets.model.Property_Type;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PropertyTypeRepository extends JpaRepository<Property_Type, Integer> {
    Optional<Property_Type> findByPropertyTypeId(Integer integer);
    
}
