package com.futurethink.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.futurethink.dto.request.CourseRequest;
import com.futurethink.dto.request.CourseUpdateRequest;
import com.futurethink.model.Course;
import com.futurethink.repository.CourseRepository;
import com.futurethink.service.CourseService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {
    private final CourseRepository userRepo;

    @Override
    public void createCourse(CourseRequest userRequest)
    {
        Course course =new Course();
        course.setCourseName(userRequest.getCourseName());
        course.setWeeks(userRequest.getWeeks());
        course.setDescrption(userRequest.getDescrption());
        course.setPrice(userRequest.getPrice());
        userRepo.save(course);     
    }

    @Override
    public void updateCourse(long cid,CourseUpdateRequest userUpdateRequest){
        Course existingCourse=userRepo.findById(cid)
        .orElseThrow(() -> new RuntimeException("User Not Found"));
        existingCourse.setCourseName(userUpdateRequest.getCourseName());
        existingCourse.setWeeks(userUpdateRequest.getWeeks());
        existingCourse.setDescrption(userUpdateRequest.getDescrption());
        existingCourse.setPrice(userUpdateRequest.getPrice());
    }

    @Override
    public void deleteCourse(long cid) {
       userRepo.deleteById(cid);
    }

    @Override
    public List<Course> getAllCourses() {
        return userRepo.findAll();
    }
}