package com.futurethink.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ft_Enquiry")
public class Enquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Eid;
    private String UName;
    private String Enquiry;

    public Long getEid() {
        return Eid;
    }
    public void setEid(Long eid) {
        Eid = eid;
    }
    public String getUName() {
        return UName;
    }
    public void setUName(String uName) {
        UName = uName;
    }
    public String getEnquiry() {
        return Enquiry;
    }
    public void setEnquiry(String enquiry) {
        Enquiry = enquiry;
    }
    public void setWeeks(String enquiry2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setWeeks'");
    }

}
