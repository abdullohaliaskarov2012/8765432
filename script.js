document.body.style.margin = "0";
document.body.style.background = 'linear-gradient(to right, red, yellow)';
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

const mainBox = document.createElement("div");
mainBox.style.width = "850px";
mainBox.style.height = "300px";
mainBox.style.background = 'linear-gradient(to right, yellow, red)';
mainBox.style.display = "flex";
mainBox.style.justifyContent = "space-around";
mainBox.style.alignItems = "center";
mainBox.style.borderRadius = "10px";

document.body.appendChild(mainBox);

function createClockBox(label) {
    const blackBox = document.createElement("div");
    blackBox.style.width = "221px";
    blackBox.style.height = "235px";
    blackBox.style.background = 'linear-gradient(to right, blue, black)';
    blackBox.style.border = "1px solid #333";
    blackBox.style.borderRadius = "10px";
    blackBox.style.display = "flex";
    blackBox.style.flexDirection = "column-reverse";
    blackBox.style.justifyContent = "center";
    blackBox.style.alignItems = "center";

    const labelElement = document.createElement("div");
    labelElement.style.color = "#FFF";
    labelElement.style.fontSize = "34px";
    labelElement.style.fontWeight = "900"
    labelElement.style.marginBottom = "10px";
    labelElement.textContent = label;
    blackBox.appendChild(labelElement);

    const valueElement = document.createElement("div");
    valueElement.style.color = "#FFF";
    valueElement.style.fontSize = "94px";
    blackBox.appendChild(valueElement);

    return { blackBox, valueElement };
}

const { blackBox: blackBox1, valueElement: hoursElement } = createClockBox("Часы");
const { blackBox: blackBox2, valueElement: minutesElement } = createClockBox("Минуты");
const { blackBox: blackBox3, valueElement: secondsElement } = createClockBox("Секунды");

mainBox.appendChild(blackBox1);
mainBox.appendChild(blackBox2);
mainBox.appendChild(blackBox3);

function updateTime() {
    const now = new Date();
    const uzbekistanOffset = 5; 
    const uzbekistanTime = new Date(now.getTime() + uzbekistanOffset * 60 * 60 * 1000);

    const hours = uzbekistanTime.getUTCHours().toString().padStart(2, "0");
    const minutes = uzbekistanTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = uzbekistanTime.getUTCSeconds().toString().padStart(2, "0");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

setInterval(updateTime, 1000);
updateTime(); // Funksiyani darhol chaqirish
