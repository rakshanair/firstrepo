import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }
  public banks=[];
  addBank(bank)

  {

    this. banks.push(bank);

console.log(this. banks)



  }
  getAllBanks()

  {

     return this. banks;

  }
  deleteBanks(loanId)

  {

    for(let i=0;i<this. banks.length;i++)

    {

      if(this. banks[i].loanId==loanId)

      {

        this. banks.splice(i,1)

      }
    }

    return null;

  }

}
