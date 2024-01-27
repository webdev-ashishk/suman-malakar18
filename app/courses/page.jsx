"use client";
import dynamic from "next/dynamic";
const CoursesData = dynamic(() => import("./CoursesData"));
const Courses = () => {
  return (
    <section>
      <CoursesData />
    </section>
  );
};

export default Courses;
