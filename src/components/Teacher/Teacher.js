import AddTeach from "./AddTeach";
import UpdateTeach from "./UpdateTeach";
import ClassRedirect from "./ClassRedirect";
import TeachIdProvider, { TeachIdContext } from "./TeachIdContext";

export default function Teacher() {
  // method for getting teachers + use effect

  // method to update students

  return (
    // map teachers to table, link to class page

    // button to update student
    <>
      <AddTeach />
      <UpdateTeach
        teacherName="Deborah Cook"
        teacherId="0oG3nsOBuo6UnVYSo4Fc"
      />

      <ClassRedirect />
      <div></div>
    </>
  );
}
