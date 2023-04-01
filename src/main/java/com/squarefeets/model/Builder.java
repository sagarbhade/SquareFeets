package com.squarefeets.model;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name = "Builder", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "builder_license"
        })
})
public @Data class Builder implements Serializable {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "builder_id")
    private int builderId;

    @Column(name = "builder_license")
    private String builderLicense;

    @Column(name = "approval_status")
    private String approvalStatus;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    
    @OneToMany(mappedBy = "builder",cascade = CascadeType.ALL)
    List<Property> property;
    

//    public Builder(String builderLicense, String approvalStatus) {
//        this.builderLicense = builderLicense;
//        this.approvalStatus = approvalStatus;
//    }

    public Builder(String builderLicense) {
        this.builderLicense = builderLicense;
    }

    
}
