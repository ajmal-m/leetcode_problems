/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let maxTime = 0;
    let employeeId = [];
    let prevTaskTime = 0;

    for(let i=0; i< logs.length; i++){
        let [ id, leaveTime ] = logs[i];
        if( (leaveTime-prevTaskTime)  > maxTime ){
            maxTime =  (leaveTime-prevTaskTime);
            employeeId = [];
            employeeId.push(id);
        }else if((leaveTime-prevTaskTime)  == maxTime){
            employeeId.push(id);
        }
        prevTaskTime = leaveTime;
    }
    employeeId = employeeId.sort((a,b) => (a-b));

    return employeeId[0];
};


/**
 * 
 * There are n employees, each with a unique id from 0 to n - 1.

You are given a 2D integer array logs where logs[i] = [idi, leaveTimei] where:

idi is the id of the employee that worked on the ith task, and
leaveTimei is the time at which the employee finished the ith task. All the values leaveTimei are unique.
Note that the ith task starts the moment right after the (i - 1)th task ends, and the 0th task starts at time 0.

Return the id of the employee that worked the task with the longest time. If there is a tie between two or more employees, return the smallest id among them.
 * 
 */