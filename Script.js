function calculateCurrentGrade() {
    var hwGrade = document.getElementId(" hwScore").value;
    var hwArray = arrayStringToNumber(hwGrade);
    var hwAvg = averageArray(hwArray);
    console.log(hwAvg);

    var qGrade = document.getElementId(" qScore ").value;
    var qArray = convertArrayStringToNumber(qGrade);
    var qAvg = averageArray(qArray);
    console.log(qAvg);

    var testsGrade = document.getElementId(" testScore").value;
    var testsArray = convertArrayStringToNumber(testsGrade);
    var testAvg = averageTest(testsArray);
    console.log(testAvg);

    var participationGrade = document.getElementById(" participationScore").value;
    var participationArray = convertArrayStringToNumber(participationGrade);
    var participationAvg = averageParticipation(participationArray);
    console.log(participationAvg);

    var projectGrade = document.getElementById(" projectScore").value;
    var projectArray = convertArrayStrindocument.getElementById("hwScore").value = "";
    gToNumber(projectGrade);
    var projectAvg = averageProject(projectArray);
    console.log(projectAvg);

    var homeworkWeight = (parseInt(document.getElementById("hwWeight").value)) / 100;
    var quizzesWeight = (parseInt(document.getElementById("qWeight").value)) / 100;
    var testWeight = (parseInt(document.getElementById("testWeight").value)) / 100;
    var participationWeight = (parseInt(document.getElementById("participationWeight").value)) / 100;
    var projectWeight = (parseInt(document.getElementById("projectWeight").value)) / 100;
    var finalScore = (parseInt(document.getElementById("finalWeight").value));
    var weightSum = homeworkWeight + quizzesWeight + testWeight + participationWeight + projectWeight + (finalScore / 100);
    if (weightSum != 1) {
        document.getElementById("currentGrade").innerHTML = "Sorry, try again, seems like your weight total does not equal 100%"
    } else {
        var homeWork = hwAvg * homeworkWeight;
        var quizes = qAvg * quizzesWeight;
        var test = testAvg * testWeight;
        var participation = participationAvg * participationWeight;
        var project = projectAvg * projectWeight;

        var currentGrade = ((homeWork + quizes + test + participation + project) / (100 - finalWeight)) * 100;
        currentGrade = Math.floor(currentGrade);
        console.log(currentGrade);
        document.getElement("currentGrade").innerHTML = "Your current grade is " + currentGrade + ", you need at least... "
    }
    return currentGrade;
}

function arrayStringToNumber(str){


}






























function reset() {
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("finalGradeNeeded").innerHTML = "";
    document.getElementById("gradeWanted").value = "";
    document.getElementById("finalWeight").value = "";
    document.getElementById("hwScore").value = "";
    document.getElementById("qScore").value = "";
    document.getElementById("testScore").value = "";
    document.getElementById("participationScore").value = "";
    document.getElementById("projectScore").value = "";
    document.getElementById("hwWeight").value = "";
    document.getElementById("qWeight").value = "";
    document.getElementById("testWeight").value = "";
    document.getElementById("participationWeight").value = "";
    document.getElementById("projectWeight").value = "";
}