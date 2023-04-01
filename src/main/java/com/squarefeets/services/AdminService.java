package com.squarefeets.services;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.sql.XAConnectionBuilder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.squarefeets.model.Builder;
import com.squarefeets.model.Property;
import com.squarefeets.model.RoleName;
import com.squarefeets.model.User;
import com.squarefeets.repository.BuilderRepository;
import com.squarefeets.repository.PropertyRepository;
import com.squarefeets.repository.RoleRepository;
import com.squarefeets.repository.UserRepository;

@Service
public class AdminService {

	@Autowired
	private PropertyRepository propertyRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BuilderRepository builderRepository;
	
	 @Autowired
	  RoleRepository roleRepository;

	//get property list
	public List<Property> getAllPropertiesList() {
		List<Property> propertyList = (List<Property>)this.propertyRepository.findAll();
		return propertyList;
	}
	
	//get builder list
	public List<User> getAllBuildersList() {
		List<User> builderList = (List<User>)this.userRepository.findAll();
//		if(builderList.contains(RoleName.ROLE_BUILDER))
		List<User> builderList2 = new ArrayList<>();
		
		for (User user : builderList) {
			if (user.getBuilder() != null) {
				builderList2.add(user);
			}
		}
		return builderList2;
	}
	
	
	//delete Property
	public void deleteProperty(int propertyId) {
		Property p = propertyRepository.getById(propertyId);
		propertyRepository.delete(p);
	}
	
	
	//delete Builder
	public void deleteBuilder(long id) {
		User user = userRepository.getById(id);
		userRepository.delete(user);
	}
	
	//update approval status of builder
	public void updateApprovalStatus(Builder builder, String approvalStatus) {
		
		builder.setApprovalStatus("Approved");
		builderRepository.save(builder);
	}




}
