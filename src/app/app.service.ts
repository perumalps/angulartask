import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }
  getAllUser(){
    console.log("entering app service")
    return this.httpClient.get('http://localhost:3000/sql')
  }
  insertUser(userList: object){
    return this.httpClient.post('http://localhost:3000/insert',userList)
  }
  getById(userId : number){
    return this.httpClient.get('http://localhost:3000/getid?id='+ userId)
  }
  editUser(userDetail:object){
    console.log(userDetail);
    return this.httpClient.put('http://localhost:3000/update',userDetail)
  }
  deleteUser(userId : any){
    return this.httpClient.delete('http://localhost:3000/erase?id='+ userId)
  }
}

