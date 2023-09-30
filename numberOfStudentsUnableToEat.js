/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    const circularStudents = students.filter((student) => (student === 0));
    const squareStudents = students.filter((student) => (student === 1));
    for (let i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i] === 0 && circularStudents.length > 0) {
            circularStudents.shift()
        } else if (sandwiches[i] === 1 && squareStudents.length > 0) {
            squareStudents.shift()
        } else {
            break
        }
    }
    return circularStudents.length + squareStudents.length
};

/* 
The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.
*/