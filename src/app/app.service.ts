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
  inserUser(userList: object){
    return this.httpClient.post('http://localhost:3000/insert',userList)
  }
}
