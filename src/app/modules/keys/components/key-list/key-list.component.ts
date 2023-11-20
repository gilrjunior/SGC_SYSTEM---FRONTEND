import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ikey } from 'src/app/key/ikey';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-key-list',
  templateUrl: './key-list.component.html',
  styleUrls: ['./key-list.component.css']
})

export class KeyListComponent implements OnInit{

  public keys: Ikey[];
  public description:string = "";

  ngOnInit(): void {
    this.getKeysFromBD();
  }

  constructor(private apiService:ApiService){}

  getKeysFromBD(){
      this.apiService.getKeys().subscribe(response => {
    
        this.keys = response.body

      })
  }

  SearchKey(){

    if(this.description == ""){
      this.description = "vazio"
    }

    this.apiService.searchKey(this.description).subscribe(response => {
    
      this.keys = response.body

    })

    this.description = ""

  }

}
