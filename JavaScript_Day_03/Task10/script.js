const name = prompt("Enter Employee name: ");
const attendance = prompt("Enter your Attendance(Present/Absent) : ");

let attendanceStatus = (attendance.toLowerCase() === "present");

console.log(`Welcome ${name}`);
console.log(`Attendence : ${attendanceStatus?"Present":"Absent"}`);

