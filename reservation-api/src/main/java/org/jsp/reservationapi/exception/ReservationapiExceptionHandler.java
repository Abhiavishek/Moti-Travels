package org.jsp.reservationapi.exception;

import org.jsp.reservationapi.dto.ResponseStructure;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ReservationapiExceptionHandler extends ResponseEntityExceptionHandler{
    @ExceptionHandler(IdNotFoundException.class)
	ResponseEntity<ResponseStructure<String>>handleINFE(IdNotFoundException e){
		ResponseStructure<String>structure = new ResponseStructure<>();
		structure.setData("Invalid ID");
		structure.setMessage("Id Not Found");
		structure.setStatuscode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
	}
    
    @ExceptionHandler(InvalidCredentialException.class)
   	ResponseEntity<ResponseStructure<String>>handleICE(InvalidCredentialException e){
   		ResponseStructure<String>structure = new ResponseStructure<>();
   		structure.setData("Invalid Details");
   		structure.setMessage("Invalid UserName or phone or password");
   		structure.setStatuscode(HttpStatus.NOT_FOUND.value());
   		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
   	}
}
