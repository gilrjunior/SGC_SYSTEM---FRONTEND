import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ikey } from 'src/app/key/ikey';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-key-register',
  templateUrl: './key-register.component.html',
  styleUrls: ['./key-register.component.css']
})
export class KeyRegisterComponent implements OnInit {

  public keyid:string = "";
  public description:string = "";

  ngOnInit(): void {
  }

  constructor(private apiService:ApiService, private router:Router){}

  public addKey(){

    let key:Ikey = {

      keyid: this.keyid,
      description: this.description,
      key_situation: "disponível"

    }

    this.apiService.insertKeys(key).subscribe({next: (response) => {
    
      var text = Object.values(response.body)

        if(response.status === 201){
            alert(text);
            this.router.navigate(['keylist']); 
        }else if(response.status === 202){
            alert(text)
        }

      }
      ,error: (erro) => {

        var text = Object.values(erro.body)

        alert(text);

    }})

    this.keyid = "";
    this.description = "";

  }
}
