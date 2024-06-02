const form = document.getElementById("bmi-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form input values
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Calculate the BMI
    let bmi = 0;
    let idealWeightLower = 0;
    let idealWeightUpper = 0;

    if (document.getElementById("metric").checked) {
        // Metric unit selected
        bmi = weight / ((height / 100) * (height / 100));
        idealWeightLower = 18.5 * ((height / 100) * (height / 100));
        idealWeightUpper = 24.9 * ((height / 100) * (height / 100));
    } else {
        // Imperial unit selected
        bmi = (weight * 703) / (height * 12 * (height * 12));
        idealWeightLower = (18.5 * (height * 12 * (height * 12))) / 703;
        idealWeightUpper = (24.9 * (height * 12 * (height * 12))) / 703;
    }

    // Display the BMI and ideal weight results
    const bmiResult = document.getElementById("bmi-result");
    bmiResult.innerHTML = `<h3>Your BMI is... <br><br> <span style="font-size: 46px;">${bmi.toFixed(
        2
    )}</span></h3>`;
    bmiResult.innerHTML += `<p>Your BMI suggests you’re a healthy weight. Your ideal weight is between ${idealWeightLower.toFixed(
        1
    )}kgs - ${idealWeightUpper.toFixed(1)}kgs.</p>`;
});
