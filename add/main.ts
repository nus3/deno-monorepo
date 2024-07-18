import cowsay from "cowsay"
import { add } from "./mod.ts"

const o = cowsay.say({ text: `1 + 2 = ${add(1, 2)}` })
console.log(o)
