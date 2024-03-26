package com.futurethink.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.futurethink.dto.request.EnquiryRequest;
import com.futurethink.model.Enquiry;
import com.futurethink.repository.EnquiryRepository;
import com.futurethink.service.EnquiryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EnquiryImpl implements EnquiryService {

    private final EnquiryRepository enqRepo;

    @Override
    public void createEnquiry (EnquiryRequest enquiryRequest)
    {
        Enquiry enquiry =new Enquiry();
        enquiry.setUName(enquiryRequest.getUName());
        enquiry.setEnquiry(enquiryRequest.getEnquiry());
        enqRepo.save(enquiry);     
    }

    @Override
    public void deleteEnquiry(long Eid) {
       enqRepo.deleteById(Eid);
    }

    @Override
    public List<Enquiry> getAllEnquiry() {
        return enqRepo.findAll();
    }
}
