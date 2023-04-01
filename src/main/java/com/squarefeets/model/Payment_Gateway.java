package com.squarefeets.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "Payment_Gateway")
public @Data class Payment_Gateway {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "payment_id")
	private int paymentId;
	
	@Column(name = "payment_type")
	private String paymentType;
	
	@Column(name = "date_time")
	private LocalDateTime dateTime;
	
	@Column(name = "amount_paid")
	private BigDecimal amount_paid;
	
	@Column(name = "transaction_id")
	private String transactionId;
	
	@Column(name = "payment_status")
	private String paymentStatus;
	
	/*
	@ManyToOne
    @JoinColumn(name = "user_details_id")
    private User_Details userDetails;
	*/
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "property_id")
    private Property property;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

	public Payment_Gateway(String paymentType, LocalDateTime dateTime, BigDecimal amount_paid, String transactionId,
			String paymentStatus) {
		super();
		this.paymentType = paymentType;
		this.dateTime = dateTime;
		this.amount_paid = amount_paid;
		this.transactionId = transactionId;
		this.paymentStatus = paymentStatus;
	}
	
	
	
}
