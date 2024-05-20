let students = []

const Uimaker = () => {
    document.getElementById("studentList").innerHTML = ""

    for (let i = 0; i < students.length; i++) {
        let name = document.createElement("h1")
        name.innerHTML = students[i].name
    }
}
const handleStudentData = (e) => {
    e.preventDefault();

    let name = getElementById('name').value
    let course = getElementById('course').value
    let grid = getElementById('grid').value

    let data = {
        name: name,
        course: course,
        grid: grid,
    };

    students.push(data);
    Uimaker();
}

document.getElementById("studentData").addEventListener("submit", handleStudentData)