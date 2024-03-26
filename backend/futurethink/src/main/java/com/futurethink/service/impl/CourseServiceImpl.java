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
    private final CourseRepository courseRepo;

    @Override
    public void createCourse(CourseRequest courseRequest)
    {
        Course course =new Course();
        course.setCourseName(courseRequest.getCourseName());
        course.setWeeks(courseRequest.getWeeks());
        course.setDescrption(courseRequest.getDescrption());
        course.setPrice(courseRequest.getPrice());
        courseRepo.save(course);     
    }

    @Override
    public void updateCourse(long cid,CourseUpdateRequest userUpdateRequest){
        Course existingCourse=courseRepo.findById(cid)
        .orElseThrow(() -> new RuntimeException("User Not Found"));
        existingCourse.setCourseName(userUpdateRequest.getCourseName());
        existingCourse.setWeeks(userUpdateRequest.getWeeks());
        existingCourse.setDescrption(userUpdateRequest.getDescrption());
        existingCourse.setPrice(userUpdateRequest.getPrice());
    }

    @Override
    public void deleteCourse(long cid) {
       courseRepo.deleteById(cid);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepo.findAll();
    }
}