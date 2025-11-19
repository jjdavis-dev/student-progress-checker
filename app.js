function checkProgress() {
    let name = document.getElementById("studentName").value;
    let g1 = parseFloat(document.getElementById("grade1").value);
    let g2 = parseFloat(document.getElementById("grade2").value);
    let g3 = parseFloat(document.getElementById("grade3").value);

    // Calculate average
    let average = (g1 + g2 + g3) / 3;
    let result = document.getElementById("result");

    if (average >= 70) {
        result.textContent = `Congratulations ${name}, you passed!`;
        result.style.color = "black"; // success message normal
    } else {
        result.textContent = `Keep practicing ${name}.`;
        result.style.color = "red"; // failure message in red
    }
}