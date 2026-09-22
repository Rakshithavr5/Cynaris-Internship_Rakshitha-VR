// Week 1 - Day 3
// JavaScript ES6+ Basics

// 1. ES5 to ES6+

var studentNameES5 = "Rakshitha";
var studentAgeES5 = 21;

var studentInfoES5 = "Student: " + studentNameES5 + ", Age: " + studentAgeES5;

console.log("ES5:", studentInfoES5);

const studentName = "Rakshitha";
const studentAge = 21;

const studentInfo = `Student: ${studentName}, Age: ${studentAge}`;

console.log("ES6+:", studentInfo);

// 2. filter(), map(), reduce()

const students = [
  { name: "Rakshitha", marks: 91 },
  { name: "Ananya", marks: 78 },
  { name: "Priya", marks: 85 },
  { name: "Sneha", marks: 65 },
  { name: "Kavya", marks: 95 },
];

// filter()
const highScorers = students.filter((student) => student.marks >= 80);

console.log("Students scoring 80+:", highScorers);

// map()
const studentNames = students.map((student) => student.name);

console.log("Student Names:", studentNames);

// reduce()
const totalMarks = students.reduce(
  (total, student) => total + student.marks,
  0,
);

console.log("Total Marks:", totalMarks);

const averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks);

// 3. Object Destructuring

const student = {
  name: "Rakshitha",
  age: 21,
  course: "B.Tech Information Technology",
  city: "Bengaluru",
};

const { name, age, course, city } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);
console.log("City:", city);

// 4. Array Destructuring

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const [html, css, javascript, react, node] = technologies;

console.log("HTML:", html);
console.log("CSS:", css);
console.log("JavaScript:", javascript);
console.log("React:", react);
console.log("Node.js:", node);

// 5. Arrow Function

const greet = (userName) => `Hello, ${userName}!`;

console.log(greet("Rakshitha"));

// 6. Template Literal

const technology = "JavaScript";
const learningDay = "Week 1 - Day 3";

console.log(`Currently learning ${technology} - ${learningDay}`);

// 7. Event Listener
// This checks whether an existing button is available.

const button = document.getElementById("showMessage");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = `Hello ${name}! Welcome to JavaScript ES6+ 🚀`;

    message.style.fontWeight = "bold";
  });
}

console.log("JavaScript ES6+ tasks completed successfully.");
