import chalk from "chalk";
import { add } from "@nus3/add";
import { subtract } from "@nus3/subtract";

console.log("1 + 2 =", chalk.green(add(1, 2)));
console.log("2 - 4 =", chalk.red(subtract(2, 4)));
