import "../css/divStyle.css"
import "../css/titleLess.less"

const divEl = document.createElement("div")
divEl.textContent = "hello world"
divEl.classList.add("content")
document.body.append(divEl)

const titleEl = document.createElement("h2")
titleEl.textContent = "hello webpack"
titleEl.classList.add("title")
document.body.append(titleEl)