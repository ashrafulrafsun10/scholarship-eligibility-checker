

function checkScholarship() {

    const gpa = parseFloat(document.getElementById("gpa").value);
    const sat = parseInt(document.getElementById("sat").value);
    const ielts = parseFloat(document.getElementById("ielts").value);

    // Validation

    if (isNaN(gpa) || isNaN(sat) || isNaN(ielts)) {
        alert("Please complete all fields.");
        return;
    }

    if (gpa < 0 || gpa > 4) {
        alert("GPA must be between 0.00 and 4.00");
        return;
    }

    if (sat < 400 || sat > 1600) {
        alert("SAT Score must be between 400 and 1600");
        return;
    }

    if (ielts < 0 || ielts > 9) {
        alert("IELTS Score must be between 0.0 and 9.0");
        return;
    }

    let status = "";
    let score = "";
let grade = "";
    let chance = "";
    let recommendation = "";
    let color = "";
let countries = "";
let scholarshipType = "";
let universities = "";
    // Premium Logic

    if (gpa >= 3.90 && sat >= 1500 && ielts >= 8.0) {

        status = "🌟 Excellent Candidate";
        chance = "95%";
        recommendation = "Highly competitive for top merit scholarships.";
        color = "#22c55e";
        score = "98 / 100";
grade = "A+";
countries = "USA,Canada,Australia";
scholarshipType = "Full Scholarship";
universities = "MIT • Stanford • Purdue • UIUC";
    }

    else if (gpa >= 3.75 && sat >= 1450 && ielts >= 7.5) {

        status = "🏆 Highly Competitive";
        chance = "85%";
        recommendation = "Strong profile for many international scholarships.";
        color = "#3b82f6";
        score = "90 / 100";
grade = "A";
countries = "USA,Canada";
scholarshipType = "High Merit Scholarship";
universities = "Texas A&M • Penn State • Arizona State";
    }

    else if (gpa >= 3.50 && sat >= 1350 && ielts >= 7.0) {

        status = "✅ Competitive";
        chance = "70%";
        recommendation = "Good chance for partial scholarships.";
        color = "#f59e0b";
        score = "80 / 100";
grade = "B+";
countries = "USA";
scholarshipType = "Partial Scholarship";
universities = "University of Alabama • UCF • FIU";
    }

    else if (gpa >= 3.00 && sat >= 1200 && ielts >= 6.5) {

        status = "📘 Average";
        chance = "45%";
        recommendation = "Improve SAT or IELTS to increase scholarship opportunities.";
        color = "#fb923c";
        score = "65 / 100";
grade = "B";
countries = "USA";
scholarshipType = "Limited Scholarship";
universities = "Regional Universities";
    }

    else {

        status = "❌ Needs Improvement";
        chance = "20%";
        recommendation = "Increase GPA, SAT and IELTS scores before applying.";
        color = "#ef4444";
        score = "45 / 100";
grade = "C";
countries = "Improve your academic profile";
scholarshipType = "Currently Not Eligible";
universities = "No recommendation";
    }

    document.getElementById("status").innerHTML =
        "<span style='color:" + color + ";font-weight:bold;'>" + status + "</span>";

    document.getElementById("chance").innerHTML =
        "<span style='color:" + color + ";font-weight:bold;'>" + chance + "</span>";

    document.getElementById("recommendation").innerHTML =
        recommendation;
document.getElementById("countries").textContent =
countries;

document.getElementById("scholarshipType").textContent =
scholarshipType;

document.getElementById("universities").textContent =
universities;
document.getElementById("score").textContent = score;

document.getElementById("grade").textContent = grade;
}