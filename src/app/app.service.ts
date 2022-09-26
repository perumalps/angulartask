import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }
  getAllUser(){
    return this.httpClient.get('http://localhost:3000/sql')
  }
  insertUser(userList: object){
    return this.httpClient.post('http://localhost:3000/insert',userList)
  }
  editUser(userId : any,userList :string){
    return this.httpClient.put('http://localhost:3000/update',userList,userId)
  }
  deleteUser(userId : any){
    return this.httpClient.delete('http://localhost:3000/delete',userId)
  }
}

