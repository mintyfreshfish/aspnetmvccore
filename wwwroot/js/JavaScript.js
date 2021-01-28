
$("#submit").click(function calculator() {
    //harvest from HTML
    const assignment = $("#assignment").val();
    const project = $("#project").val();
    const quiz = $("#quiz").val();
    const exam = $("#exam").val();
    const intex = $("#intex").val();
    const error = "Dude. This is a percentage game, that means you put a number between 0 and 100. I am starting to think you are testing the limits of this program to make sure it works correctly... round 1 goes to you, TA."

    if (assignment < 0 || assignment > 100 || typeof(assignment) != "number"){
        alert(error)
        return;
    }
    else if (project < 0 || project > 100 || typeof (project) != "number") {
        alert(error)
        return;
    }
    else if (quiz < 0 || quiz > 100 || typeof (quiz) != "number") {
        alert(error)
        return;
    }
    else if (exam < 0 || exam > 100 || typeof (exam) != "number") {
        alert(error)
        return;
    }
    else if (intex < 0 || intex > 100 || typeof (intex) != "number") {
        alert(error)
        return;
    }


    //assign answer
    const answer = Math.round(5 * assignment + 1 * project + 1 * quiz + 2 * exam + 1 * intex, 2) / 10;

    //determine grade
    let grade
    if (answer >= 94) {
        grade = "A!"
    } else if (94 > answer && answer >= 90) {
        grade = "A- goodbye scholarship!"
    } else if (90 > answer >= 87) {
        grade = "B+..."
    } else if (87 > answer && answer >= 84) {
        grade = "B...you have a kidney to sell?"
    } else if (84 > answer && answer >= 80) {
        grade = "B-...the future does not look bright"
    } else if (80 > answer && answer >= 77) {
        grade = "C+ so basically you are nothing"
    } else {
        grade = `incompletes can only be given under extraordinary circumstances. Your grade was a ${answer} which is incomplete. Must I walk you through this more? You goofed! You did not succeed this round! You are the cracked egg in the dozen, the Waluigi in Mario Bros, the leprechaun in the lucky charms commercials. Need I say more?`
    }

    //give answer
    alert(`you get ${answer}% which means you get a(n)...${grade}`);
    }
    )