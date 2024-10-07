import { sum } from "./utils/maths"
import { createApp } from "vue"
import Hello from "./vue_demo/hello.vue"
import "./components/div_cpn"

const message = "hello world"

console.log(sum(1, 4))

console.log(message.length)

const bar = () => {
    console.log("bar")
}

bar()

createApp(Hello).mount("#app")