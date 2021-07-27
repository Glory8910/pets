import { animalpet, Pet } from "./availibilty";

import { enquiry, Enquirylist } from "./search";

console.log("jooo")


let pets = [];

let getas = (e: MouseEvent) => {


    e.preventDefault();


    let pname = document.forms["getpet"]["petname"].value
    let phis = document.forms["getpet"]["pethistory"].value
    let pchar = document.forms["getpet"]['petchar'].value

    console.log("hi", pchar, phis, pname)

    if (pname == "") {
        alert("pet name is required")
    }
    if (phis == "") {
        alert("pet history is required")

    }
    if (pchar == "") {

        alert("pet character is required")

    }


    if (pname !== "" && pchar !== "" && phis !== "") {
        let mypet = new Pet(pname, pchar, phis);



        console.log(mypet, "koo")



        pets.push(mypet)

    }

    localStorage.setItem("pets", JSON.stringify(pets))


    console.log(pets);

    document.forms["getpet"]["petname"].value = ""
    document.forms["getpet"]["pethistory"].value = ""
    document.forms["getpet"]['petchar'].value = ""
    document.forms["getpet"]['name'].value = ""




}


console.log(pets)
let sei = document.getElementById("sell-btn").addEventListener("click", (e) => { getas(e) })



let enquires = [];

let enq = document.getElementById("enquire-btn").addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    getdetails(e)
})

let getdetails = (e: MouseEvent) => {



    console.log("enq")

    let enqname = document.forms["enquiryform"]["enqname"].value;
    let enqno = document.forms["enquiryform"]["enqno"].value;

    if (enqname == "") {
        alert("pet name is required field")
    }
    if (enqno == "") {
        alert("count is required field")
    }

    console.log(enqname, enqno)

    if (enqname !== "" && enqno !== "") {

        let creenq = new Enquirylist(enqname, enqno)

        enquires.push(creenq);
        localStorage.setItem("enq", JSON.stringify(enquires))
    }
    console.log(enquires)

    document.forms["enquiryform"]["enqname"].value = "";
    document.forms["enquiryform"]["enqno"].value = "";

}



let countenq = [];

let enqs = document.getElementById("count-btn").addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    getcount(e)
})

let getcount = (e: MouseEvent) => {



    let enqqname = document.forms["countform"]["enqname"].value;

    alert("pet name is required field")

    if (enqqname == "") {
        alert("count is required field")
    }

    console.log(enqqname)

    if (enqqname !== "") {

        let temppet = localStorage.getItem("pets");

        let temparr = JSON.parse(temppet)
        let count = 0;
        temparr.map((el) => {

            if (el.name == enqqname) {
                count = count + 1;
            }

        })

       alert(count)



    }


    document.forms["countform"]["enqname"].value = "";

}

let availcheck = document.getElementById("map-btn").addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    getmap(e)
})

let getmap=(e:MouseEvent)=>{
    e.preventDefault();

    let availbtn=document.getElementById("place")

    let temp1=localStorage.getItem("pets")
    let temp2=localStorage.getItem("enq")

    let temp22=JSON.parse(temp2)
    let temp11=JSON.parse(temp1)

console.log(temp22,temp11)
    // let count=0;

   for(let i=0;i<5;i++){
    let counts=0
        temp11.map((el)=>{

            if(temp22[i].name ==el.name){
                counts=counts+1
            }
            console.log(counts,temp22[i].count)
        })
        console.log(counts,temp22[i].count)

        let availbalace=counts-parseInt(temp22[i].count)

        console.log(availbalace)

        availbtn.innerHTML+=`<h4>The count of ${temp22[i].name} for adoption is ${availbalace}`
    
   }
}