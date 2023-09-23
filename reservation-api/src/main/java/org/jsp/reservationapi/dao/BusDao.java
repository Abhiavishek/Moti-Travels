package org.jsp.reservationapi.dao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.jsp.reservationapi.dto.Bus;
import org.jsp.reservationapi.repository.BusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BusDao {
	@Autowired
	private BusRepo repository;
	
	public Bus saveBus(Bus b) {
		return repository.save(b);
	}
	
	public Bus updateBus(Bus b) {
		return repository.save(b);
	}
	
	public List<Bus> Filter(String from, String to, LocalDate dop) {
		return repository.filter(from, to, dop);
	}

}
