package org.jsp.reservationapi.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Bus {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="from_loc", nullable = false)
	private String from;
	@Column(name="to_loc", nullable = false)
	private String to;
	@Column(name="Bus_no", nullable = false)
	private String Busno;
	@Column(nullable = false)
	private String name;
	@Column(name="no_of_seats", nullable = false)
	private int nos;
	@Column(name="date_of_departure", nullable = false)
	private LocalDate dop;
	@ManyToOne
	@JoinColumn
	@JsonIgnore
	private Admin admin;

}
