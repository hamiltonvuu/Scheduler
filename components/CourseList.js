import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { termMap } from "../constants/terms";
import TermSelector from "./TermSelector";
import CourseSelector from "./CourseSelector";

const getCourseTerm = (course) => termMap[course.id.charAt(0)];

const CourseList = ({ courses, view }) => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");
  const termCourses = courses.filter(
    (course) => selectedTerm === getCourseTerm(course)
  );

  return (
    <ScrollView>
      <TermSelector
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <CourseSelector courses={termCourses} view={view} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CourseList;
