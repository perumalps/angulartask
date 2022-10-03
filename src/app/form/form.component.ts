import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppService } from '../app.service';
import { SortEvent } from 'primeng/api';

// import { Customer, Representative } from '../../domain/customer';
// import { CustomerService } from '../../service/customerservice';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userList:any;
  userId:number=0;
  // customers: Customer[]=[];

  //   representatives: Representative[]=[];

  //   statuses: any=[];

  //   loading: boolean = true;

  //   activityValues: number[] = [0, 100];
  constructor(private appService:AppService,private router:Router,private aRoute:ActivatedRoute) { }

  ngOnInit() {
//     this.customerService.getCustomersLarge().then(customers => {
//         this.customers = customers;
//         this.loading = false;

//         this.customers.forEach(customer => customer.date = new Date(customer.date));
//     });

//     this.representatives = [
//         {name: "Amy Elsner", image: 'amyelsner.png'},
//         {name: "Anna Fali", image: 'annafali.png'},
//         {name: "Asiya Javayant", image: 'asiyajavayant.png'},
//         {name: "Bernardo Dominic", image: 'bernardodominic.png'},
//         {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
//         {name: "Ioni Bowcher", image: 'ionibowcher.png'},
//         {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
//         {name: "Onyama Limba", image: 'onyamalimba.png'},
//         {name: "Stephen Shaw", image: 'stephenshaw.png'},
//         {name: "Xuxue Feng", image: 'xuxuefeng.png'}
//     ];

//     this.statuses = [
//         {label: 'Unqualified', value: 'unqualified'},
//         {label: 'Qualified', value: 'qualified'},
//         {label: 'New', value: 'new'},
//         {label: 'Negotiation', value: 'negotiation'},
//         {label: 'Renewal', value: 'renewal'},
//         {label: 'Proposal', value: 'proposal'}
//     ]
// }

// clear(table: any) {
//     table.clear();
// }

// }




    this.getAllUser()
    
  }
  getAllUser(){
   this.appService.getAllUser().subscribe(data=>{
    this.userList = data;
    console.log('ggggggggggggggggg',this.userList);

   })
  }
  
  editUser(userId : number){
    this.router.navigate(['user',userId],{relativeTo:this.aRoute})
  }
  deleteUser(userId:number){
    this.userId=userId
    this.appService.deleteUser(this.userId).subscribe((userList)=>{
      this.getAllUser()
    })
  }

  customSort(event: any) {
    console.log("yyyyyyyyyy",event);
    event.data.sort((data1: any, data2: any) => {
    let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;
      console.log('SOOOORTTTTTTTTTtt', event, )

      if (value1 == null && value2 != null) result = -1;

      else if (value1 != null && value2 == null) result = 1;

      else if (value1 == null && value2 == null) result = 0;

      else if (typeof value1 === 'string' && typeof value2 === 'string')

        result = value1.localeCompare(value2);

      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;



      return event.order * result;

    });   

  }
}