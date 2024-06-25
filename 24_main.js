import PIN from "./24_module.js";
console.log(PIN);

// const PIN = 411057;

export function add(n1, n2){
    console.log(n1+n2);
}

export const array = [50, 60 ,70, 80];

export default PIN;
import PIN from "./24_module.js";

import { add, array} from "./24_module.js";

console.log(PIN);

add(20, 30);

console.log(array);