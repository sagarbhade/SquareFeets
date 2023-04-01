package com.squarefeets.payload;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class TestPayload {
    @NotBlank
    private String usernameOrEmail;

    @NotBlank
    private List<Object> lisOfProperties;

    public String getUsernameOrEmail() {
        return usernameOrEmail;
    }

    public void setUsernameOrEmail(String usernameOrEmail) {
        this.usernameOrEmail = usernameOrEmail;
    }

    public List<Object> getLisOfProperties() {
        return lisOfProperties;
    }

    public void setLisOfProperties(List<Object> lisOfProperties) {
        this.lisOfProperties = lisOfProperties;
    }

    @Override
    public String toString() {
        return "TestPayload{" +
                "usernameOrEmail='" + usernameOrEmail + '\'' +
                ", lisOfProperties=" + lisOfProperties +
                '}';
    }
}
