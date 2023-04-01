package com.squarefeets.payload;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.UniqueElements;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public @Data class AddPropertyForBuilder {
	
	@NotBlank(message = "Please Enter Property Name")
	@UniqueElements
    @Size(min = 3, max = 50)
	private String propertyName;
	
	@NotBlank(message = "Please Enter Property Details")
    @Size(min = 3, max = 50)
	private String details;
	
	@NotBlank(message = "Please Enter Property Price")
    @Size(min = 3, max = 15)
	private Double price;
	
	@NotBlank(message = "Please Enter Construction Status")
    @Size(min = 3, max = 15)
	private String constructionStatus;
	
	@Size(min = 0, max = 15)
	private String reraReg;
	
	@NotBlank(message = "Please Enter location")
    @Size(min = 3, max = 15)
	private Double area;
	
	@NotBlank(message = "Please Enter type of room")
    @Size(min = 0, max = 15)
	private String rooms;
	
	@NotBlank(message = "Please Enter Plot No.")
	@Size(min = 0, max = 15)
    private String plotNo;

    @NotBlank(message = "Please Enter Street")
    @Size(min = 3, max = 50)
    private String street;

    @NotBlank(message = "Please Enter Landmark")
    @Size(min = 3, max = 50)
    private String landmark;

    @NotBlank(message = "Please Enter City")
    @Size(min = 3, max = 50)
    private String city;

    @NotBlank(message = "Please Enter State")
    @Size(min = 3, max = 30)
    private String state;

    @NotBlank(message = "Please Enter Pincode")
    @Size(min = 6, max = 6)
    private String pincode;
    
    @NotBlank(message = "Email is mandatory")
    @Email
    private String useremail;

    @NotBlank(message = "Please select Property Type")
    private String propertyTypeId;

    @NotBlank
    private String builderId;
    
    @NotBlank
	private String website;

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

    public void setPrice( Double price) {
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

    public void setArea( Double area) {
        this.area = area;
    }

    public String getRooms() {
        return rooms;
    }

    public void setRooms(String rooms) {
        this.rooms = rooms;
    }

    public String getPlotNo() {
        return plotNo;
    }

    public void setPlotNo(String plotNo) {
        this.plotNo = plotNo;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getPropertyTypeId() {
        return propertyTypeId;
    }

    public void setPropertyTypeId(String propertyTypeId) {
        this.propertyTypeId = propertyTypeId;
    }

    public String getBuilderId() {
        return builderId;
    }

    public void setBuilderId(String builderId) {
        this.builderId = builderId;
    }
    
    public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}
}
