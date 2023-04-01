package com.squarefeets.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.squarefeets.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

	Feedback findByFeedbackId(Integer feedbackId);;
	
}
