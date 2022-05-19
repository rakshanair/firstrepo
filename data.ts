import { StringifyOptions } from "querystring";

export class Data {
    constructor(
        public loanId:number,
        public loanCustomerName:String,
        public loanAmount:number,
        public dateOfLoan:string,
        public  tenure:number,
        public rateOfInterest:number
    )
    {

    }
    public computeInterestAmount()

    {

       return (this.loanAmount*this.rateOfInterest*this.tenure)/100;

    }

    public computeEMI()

    {

       

        return (this.loanAmount*this.rateOfInterest)/this.tenure*12;

    }
    
}

