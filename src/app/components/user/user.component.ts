import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string; // String
  age:number; // Inteiro
  address:Address; // Objeto (interface)
  hobbies:string[]; // Array
  teste:any; // Aceita qualquer valor
  url:string = 'https://jsonplaceholder.typicode.com/posts';
  posts:Post[];
  isEdit:boolean = false;

  constructor(private data:DataService) {
    console.log('contructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Marcel';
    this.age = 29;
    this.address = {
      street: 'Emb Camara Canto, 133',
      city: 'São Paulo',
      state: 'SP'
    }
    this.hobbies = ['programar', 'ver tv'];

    this.data.getData(this.url).subscribe(
      (posts) => {
        console.log(posts);

        if (posts.success) {
          this.posts = posts.dados;
        } else {
          alert('error' + posts.error);
        }
      }
    );
  }

  onClick() {
    alert('Click Button');
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  name:string,
  email:string,
  phone:string
}
