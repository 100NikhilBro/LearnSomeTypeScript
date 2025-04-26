"use strict";
// let tup:[string,number] = ["Raju",12]; // ise tuple bolte hai
// // iska use aise samjh lo ki koi company hai uske khude ke kuch code hai to woh dikhana chahti hai 
// enum StatusCode {
//     ABANDONED = "This is not found and has 907 error",
//     BANDONED = "This is user not find and has 560 error"
// }
// StatusCode.ABANDONED
// StatusCode.BANDONED
// --------> STARTING TS ---->
let a = 14; // agr apne ko pehle se pta hai ki uska type yeh hone wala hai to : define kr do   
// a = "rahul"; // error a gya na ts but js ki file mein dekhoge to nhi aayega 
let b = 12;
function Abcd(obj) {
}
Abcd({ name: "Yogi ji", age: 12 });
function xyz(obj1) {
}
xyz({ name: "Rahul ji ", age: 12, admin: true });
// Classes and Objects 
class Musicmaker {
    constructor(music, artist, price, img = 'some.jpg') {
        this.music = music;
        this.artist = artist;
        this.price = price;
        this.img = img;
        if (!this.img) {
            this.img = "some.jpg";
        }
    }
}
let m1 = new Musicmaker("chaiya chaiya ", "KK", 1200, "");
// this keyword in class ----> mtlb class ke andar kisi 
// bhi cheej ka access krna hai to apne ko this. ka use
// krna padega apne ko 
class abcde {
    constructor() {
        this.name = "Raju";
    }
    changeName(name) {
        this.name = name;
    }
}
// access modifiers
class xyzw {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    changeIt(name, age) {
        this.name = name;
        this.age = age;
    }
}
let x1 = new xyzw("BOJO", 12);
x1.changeIt("newBojo", 24);
// getter setter ---> isme hum variable ka name ---> _ _ 
class dfgh {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set name(name) {
        this._name = name;
    }
    set age(val) {
        this._age = val;
    }
}
// static keyword in class --> bs class ke name pr . lagaiye aa jayega
class hgjjk {
    static getIncreasedNumber() {
        return this.version * 2;
    }
}
hgjjk.version = 100;
// dekh rha hai bhai bs class ke naam pr . lgao aur kamal dekho
console.log(hgjjk.version);
console.log(hgjjk.getIncreasedNumber());
// abstract class --> aise class jo essential hai aur jisse hum most of the 
// cases mein --> new keyword use krke instance nhi bnayenge 
// balki yahan pr hum extends krenge in most of the cases
class cookinhEssentials {
    constructor(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
}
class cake extends cookinhEssentials {
} // yahan pr extend kiya --> aur iske liye ab apun new kr skte hai
class sandwich extends cookinhEssentials {
} //  yahan pr nhi new kr skte hai kyu ki yahan pr bhi apun ne extend kiya hai 
// ab baat kr lete hai ---> functions ki -->basic skipped
function abcd(a, b, cb) { } // cb ---> aapka koi call back fn hai to use aise represent krte hai
abcd(12, "gjh", (val) => { console.log(val); });
// ab parameters 
function erxyz(a = 12, b) { }
// rest ---> ka jaadu --> array  --> mtlb jb apne ko ek saath bahu saare parameters lene ho to ---> either it is number or 
// string or anything else to apun iska use krte hai  --> array of anything that u take -->(remember it ) 
function abckjhjhg(...args) {
    console.log(args);
}
// function overloading ---> just a concept --> same name with
// different paramemters and may be with same or d/f return type also (bs pta hona chaiye)
// GENERICS  ---> fn || interface || class --> sb mein ek jaise hai 
// Yeh wala fn ke liya ho gya
function cvbn(a, b) {
    // jb apun inka use ---> typeof -->keyword play a role
    if (typeof a === "string") {
        // ab yahan pr a. pr sb access kr loge aisa hi sbke liye hai mitra 
    }
}
cvbn("Rahul", 23);
cvbn(56, "Raju");
// yeh wala class ke liye
class Rahu {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        // same yahan pr bhi wahi typeof
    }
}
let r1 = new Rahu("rohaan", 22);
function jkcj(obj) {
    // woh same cheej jo upar btayi thi --> typeof
}
// Catch Here --> Generics
function cslaj(a, b, c) {
    return b; // yahan pr agr b stringliteral hoti to 'as' keyword 
}
// Bhai yahan pr ek topic hai import - export ka to woh to apun dekh lenge example se 
// EXPORT --> 'export' || 'export default' 
// like agr apne ko export many krne ho to bs export keyword likh do un sb ke annge ---> most common in fn exporting
// like agr ek export krna ho to --> export default ---> most common in claas exporting
// IMPORT --> 'import' --> with {} --> many things import ---> age ek file se 10 fn laane hai to ---> {fn1, fn2 .... so on}
// --> witout {} ---> default thing import ---> import className 
// type assertion ---> as keyword ka use
let v = 12;
v.toPrecision();
// type casting 
let n = Number("12");
// ! in ts
let u;
!u; // ---> agr humne kabhi bhi aisa likh diay mtlb u --> kabhi bhi null || undefine nhi ho skta 
// type guards ---> type narrowing(apun ne peeche dekh liya hai) || instance narrowing
// instance narrowing --> yeh class ke liye hoti hai 
class Ramu {
    detailsRamu() {
        console.log("Ramu is good");
    }
}
class Ram {
    detailsRam() {
        console.log("Ram is good");
    }
}
function abcdrha(a) {
    if (a instanceof Ramu) {
        a.detailsRamu();
    }
    else if (a instanceof Ram) {
        a.detailsRam();
    }
    else {
        console.log("Jb hai nhi to chalega kaise mitra");
    }
}
