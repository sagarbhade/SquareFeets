package com.squarefeets.payload;

import javax.validation.constraints.NotBlank;

public class EmailPresentPayload {

    @NotBlank
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
