package com.squarefeets.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squarefeets.model.Feedback;
import com.squarefeets.model.User;
import com.squarefeets.payload.FeedbackPayload;
import com.squarefeets.repository.FeedbackRepository;
import com.squarefeets.repository.UserRepository;

@Service
public class FeedbackService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	FeedbackRepository feedbackRepository;

//	public Feedback addFeedback(Feedback feedback) {
//		System.out.println(feedback);
//		
//		Feedback feed = getUserById(feedback.getUser().getId());
//		feed.setComments(feedback.getComments());
//		feedbackRepository.save(feed);
//		
//		return feed;
//		
//	}
//
//	private User getUserById(Long id) {
//		return feedbackRepository.findById(id);
//	}

	public Feedback addFeedbackfromPayload(FeedbackPayload feedbackPayload) {
	
		Feedback feedback = new Feedback();
		feedback.setComments(feedbackPayload.getComments());
		System.out.println(feedback);
		
		User user = userRepository.findByEmail(feedbackPayload.getUseremail()).get();
		feedback.setUser(user);
		feedbackRepository.save(feedback);
		
		return feedback;
	}


}
