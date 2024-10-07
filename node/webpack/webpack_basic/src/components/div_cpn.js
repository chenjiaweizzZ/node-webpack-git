import "../css/divStyle.css"
import "../css/titleLess.less"
import defaultImg from "../img/dodgetocat_v2.png"

const divEl = document.createElement("div")
divEl.textContent = "hello world"
divEl.classList.add("content")
document.body.append(divEl)

const titleEl = document.createElement("h2")
titleEl.textContent = "hello webpackk"
titleEl.classList.add("title")
document.body.append(titleEl)

const imgEl = document.createElement("img")
imgEl.src = defaultImg
document.body.append(imgEl)

const divBgEl = document.createElement("div")
divEl.textContent = "hello img"
divBgEl.classList.add("img-bg")
document.body.append(divBgEl)