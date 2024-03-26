package com.futurethink.service;

import java.util.List;

import com.futurethink.dto.request.EnquiryRequest;
import com.futurethink.model.Enquiry;

public interface EnquiryService {

    void createEnquiry(EnquiryRequest enquiryrequest);
    void deleteEnquiry(long Eid);
    List<Enquiry> getAllEnquiry();
}
