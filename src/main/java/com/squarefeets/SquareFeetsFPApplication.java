package com.squarefeets;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication

@EntityScan(basePackageClasses = {
		SquareFeetsFPApplication.class,
		Jsr310JpaConverters.class
})
public class SquareFeetsFPApplication {

	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}
 

	public static  void main(String[] args) {
		SpringApplication.run(SquareFeetsFPApplication.class, args);
		
	}

}
