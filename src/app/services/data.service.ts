  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { createClient } from 'pexels';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pexelClient; 
  apiKey = environment.apikey;

  constructor(private httpClient: HttpClient) {
    // this.pexelClient = this.createClient();
   }
 

  createClient(){
    // const client = createClient(this.apiKey);
    const client = createClient('563492ad6f917000010000019222fb41d3de4205ae999cd7afd54a06');
    console.log("[Data Service: ] Client created")
    // return client; 
  } 

}
