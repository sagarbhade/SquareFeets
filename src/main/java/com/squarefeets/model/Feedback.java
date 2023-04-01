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


@NoArgsConstructor
@Table(name = "feedback")
@Entity
public @Data class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "feedback_id")
	private Long feedbackId;
	
	@Column(name = "rating")
	private int rating;
//	
	@Column(name = "comments")
	private String comments;
	
	@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "property_id")
    private Property property;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
	

	public Feedback(String comments) {
		super();
		this.comments = comments;
	}
	
	
}
