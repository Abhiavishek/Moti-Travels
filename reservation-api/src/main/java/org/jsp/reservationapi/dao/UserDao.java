package org.jsp.reservationapi.dao;

import java.util.Optional;

import org.jsp.reservationapi.dto.User;
import org.jsp.reservationapi.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
	@Autowired
	private UserRepo repository;
	
	public User saveUser(User u) {
		return repository.save(u);
	}
	
	public User updateUser(User u) {
		return repository.save(u);
	}
	
	public Optional<User> findById(int id) {
		return repository.findById(id);
	}
	
	public Optional<User> VerifyByEmail(String email, String password) {
		return repository.verifyByEmail(email, password);
	}

}
