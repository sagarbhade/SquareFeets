package com.squarefeets.controller;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.squarefeets.model.Builder;
import com.squarefeets.model.Property;
import com.squarefeets.model.User;
import com.squarefeets.repository.UserRepository;
import com.squarefeets.services.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@Autowired
	private UserRepository userRepository;
	
	//propertyList
	@GetMapping("/propertyList")
	//@RolesAllowed("ROLE_ADMIN")
	public ResponseEntity<List<Property>> getProperty(){

		List<Property> propertyList = adminService.getAllPropertiesList();
		if(propertyList.size()<=0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(propertyList);
	}
	
	//BuilderList
	@GetMapping("/builderList")
	//@RolesAllowed("ROLE_ADMIN")
	public ResponseEntity<List<User>> getBuilder(){

		List<User> builderList = adminService.getAllBuildersList();
		if(builderList.size()<=0) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(builderList);
	}
	
//	//Update Builder Approval Status
//	@PutMapping("/builderApproval/{builderId}")
//	public ResponseEntity<Integer> approveBuilder(@PathVariable("builderId") Integer builderId){
//		
//		try {
//			this.adminService.updateApprovalStatus(builderId, "Approved");
//			return ResponseEntity.ok().body(builderId);
//		}
//		catch (Exception e) {
//			e.printStackTrace();
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//		}
//	}
	
	@PutMapping("/builderApproval/{id}")
	//@RolesAllowed("ROLE_ADMIN")
	public ResponseEntity<Long> approveBuilder2(@PathVariable("id") Long id){
		
		try {
			User user = userRepository.getById(id);
			Builder builder= user.getBuilder();
			this.adminService.updateApprovalStatus(builder, "Approved");
			return ResponseEntity.ok().body(id);
		}
		catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	
	@DeleteMapping("/removeProperty/{propertyId}")
	public ResponseEntity<?>deleteProperty(@PathVariable("propertyId") int propertyId){
	//System.out.println(propertyId);
	try {
		adminService.deleteProperty(propertyId);
		return ResponseEntity.status(HttpStatus.OK).build();
	} catch (Exception e) {
		e.printStackTrace();
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	}
}
	
		
	//Delete Builder
		@DeleteMapping("/removeBuilder/{id}")
	//	@RolesAllowed("ROLE_ADMIN")
		public ResponseEntity<?>deleteBuilder(@PathVariable("id") long id){
		
		try {
			adminService.deleteBuilder(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	
}
	
