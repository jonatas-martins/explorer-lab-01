import "./css/index.css"
import IMask from "imask"

const ccBgColorRight = document.querySelector(".cc__bg-right")
const ccBgColorLeft = document.querySelector(".cc__bg-left")
const ccLogo = document.querySelector(".cc-logo-img")

const inputNumberCard = document.getElementById("card-number")
const inputNumberCardPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0-15}/,
      cardtype: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5 [1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: "master",
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default",
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "")
    const foundMask = dynamicMasked.compiledMasks.find(({ regex }) =>
      number.match(regex)
    )
    return foundMask
  },
}
const inputNumberCardMasked = IMask(inputNumberCard, inputNumberCardPattern)

const inputCardExpiration = document.getElementById("expiration-date")
const inputCardExpirationPattern = {
  mask: "MM{/}YYYY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      from: new Date().getFullYear(),
      to: new Date().getFullYear() + 10,
      minLength: 4,
    },

    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      minLength: 2,
    },
  },
}
const inputCardExpirationMasked = IMask(
  inputCardExpiration,
  inputCardExpirationPattern
)

const inputSecurityCode = document.getElementById("security-code")
const inputSecurityCodePattern = {
  mask: "0000",
  minLength: 3,
}
const inputSecurityCodeMasked = IMask(
  inputSecurityCode,
  inputSecurityCodePattern
)

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

setCard("visa")
globalThis.setCard = setCard // transformando em função global
