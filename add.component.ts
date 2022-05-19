import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private bs:BankService) { }
  public loanForm=new FormGroup({
  loanId:new FormControl(),
  loanCustomerName:new FormControl(),
  loanAmount:new FormControl(0),
  dateOfLoan:new FormControl(),
  tenure:new FormControl(0),
  rateOfInterest:new FormControl(0),
  computeInterestAmount:new FormControl(0),
  computeEMI:new FormControl(0)
  })
  ngOnInit() {
  }
add()
{
  console.log(this.loanForm.value)
  this.bs.addBank(this.loanForm.value)
}

}