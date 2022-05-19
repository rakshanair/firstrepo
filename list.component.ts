import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private bs:BankService) { }
  public banks=[];
  ngOnInit() {
    this.banks=this.bs.getAllBanks();
  }

}
