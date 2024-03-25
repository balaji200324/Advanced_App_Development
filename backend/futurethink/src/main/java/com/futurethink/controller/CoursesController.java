package com.futurethink.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.futurethink.dto.request.CourseRequest;
import com.futurethink.dto.request.CourseUpdateRequest;
import com.futurethink.dto.response.MessageResponse;
import com.futurethink.model.Course;
import com.futurethink.repository.CourseRepository;
import com.futurethink.service.CourseService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
@Tag(name = "Course Controls", description = "Endpoints for course")
public class CoursesController {
    private final CourseService courseService;
    private final CourseRepository courseRepository;

    @PostMapping("/AddCourse")
    @PreAuthorize("hasRole('Admin')")
    @Operation(summary = "Add course", description = "Allows admin to create course.")

    public ResponseEntity<?> createCourse(@Valid @RequestBody CourseRequest courseRequest) {
	    if (courseRepository.existsByCourseName(courseRequest.getCourseName())) {
	      return ResponseEntity.badRequest().body(new MessageResponse("Error: course already enrolled!"));
	    }

		Course course = new Course();
        course.setCourseName(courseRequest.getCourseName());
        course.setWeeks(courseRequest.getWeeks());
        course.setDescrption(courseRequest.getDescrption());
		course.setPrice(courseRequest.getPrice());
        courseRepository.save(course);
        return ResponseEntity.ok(new MessageResponse("Course created successfully!"));
    }

    @PutMapping("/courses/{courseId}")
	@PreAuthorize("hasRole('Admin')")
    public ResponseEntity<?> updateCourse(@PathVariable Long courseId, @RequestBody CourseUpdateRequest courseUpdateRequest) {
	    Course existingcourse = courseRepository.findById(courseId)
	            .orElseThrow(() -> new RuntimeException("Error: Course not found."));

	    existingcourse.setCourseName(courseUpdateRequest.getCourseName());
	    existingcourse.setWeeks(courseUpdateRequest.getWeeks());
	    existingcourse.setDescrption(courseUpdateRequest.getDescrption());
	    existingcourse.setPrice(courseUpdateRequest.getPrice());
        courseRepository.save(existingcourse);
        return ResponseEntity.ok(new MessageResponse("Course updated successfully."));
    }


    @DeleteMapping("/courses/{courseId}")
	@PreAuthorize("hasRole('Admin')")
	public ResponseEntity<?> deleteCourse(@PathVariable Long courseId) {
	    courseService.deleteCourse(courseId);
	    return ResponseEntity.ok(new MessageResponse("Course deleted successfully."));
	}

}