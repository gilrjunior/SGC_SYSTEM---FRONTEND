import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ikey } from 'src/app/key/ikey';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-key-remove',
  templateUrl: './key-remove.component.html',
  styleUrls: ['./key-remove.component.css']
})
export class KeyRemoveComponent implements OnInit {

  public keys: Ikey[];
  public option:string = "0";
  public keyid:string = "";

  ngOnInit(): void {
    this.getKeysFromBD();

  }

  constructor(private apiService:ApiService, private router:Router){}

  getKeysFromBD(){
    this.apiService.getKeys().subscribe(response => {
  
      this.keys = response.body

    })
}

  getselect(){

    for(var i = 0; i < this.keys.length; i++){

      if(this.keys[i].keyid == this.option && this.option!= "0"){

          this.keyid = this.keys[i].keyid;
      }

    }

  }

  
   removeKey(){

    let key = {

      keyid: this.keyid

    }

    this.apiService.removeKey(key).subscribe({next: (response) => {
    
      var text = Object.values(response.body)

        if(response.status === 201){
            alert(text);
            this.router.navigate(['keys/list']); 
        }else{
            alert(text)
        }

      }
      ,error: (erro) => {

        var text = Object.values(erro.body)

        alert(text);

    }})

    this.option = "0"

  }

}
