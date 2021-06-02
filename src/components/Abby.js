import { useEffect } from "react";

export default function Abby() {
  useEffect(() => {
    //     fetch("http://localhost:8080/abby/teachers")
    //       .then((response) => response.json())
    //       .then((response) => console.log(response));
    // const teacherData = {
    //   name: "Garrett Hartman",
    //   gradeLevel: 1,
    //   roomNumber: 110,
    //   employeeStatus: "full time",
    // };
    // fetch("http://localhost:8080/abby/teacher/add", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(teacherData),
    // });
    // const studentData = {
    //   teacherId: "0oG3nsOBuo6UnVYSo4Fc",
    //   name: "Monica Green",
    //   gradeLevel: 5,
    //   birthday: "September 23, 2012",
    //   address: "222 Sesame St.",
    //   allergies: null,
    //   classGrade: 98.4,
    //   gradeHistory: [95.6, 94.3, 99.4, 98.7, 96.8],
    //   emergencyContact: {
    //     name: "Tom Green",
    //     relationship: "father",
    //     phoneNumber: "(804) 894-4389",
    //   },
    // };
    // fetch("http://localhost:8080/abby/student/add", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(studentData),
    // });
    // const eventData = {
    //   date: "06/02/2021",
    //   description: "Scheduled from 10 a.m. to 1 p.m. All proceeds go to PTA. ",
    //   time: 1000,
    //   title: "School Bake Sale",
    // };
    // fetch("http://localhost:8080/abby/event/add", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(eventData),
    // });
    // const studentUpdateData = {
    //   studentId: "b1gdbpCtr3U2qVRlHbDw",
    //   teacherId: "hMn0ELQIc3DNQoERbenX",
    //   field: "address",
    //   update: "2713 Route Dr.",
    // };
    // fetch("http://localhost:8080/abby/student/update", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(studentUpdateData),
    // });
    // const teacherUpdateData = {
    //   teacherId: "hMn0ELQIc3DNQoERbenX",
    //   field: "name",
    //   update: "Ashley Hewlett",
    // };
    // fetch("http://localhost:8080/abby/teacher/update", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(teacherUpdateData),
    // });
  }, []);

  return <div></div>;
}
