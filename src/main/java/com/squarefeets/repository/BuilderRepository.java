package com.squarefeets.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squarefeets.model.Builder;
import com.squarefeets.model.Property;

public interface BuilderRepository extends JpaRepository<Builder, Integer> {

	Optional<Builder> findByBuilderId(Integer builderId);
}
