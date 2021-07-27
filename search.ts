// import {Enquirylist,enquiry} from "./avail"

interface enquiry{
    name:string;
   count:Number;
}

class Enquirylist implements enquiry{
 

    constructor(public name:string,public count:Number){

    }

}



export {enquiry,Enquirylist}