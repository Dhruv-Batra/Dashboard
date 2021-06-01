import { useEffect } from "react";

export default function Abby() {
  useEffect(() => {
    //     fetch("http://localhost:8080/abby/teachers")
    //       .then((response) => response.json())
    //       .then((response) => console.log(response));

    //     const teacherData = {
    //       name: "Franklin Nabors",
    //       gradeLevel: 5,
    //       roomNumber: 107,
    //       employeeStatus: "part time",
    //       students: {},
    //     };

    //     fetch("http://localhost:8080/abby/teacher/add", {
    //       method: "POST",

    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },

    //       body: JSON.stringify(teacherData),
    //     });

    const studentData = {
      teacherId: "0oG3nsOBuo6UnVYSo4Fc",
      name: "Monica Green",
      gradeLevel: 5,
      birthday: "September 23, 2012",
      address: "222 Sesame St.",
      allergies: null,
      classGrade: 98.4,
      gradeHistory: [95.6, 94.3, 99.4, 98.7, 96.8],
      emergencyContact: {
        name: "Tom Green",
        relationship: "father",
        phoneNumber: "(804) 894-4389",
      },
    };

    fetch("http://localhost:8080/abby/student/add", {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(studentData),
    });
  }, []);

  return <div></div>;
}
