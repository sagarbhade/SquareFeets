package com.squarefeets.model;


import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "Appointment")
public @Data class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "app_id")
	private int appId;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name = "date_time")
	private Date dateTime;
	
	@Column(name = "appointment_status")
	private String appointmentStatus;
	

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "property_id")
    private Property property;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
	
	public Appointment(Date dateTime, String appointmentStatus) {
		super();
		this.dateTime = dateTime;
		this.appointmentStatus = appointmentStatus;
	}
	
	
	
}
