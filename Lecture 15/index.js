//OBJECT

let student = {
    //key : value
    name: "React",
    number: 123,
    course: "Full Stack"
};
//for whole object print
console.log(student);

//for single value of object printing
console.log(student.name);
console.log(student.number);
console.log(student.course);

//for updation
student.number = 1234
console.log(student);

// for new create
student.grid = 12
console.log(student);

//____________________________________________________________________________________________________________________

//Object inside the Object
let student = {
    //key : value
    name: "React",
    number: 123,
    course: "Full Stack",
    grid: 12,

    add: {
        houseNo: 567,
        city: "Surat",
        state: "gujarat",
    },
};

//for whole object print
console.log(student);

//for second objects any value printing
console.log(student.add.houseNo);
console.log(student.add.city);
console.log(student.add.state);

//____________________________________________________________________________________________________________________

//Array inside the Object
let student = {
    //key : value
    name: "React",
    number: 123,
    course: "Full Stack",
    grid: 12,

    add: {
        houseNo: 567,
        city: "Surat",
        state: "gujarat",
    },

    skills: ["html", "css", "JavaScript", "reat", "node", "mongodb"],

};

//for whole object print
console.log(student);

//for array's any number of element printing
console.log(student.skills[2]);

//for array's last element printing
let arr = student.skills.lenght - 1;
console.log(student.skills[arr]);

//_______________________________________________________________________________________________________________________________________________________________________

//Array of Object
let student = {
    //key : value
    name: "React",
    number: 123,
    course: "Full Stack",
    grid: 12,

    add: {
        houseNo: 567,
        city: "Surat",
        state: "gujarat",
    },

    skills: ["html", "css", "JavaScript", "reat", "node", "mongodb"],

    friends: [
        { name: "React", number: 12345, grid: 9876 },
        { name: "Node", number: 23456, grid: 7654 },
        { name: "JS", number: 56789, grid: 5432 },
    ],
};

//for single line whole data ptinting {0,1,2 is index}
console.log(student.friends[0]);
console.log(student.friends[1]);
console.log(student.friends[2]);

//for 1 value printing
//console.log(student.friends[2.name]);




