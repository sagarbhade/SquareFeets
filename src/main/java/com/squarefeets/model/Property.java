package com.squarefeets.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "Property", uniqueConstraints = {
        
        @UniqueConstraint(columnNames = {
                "RERA_reg"
        })
})
public class Property implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "property_id")
	private int propertyId;
	
	@Column(name = "property_name")
	private String propertyName;
	
	@Column(name = "details")
	private String details;
	
	@Column(name = "price")
	private Double price;
	
	@Column(name = "construction_status")
	private String constructionStatus;
	
	@Column(name = "RERA_reg")
	private String reraReg;
	
	@Column(name = "area")
	private Double area;
	
	@Column(name = "rooms")
	private String rooms;
	
	@Column(name = "website")
	private String website;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "address_id")
    private Address address;

    
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id")
    private User user;
    
    
    @ManyToOne(cascade = CascadeType.MERGE, fetch= FetchType.EAGER)
    @JoinColumn(name = "property_type_id")
    private Property_Type propertyType;
    
	
	@OneToMany(mappedBy = "property")
    List<Appointment> appointment;
    
	/*
    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL)
    List<Feedback> feedback;
    
    
    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL)
    List<Payment_Gateway> paymentGateway;
    
    
    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL)
    List<Property_Images> propertyImages;
    */
    
    @ManyToOne(cascade = CascadeType.MERGE, fetch= FetchType.LAZY)
    @JoinColumn(name = "builder_id")
	@JsonIgnore
    private Builder builder;
     
    
	public Property(String propertyName, String details, Double price, String constructionStatus, String reraReg,
			Double area, String rooms) {
		super();
		this.propertyName = propertyName;
		this.details = details;
		this.price = price;
		this.constructionStatus = constructionStatus;
		this.reraReg = reraReg;
		this.area = area;
		this.rooms = rooms;
	}

	public int getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(int propertyId) {
		this.propertyId = propertyId;
	}

	public String getPropertyName() {
		return propertyName;
	}

	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getConstructionStatus() {
		return constructionStatus;
	}

	public void setConstructionStatus(String constructionStatus) {
		this.constructionStatus = constructionStatus;
	}

	public String getReraReg() {
		return reraReg;
	}

	public void setReraReg(String reraReg) {
		this.reraReg = reraReg;
	}

	public Double getArea() {
		return area;
	}

	public void setArea(Double area) {
		this.area = area;
	}

	public String getRooms() {
		return rooms;
	}

	public void setRooms(String rooms) {
		this.rooms = rooms;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@JsonBackReference
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Property_Type getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(Property_Type propertyType) {
		this.propertyType = propertyType;
	}

	public List<Appointment> getAppointment() {
		return appointment;
	}

	public void setAppointment(List<Appointment> appointment) {
		this.appointment = appointment;
	}
	
	public Builder getBuilder() {
		return builder;
	}

	public void setBuilder(Builder builder) {
		this.builder = builder;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	/*
	public List<Feedback> getFeedback() {
		return feedback;
	}

	public void setFeedback(List<Feedback> feedback) {
		this.feedback = feedback;
	}

	public List<Payment_Gateway> getPaymentGateway() {
		return paymentGateway;
	}

	public void setPaymentGateway(List<Payment_Gateway> paymentGateway) {
		this.paymentGateway = paymentGateway;
	}

	public List<Property_Images> getPropertyImages() {
		return propertyImages;
	}

	public void setPropertyImages(List<Property_Images> propertyImages) {
		this.propertyImages = propertyImages;
	}
	*/

	

}
