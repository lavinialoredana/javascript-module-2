/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/

const mentors = [
    {
        firstName: "Antonio",
        lastName: "Miranda",
        skills: ["JS", "React", "Node"],
        class: "Mar1",
        studentLikes: 0,
        job: {
            company: "Google",
            position: "Senior developer",
            city: "Barcelona",
        },
    },
    {
        firstName: "Leo",
        lastName: "Messi",
        skills: ["Play football"],
        class: "Mar3",
        studentLikes: 0,
        job: {
            company: "FC Barcelona",
            position: "Player",
            city: "Barcelona",
        },
    },
    {
        firstName: "John",
        lastName: "VanDamme",
        skills: ["React", "Angular", "Python", "Node"],
        class: "Mar4",
        studentLikes: 0,
        job: {
            company: "Facebook",
            position: "Software Manager",
            city: "Chicago",
        },
    },
    {
        firstName: "Giorgio",
        lastName: "Polvara",
        skills: ["HTML", "JS", "React"],
        class: "Mar2",
        studentLikes: 0,
        job: {
            company: "Amazon",
            position: "Senior developer",
            city: "Barcelona",
        },
    },
];

//YOUR CODE HERE
// // 1
// const displayMentors = (mentorsArray) => {
//     mentorsArray.forEach((mentor) => {
//         if (mentor.job.city === "Barcelona" && mentor.skills.includes("React"))
//             console.log(
//                 `Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and I know React.`
//             );
//     });
// };

// displayMentors(mentors);

// //  2
// const setClassAndAddSkill = (mentors) => {
//     mentors.forEach((mentor) => {
//         if (mentor.job.city === "Barcelona") {
//             mentor.skills.push("SQL");
//             mentor.class = "Jun1";
//         }
//     });
// };

// // 3

// mentors.forEach((mentor) => {
//     // ... rest parameter = accepts multiple parameters and transforms them into an array
//     mentor.addSkill = (...skill) => {
//         //  ... spread operator = receives an array and removes the brakets of the array and puts everything in one single array
//         mentor.skills.push(...skill);
//     };
// });

// mentors[0].addSkill("Typescript", "Ruby", "MongoDB");
// console.log(" my 1st obj", mentors[0]);

// // 4
// const addSkill = (mentors, ...newSkill) => {
//     mentors.forEach((mentor) => {
//         mentor.skill.push(...newSkill);
//     });
// };

// // 5

// const removeSkill = (mentors, skill) => {
//     mentors.forEach((mentor) => {
//         let index = mentor.skills.indexOf(skill);
//         if (index >= 0) mentor.skills.splice(index, 1);
//     });
// };

// removeSkill(mentors, "React");
// console.log("Antonio coballa", mentors[1]);

// 6
// const mentorWithMoreSkills = () => {
//     let count = 0;
//     let indexMentor = 0;

//     mentors.forEach((mentor, index) => {
//         if (mentor.skills.length > count) {
//             count = mentor.skills.length;
//             indexMentor = index;
//         }
//     });

//     return `${mentors[indexMentor].firstName} ${mentors[indexMentor].lastName}`
// };

// console.log(mentorWithMoreSkills());


// // 7


// mentors.forEach((mentor) => {
//     mentor.addStudentLikes = () => {
//      mentor.studentLikes += 1

//     }
// })

// mentors[1].addStudentLikes();
// console.log("like", mentors[1])

// 8

const addStudentLikes = () => {
    mentors.forEach(mentor => {
        mentor.studentLikes += 1
    })
}

addStudentLikes()

console.log(mentors[2])