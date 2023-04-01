package com.squarefeets.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squarefeets.model.Property;
import com.squarefeets.model.User;

public interface PropertyRepository extends JpaRepository<Property, Integer> {
	
//	public void deleteById(Integer propertyId);
	
	Property findByPropertyId(Integer propertyId);

	public Property findByPropertyName(String propertyName);
}