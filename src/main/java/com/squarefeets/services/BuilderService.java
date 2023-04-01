package com.squarefeets.services;

import java.util.Optional;
import java.util.PropertyPermission;

import com.squarefeets.model.*;
import com.squarefeets.payload.UpdatePropertyPayload;
import com.squarefeets.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squarefeets.repository.BuilderRepository;
import com.squarefeets.repository.PropertyRepository;

@Service
public class BuilderService {
	
	@Autowired
	private BuilderRepository builderRepository;
	
	@Autowired
	private PropertyRepository propertyRepository;

	@Autowired
	private PropertyService propertyService;

	@Autowired
	private UserRepository userRepository;

	//property by builder name
	public Optional<Builder> getAllPropertiesOfBuilder(Integer builderId) {
		Optional<Builder> builderPropertyList = this.builderRepository.findById(builderId);
		return builderPropertyList;
		
	}

	//update property by builder
	public void getBuilderApprovalStatus(Property property, String propertyName) {
		
		property.setPropertyName(propertyName);
		propertyRepository.save(property);
	}

	public Property getBuilderById(Integer propertyId){
		return propertyRepository.findByPropertyId(propertyId);
	}

	public Property getPropertyFromPayload(UpdatePropertyPayload updatePropertyPayload){
		Address address = new Address();
		Property_Type propertyType = new Property_Type();

		Property property = getBuilderById(updatePropertyPayload.getPropertyId());

		property.setPropertyName(updatePropertyPayload.getPropertyName());
		property.setDetails(updatePropertyPayload.getDetails());
		property.setPrice(updatePropertyPayload.getPrice());
		property.setConstructionStatus(updatePropertyPayload.getConstructionStatus());
		property.setReraReg(updatePropertyPayload.getReraReg());
		property.setArea(updatePropertyPayload.getArea());
		property.setRooms(updatePropertyPayload.getRooms());

		Builder builder = builderRepository.findById(Integer.parseInt(updatePropertyPayload.getBuilderId())).get();
		property.setBuilder(builder);

		address.setPlotNo(Integer.parseInt(updatePropertyPayload.getPlotNo()));
		address.setStreet(updatePropertyPayload.getStreet());
		address.setLandmark(updatePropertyPayload.getLandmark());
		address.setCity(updatePropertyPayload.getCity());
		address.setState(updatePropertyPayload.getState());

		propertyType = propertyService.findPropertyTypeById(Integer.parseInt(updatePropertyPayload.getPropertyTypeId()));
		property.setAddress(address);
		property.setPropertyType(propertyType);
//		User user = userRepository.findByEmail(updatePropertyPayload.getUseremail()).get();
//		property.setUser(user);
		propertyRepository.save(property);

		return property;

	}

}
