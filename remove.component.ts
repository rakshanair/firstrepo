import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private bs:BankService) { }

  ngOnInit() {
  }
  delete(loanId)
  {
  this.bs.deleteBanks(loanId);
  }
}
