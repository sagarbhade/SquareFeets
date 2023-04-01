package com.squarefeets.model;

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
@Table(name = "Property_Images")
public @Data class Property_Images {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "img_id")
	private int imgId;
	
	@Column(name = "image_name")
	private String imageName;
	
	@Column(name = "img_description")
	private String imgDescription;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "property_id")
    private Property property;
	
	public Property_Images(String imageName, String imgDescription) {
		super();
		this.imageName = imageName;
		this.imgDescription = imgDescription;
	}
	
	
}
