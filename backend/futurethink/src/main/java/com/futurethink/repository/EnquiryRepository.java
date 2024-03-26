package com.futurethink.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.futurethink.model.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {
    Optional<Enquiry> findByUName(String UName);
}