
let students = [];

const Display = () => {
    document.getElementById('tbody').innerHTML = "";
    students.map((ele, index) => { // Added index parameter
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = ele.grid;
        let td2 = document.createElement('td');
        td2.innerHTML = ele.name;
        let td3 = document.createElement('td');
        td3.innerHTML = ele.course;
        let td4 = document.createElement('td'); // New td for delete button
        let deleteButton = document.createElement('button'); // Create delete button
        deleteButton.textContent = "Delete"; // Set button text
        deleteButton.addEventListener("click", () => { // Add click event listener
            deleteStudent(index); // Use captured index value
        });
        td4.appendChild(deleteButton);
        tr.append(td1, td2, td3, td4); // Add td1 to td4 to the row
        document.getElementById("tbody").appendChild(tr);
    });
};

const handleStudentData = (e) => {
    e.preventDefault();
    let data = {
        grid: document.getElementById('grid').value,
        name: document.getElementById('name').value,
        course: document.getElementById('course').value
    };
    students.push(data); // Push object(data) in array(students)
    Display(); // Call function(Display)
};
//delete all rows
const deleteData = () => {
    document.getElementById('tbody').innerHTML = "";
    students = [];
};
//delete particular row
const deleteStudent = (index) => {
    students.splice(index, 1);
    Display();
};
document.getElementById("studentData").addEventListener("submit", handleStudentData); // Added event listener
document.getElementById("deleteAll").addEventListener("click", deleteData); // Added event listener