//array
let students = []

//function for data show in webpage(UI)
const Uimaker = () => {
    document.getElementById("studentList").innerHTML = " "
    for (let i = 0; i < students.length; i++) {
        //tag create
        let name = document.createElement("h1")
        name.innerHTML = students[i].name
    }
}

//function for data store
const handleStudentData = (e) => {
    e.preventDefault();

    let name = getElementById('name').value
    let course = getElementById('course').value
    let grid = getElementById('grid').value

    let data = {
        name: name,
        course: course,
        grid: grid
    }

    // let data={
    //     name:document.getElementById('name').value
    //      course:document.getElement('course').value
    //      grid:document.getElement('grid').value
    // }

    students.push(data);
    Uimaker()

}

document.getElementById("studentData").addEventListener("submit", handleStudentData)
