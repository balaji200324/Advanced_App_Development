package com.futurethink.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.futurethink.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Optional<Course> findByCourseName(String courseName);
    Boolean existsByCourseName(String courseName);
}
