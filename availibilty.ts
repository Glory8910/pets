// import { Pet,animalpet } from "./avail";




interface animalpet{
    name:string;
    character:string;
    history:string;
}

class Pet implements animalpet{
 

    constructor(public name:string,public character:string,public history:string){

    }

}

// let pets=[];



// let getAvailableAnimal=(e: MouseEvent)=>{

//     e.preventDefault()
// // e.preventDefault();
// console.log(pets,"jii")


// let pname=document.forms["getpet"]["petname"].value
// let phis=document.forms["getpet"]["pethistory"].value
// let pchar=document.forms["getpet"]['petchar'].value

// console.log("hi",pchar,phis,pname)
// if(pname==""){
// alert("pet name is required")
// } 
// if(phis==""){
//     alert("pet history is required")

// }
// if(pchar==""){

// alert("pet character is required")

// }

// let mypet=new Pet(pname,pchar,phis);

// pets.push(mypet);



// console.log(mypet,"koo",mypet.name,"kloo")








// localStorage.setItem("pets",JSON.stringify(pets))


// document.forms["getpet"]["petname"].value=""
// document.forms["getpet"]["pethistory"].value=""
// document.forms["getpet"]['petchar'].value=""
// document.forms["getpet"]['name'].value=""




// }


// console.log(pets)

// let sell=document.getElementById("sell-btn").addEventListener("click",(e:MouseEvent)=>{
//     e.preventDefault();
//     getAvailableAnimal(e)})







export {animalpet,Pet}