package com.squarefeets.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squarefeets.model.Appointment;
import com.squarefeets.model.Property;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {


	Appointment getByAppId(int appId);

	Appointment save(String appointment);

		
}
