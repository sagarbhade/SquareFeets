package com.squarefeets.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignUpRequestForBuilder {

    @NotBlank(message = "Please Enter username")
    @Size(min = 3, max = 50)
    private String username;

    @NotBlank(message = "Please Enter password")
    @Size(min = 6, max = 30)
    private String password;

    @NotBlank(message = "Please Enter email")
    @Size(max = 40)
    @Email
    private String email;

    @NotBlank(message = "Please Enter Mobile No.")
    @Size(max = 10, min = 10)
    private String mobileNo;

    @NotBlank(message = "Please Enter Aadhar No.")
    @Size(max = 12, min = 12)
    private String aadharNo;

    @NotBlank(message = "Please Enter Builder License")
    @Size(min = 0, max = 15)
    private String builderLicense;

//    @NotBlank
//    private String approvalStatus;

    @NotBlank(message = "Please Enter plotNo")
    @Size(min = 0, max = 15)
    private String plotNo;

    @NotBlank(message = "Please Enter street")
    @Size(min = 3, max = 50)
    private String street;

    @NotBlank(message = "Please Enter landmark")
    @Size(min = 3, max = 50)
    private String landmark;

    @NotBlank(message = "Please Enter city")
    @Size(min = 3, max = 50)
    private String city;

    @NotBlank(message = "Please Enter state")
    @Size(min = 3, max = 30)
    private String state;

    @NotBlank(message = "Please Enter pincode")
    @Size(min = 6, max = 6)
    private String pincode;

    public SignUpRequestForBuilder() {
    }

    public SignUpRequestForBuilder(String username, String password, String mobileNo, String aadharNo, String email, String builderLicense, String approvalStatus, String plotNo, String street, String landmark, String city, String state, String pincode) {
        this.username = username;
        this.password = password;
        this.mobileNo = mobileNo;
        this.aadharNo = aadharNo;
        this.email = email;
        this.builderLicense = builderLicense;
//        this.approvalStatus = approvalStatus;
        this.plotNo = plotNo;
        this.street = street;
        this.landmark = landmark;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(String aadharNo) {
        this.aadharNo = aadharNo;
    }

    public String getBuilderLicense() {
        return builderLicense;
    }

    public void setBuilderLicense(String builderLicense) {
        this.builderLicense = builderLicense;
    }

//    public String getApprovalStatus() {
//        return approvalStatus;
//    }
//
//    public void setApprovalStatus(String approvalStatus) {
//        this.approvalStatus = approvalStatus;
//    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
}
