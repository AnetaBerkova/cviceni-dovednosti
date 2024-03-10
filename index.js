console.log('funguju!');


const levelHtml = Number(prompt("Jakou máš úroveň dovedností HTML (0-100):"))
if (levelHtml >= 0 && levelHtml <= 100) {
    const skillHtml = document.querySelector("#skill1 .skill__value")
    skillHtml.textContent = levelHtml + " / 100"
} else {
    alert("Prosím, zadej platné číslo v rozmezí 0-100 pro HTML.")
}
const skillPosuvnikHtml = document.querySelector("#skill1 .skill__progress")
skillPosuvnikHtml.style.width = levelHtml + "%"

const levelCss = Number(prompt("Jakou máš úroveň dovedností CSS (0-100):"))
if (levelCss >= 0 && levelCss <= 100) {
    const skillCss = document.querySelector("#skill2 .skill__value")
    skillCss.textContent = levelCss + " / 100";
} else {
    alert("Prosím, zadej platné číslo v rozmezí 0-100 pro CSS.")
}
const skillPosuvnikCss = document.querySelector("#skill2 .skill__progress")
skillPosuvnikCss.style.width = levelCss + "%"

const levelJavaScript = Number(prompt("Jakou máš úroveň dovedností JavaScript (0-100):"))
if (levelJavaScript >= 0 && levelJavaScript <= 100) {
    const skillJavaScript = document.querySelector("#skill3 .skill__value")
    skillJavaScript.textContent = levelJavaScript + " / 100";
} else {
    alert("Prosím, zadej platné číslo v rozmezí 0-100 pro JavaScript.")
}

const skillPosuvnikJavaScript = document.querySelector("#skill3 .skill__progress")
skillPosuvnikJavaScript.style.width = levelJavaScript + "%"
