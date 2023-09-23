package org.jsp.reservationapi.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.jsp.reservationapi.dao.AdminDao;
import org.jsp.reservationapi.dao.BusDao;
import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.Bus;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BusService {
	@Autowired
	private BusDao bdao;
	@Autowired
	private AdminDao adao;

	
	public ResponseEntity<ResponseStructure<Bus>> saveBus(Bus b, int adminId){
		ResponseStructure<Bus>structure = new ResponseStructure<>();
		Optional<Admin>recAdmin = adao.findById(adminId);
		if(recAdmin.isPresent()) {
			Admin a = recAdmin.get();
			a.getBuses().add(b);
			b.setAdmin(a);
			adao.updateAdmin(a);
			bdao.saveBus(b);
			structure.setData(b);
			structure.setMessage("Bus added");
			structure.setStatuscode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Bus>>(structure, HttpStatus.CREATED);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<List<Bus>>>filter(String from, String to, LocalDate dop){
		ResponseStructure<List<Bus>>structure = new ResponseStructure<>();
		structure.setData(bdao.Filter(from, to, dop));
		structure.setMessage("List of Buses");
		structure.setStatuscode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Bus>>>(structure,HttpStatus.OK);
	}
}
