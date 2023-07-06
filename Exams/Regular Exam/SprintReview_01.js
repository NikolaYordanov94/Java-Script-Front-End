function sprintReview(input) {
    let n = input.shift();

    let tasksMap = {}

    let toDoTasksTotalPoints = 0;
    let inProgressTasksTotalPoints = 0;
    let codeReviewTasksTotalPoints = 0;
    let doneTasksTotalPoints = 0;

    for (let index = 0; index < n; index++) {
        let tasks = [];
        let inputParts = input.shift().split(":");

        let [name, taskID, taskTitle, taskStatus, taskPoints] = inputParts;
        let task = { taskID, taskTitle, taskStatus, taskPoints };
        tasks.push(task);
        if (tasksMap.hasOwnProperty(name)) {
            tasksMap[name].tasks.push(task);
        } else {
            tasksMap[name] = { name, tasks };
        }
    }

    for (let index = 0; index < input.length; index++) {
        let commandParts = input[index].split(":");
        let commandType = commandParts[0];

        switch (commandType) {
            case "Add New":
                let name = commandParts[1];
                if (tasksMap.hasOwnProperty(name)) {
                    let [taskID, taskTitle, taskStatus, taskPoints] = commandParts.slice(-4);
                    let newTask = { taskID, taskTitle, taskStatus, taskPoints };

                    tasksMap[name].tasks.push(newTask);
                } else {
                    console.log(`Assignee ${name} does not exist on the board!`);
                }
                break;

            case "Change Status":
                let nameForChangeStatus = commandParts[1];
                let taskForChangeID = commandParts[2];
                let taskNewStatus = commandParts[3];

                if (tasksMap.hasOwnProperty(nameForChangeStatus)) {
                    let tasksArr = tasksMap[nameForChangeStatus].tasks;
                    let flagTaskExists = false;
                    for (const task of tasksArr) {
                        if (taskForChangeID === task.taskID) {
                            task.taskStatus = taskNewStatus;
                            flagTaskExists = true;
                        }
                    }
                    if (!flagTaskExists) {
                        console.log(`Task with ID ${taskForChangeID} does not exist for ${nameForChangeStatus}!`)
                    }
                } else {
                    console.log(`Assignee ${nameForChangeStatus} does not exist on the board!`)
                }
                break;

            case "Remove Task":
                let nameForRemoveTask = commandParts[1];
                let indexForRemove = Number(commandParts[2]);

                if (tasksMap.hasOwnProperty(nameForRemoveTask)) {
                    let tasksArr = tasksMap[nameForRemoveTask].tasks;
                    if (indexForRemove >= 0 && indexForRemove < tasksArr.length) {
                        tasksArr.splice(indexForRemove, 1);
                    } else {
                        console.log("Index is out of range!");
                    }
                } else {
                    console.log(`Assignee ${nameForRemoveTask} does not exist on the board!`)
                }
                break;
        }
    }


    for (const assignee in tasksMap) {
        for (const task of tasksMap[assignee].tasks) {
            switch (task.taskStatus) {
                case "ToDo":
                    toDoTasksTotalPoints += Number(task.taskPoints);
                    break;
                case "In Progress":
                    inProgressTasksTotalPoints += Number(task.taskPoints);
                    break;
                case "Code Review":
                    codeReviewTasksTotalPoints += Number(task.taskPoints);
                    break;
                case "Done":
                    doneTasksTotalPoints += Number(task.taskPoints);
                    break;
            }
        }
    }

    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    console.log(`Done Points: ${doneTasksTotalPoints}pts`);

    if (doneTasksTotalPoints >= (toDoTasksTotalPoints + inProgressTasksTotalPoints + codeReviewTasksTotalPoints)) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }
}


sprintReview([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
);