import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ikey } from 'src/app/key/ikey';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-key-update',
  templateUrl: './key-update.component.html',
  styleUrls: ['./key-update.component.css']
})
export class KeyUpdateComponent implements OnInit {

  public keys: Ikey[];
  public option:string = "0";
  public keyid:string = "";
  public description:string = "";
  public lastkeyid:string = "";

  ngOnInit(): void {
    this.getKeysFromBD();

  }

  constructor(private apiService:ApiService, private router:Router){}

  getKeysFromBD(){
    this.apiService.getKeys().subscribe(response => {
  
      this.keys = response.body

    })
}

  updateinputs(){

    for(var i = 0; i < this.keys.length; i++){

      if(this.keys[i].keyid == this.option && this.option!= "0"){

          this.lastkeyid = this.keys[i].keyid;
          this.keyid = this.keys[i].keyid;
          this.description = this.keys[i].description
      }

    }

  }

  
   updateKey(){

    let key = {

      keyid: this.keyid,
      description: this.description,
      lastkeyid: this.lastkeyid

    }

    this.apiService.updateKey(key).subscribe({next: (response) => {
    
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

    this.keyid = "";
    this.description = "";

  }

}
