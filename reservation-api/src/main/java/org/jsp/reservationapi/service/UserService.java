package org.jsp.reservationapi.service;

import java.util.Optional;

import org.jsp.reservationapi.dao.UserDao;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.dto.User;
import org.jsp.reservationapi.exception.IdNotFoundException;
import org.jsp.reservationapi.exception.InvalidCredentialException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserDao dao;
	
	public ResponseEntity<ResponseStructure<User>>saveUser(User u){
		ResponseStructure<User>structure = new ResponseStructure<>();
		structure.setData(dao.saveUser(u));
		structure.setMessage("user saved Successfully");
		structure.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<User>>updateUser(User u){
		ResponseStructure<User>structure = new ResponseStructure<>();
		structure.setData(dao.updateUser(u));
		structure.setMessage("user saved Successfully");
		structure.setStatuscode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<ResponseStructure<User>>findById(int id){
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User>recUser = dao.findById(id);
		if(recUser.isPresent()) {
			structure.setData(recUser.get());
			structure.setMessage("User is Found");
			structure.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<User>>verifyByEmail(String email, String password){
		ResponseStructure<User>structure = new ResponseStructure<>();
		Optional<User>recUser = dao.VerifyByEmail(email, password);
		if(recUser.isPresent()) {
			structure.setData(recUser.get());
			structure.setMessage("User Found");
			structure.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		}
		throw new InvalidCredentialException();
	}

}
