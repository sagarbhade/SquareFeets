package com.squarefeets.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class ChangePasswordPayloadRequest {

    @NotBlank
    @Email
    private String usernameOrEmail;

    @NotBlank
    private String newPassword;

    public ChangePasswordPayloadRequest(String usernameOrEmail, String newPassword) {
        this.usernameOrEmail = usernameOrEmail;
        this.newPassword = newPassword;
    }

    public String getUsernameOrEmail() {
        return usernameOrEmail;
    }

    public void setUsernameOrEmail(String usernameOrEmail) {
        this.usernameOrEmail = usernameOrEmail;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
