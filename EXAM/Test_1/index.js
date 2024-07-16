let employee = [];

const displayData = () => {
    console.log("Displaying data:", employee);
    const tbody = document.getElementById('TableBody');
    tbody.innerHTML = "";
    employee.map((element, index) => {
        console.log("Employee:", element);
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        col1.textContent = element.name;
        let col2 = document.createElement('td');
        col2.textContent = element.jobrole;
        let col3 = document.createElement('td');
        col3.textContent = element.department;
        let col4 = document.createElement('td');
        col4.textContent = element.salary;
        let col5 = document.createElement('td');
        col5.textContent = element.email;
        let col6 = document.createElement('td');
        col6.textContent = element.workexperience;
        let col7 = document.createElement('td');
        col7.textContent = element.workexperience > 5 ? 'senior' : 'junior';
        let col8 = document.createElement('td');
        col8.textContent = "Delete";
        col8.addEventListener("click", () => deleteRow(index));
        row.append(col1, col2, col3, col4, col5, col6, col7, col8);
        tbody.append(row);
    });
    count()
    document.getElementById('totalSalary').textContent = getTotalSalary();

};

const setData = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById('name').value,
        jobrole: document.getElementById('jobrole').value,
        department: document.getElementById('department').value,
        salary: document.getElementById('salary').value,
        email: document.getElementById('email').value,
        workexperience: document.getElementById('workexperience').value
    };
    employee.push(data);
    displayData();
};

const deleteAllData = () => {
    document.getElementById('TableBody').innerHTML = "";
    employee = [];
  
};

const deleteRow = (index) => {
    employee.splice(index, 1);
    console.log("Employee deleted at index", index, ". Updated employee list:", employee);
    displayData();
};
const count = () => {
    document.getElementById('totalEmployees').textContent = employee.length;
};
const getTotalSalary = () => {
    let totalSalary = 0;
    for (let i = 0; i < employee.length; i++) {
        totalSalary = totalSalary + Number(employee[i].salary);
    }
    return totalSalary + ''; 
};
document.getElementById('deleteAll').addEventListener("click", deleteAllData);
document.getElementById('empdata').addEventListener("submit", setData);