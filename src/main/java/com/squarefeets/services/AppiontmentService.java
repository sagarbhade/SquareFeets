package com.squarefeets.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.squarefeets.model.Appointment;
import com.squarefeets.model.Property;
import com.squarefeets.repository.AppointmentRepository;
import com.squarefeets.repository.PropertyRepository;

@Component
@Service
public class AppiontmentService {

	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private PropertyRepository propertyRepository;
	
	public Appointment addAppointment(String appointment) {
		
		Appointment result = (Appointment)appointmentRepository.save(appointment);
		return result;
	}

//	public Appointment addAppointmentbyPropId(Integer propertyId) {
//		Property result = propertyRepository.getById(propertyId);
//		Appointment result1 = appointmentRepository.save(result);
//		return result1;
//	}
	
}
