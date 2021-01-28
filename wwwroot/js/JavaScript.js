function calculator() {
    //harvest from HTML
    const assignment = document.getElementById("assignment").value;
    const project = document.getElementById("project").value;
    const quiz = document.getElementById("quiz").value;
    const exam = document.getElementById("exam").value;
    const intex = document.getElementById("intex").value;

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
        grade = "incompletes can only be given under extraordinary circumstances. Feelin' lucky?"
    }

    //give answer
    alert(`you get ${answer}% which means you get a(n)...${grade}`);
}