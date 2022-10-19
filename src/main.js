import "./css/index.css"

const ccBgColorRight = document.querySelector(".cc__bg-right")
const ccBgColorLeft = document.querySelector(".cc__bg-left")
const ccLogo = document.querySelector(".cc-logo-img")

function setCard(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    master: ["#C69347", "#DF6F29"],
    default: ["black", "gray"],
  }

  const logos = {
    visa: ["/cc-visa.svg"],
    master: ["/cc-mastercard.svg"],
    default: ["/cc-default.svg"],
  }

  ccBgColorRight.setAttribute("fill", colors[type][0])
  ccBgColorLeft.setAttribute("fill", colors[type][1])

  ccLogo.setAttribute("src", logos[type])
}

setCard("default")
globalThis.setCard = setCard // transformando em função global
