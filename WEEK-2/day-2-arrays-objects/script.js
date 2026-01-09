// Array of student objects
const students = [
    { name: "Asha", marks: 85 },
    { name: "Rahul", marks: 42 },
    { name: "Meera", marks: 74 },
    { name: "Kiran", marks: 30 }
];

// Console output
students.forEach(student => {
    console.log(`Name: ${student.name}, Marks: ${student.marks}`);
});

// Display in UI
const tableBody = document.getElementById("studentTable");

students.forEach(student => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.innerText = student.name;

    const marksCell = document.createElement("td");
    marksCell.innerText = student.marks;

    const statusCell = document.createElement("td");
    statusCell.innerText = student.marks >= 40 ? "Pass" : "Fail";

    row.appendChild(nameCell);
    row.appendChild(marksCell);
    row.appendChild(statusCell);

    tableBody.appendChild(row);
});


