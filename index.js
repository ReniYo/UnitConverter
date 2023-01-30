
const meter = 1
const feet = 3.281
const liter = 1
const gallon = 0.264
const kilogram = 1
const pound = 2.204


const convertBtn = document.getElementById("convert-btn")
const metricFirstEl = document.getElementById("metricFirst")
const metricSecondtEl = document.getElementById("metricSecond")
const metricThirdEl = document.getElementById("metricThird")
const inputEl = document.getElementById("input-el")


convertBtn.addEventListener("click", function() {
    metricFirstEl.innerHTML = (render(inputEl.value, "meters", feet, "feets"))
    metricSecondtEl.innerHTML = (render(inputEl.value, "liters", gallon, "gallons"))
    metricThirdEl.innerHTML = (render(inputEl.value, "kilograms", pound, "pounds"))
})

function render(input, metricOne, unitTwo, metricTwo) {
    let resultOne = input * unitTwo
    let resultTwo = input / unitTwo
    return `${input} ${metricOne} = ${resultOne.toFixed(3)} ${metricTwo} | 
            ${input} ${metricTwo} = ${resultTwo.toFixed(3)} ${metricOne}`
}

