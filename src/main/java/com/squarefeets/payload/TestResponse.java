package com.squarefeets.payload;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class TestResponse {
    @NotBlank
    private String usernameOrEmail;

    @NotBlank
    private List<Object> lisOfProperties;

    public TestResponse(String usernameOrEmail, List<Object> lisOfProperties) {
        this.usernameOrEmail = usernameOrEmail;
        this.lisOfProperties = lisOfProperties;
    }

    public TestResponse() {

    }

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
}
