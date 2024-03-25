package com.futurethink.service;

import java.util.List;

import com.futurethink.dto.request.CourseRequest;
import com.futurethink.dto.request.CourseUpdateRequest;
import com.futurethink.model.Course;

public interface CourseService {

    void createCourse(CourseRequest courseRequest);
    void updateCourse(long cid, CourseUpdateRequest courseUpdaterequest);
    void deleteCourse(long cid);
    List<Course> getAllCourses();
}
