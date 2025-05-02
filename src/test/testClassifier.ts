import { classify } from "../classifier/changeClassifier";

console.log(classify("src/utils/math.ts", "const add = (a, b) => a + b;"));
