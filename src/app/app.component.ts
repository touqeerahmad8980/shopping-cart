import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class POSTS {
  id: number;
  title: string;
  // body: string;
  // userId: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  // title = 'Shooping-Cart-Application';
  post;
  posts : POSTS = {
    id: null,
    title: 'Windstorm'
  };
  
  private url='http://localhost:3000/posts';
  

  
  constructor(
    private http:HttpClient,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('/assets/phones/svg/shopping_cart.svg'));
    //  http.get(this.url)
    //  .subscribe(response => {
    //    this.posts=response.json();
    //  })
   }

  ngOnInit(){
    // this.getData();
  }
  // createPost(posts){
  //     let post = {title:posts.name};
  //     this.http.post<Hero>(this.url,JSON.stringify(post), httpOptions)
  //     .subscribe(response =>{
  //         this.posts=response;
  //         console.log(JSON.stringify(posts.name));
  //     });
  // }

  // getData(){
  //   this.http.get<POSTS[]>(this.url).subscribe(phone => this.post = phone );
  // }

  // createPost(){
  //   var body = { title: this.posts.title, body: 'bar', userId: 1 };
  //   this.http.post<POSTS>(this.url, body).subscribe((data) => {
  //     this.posts = data;
  //     console.log(JSON.stringify(this.posts));
  //     this.getData();
  //   });
  // }

  // deletePost(id){
  //   this.http.delete(this.url+'/'+id)
  //   .subscribe(response=>{
  //     console.log(response)
  //     this.getData();
  //   })
  // }
  
  edit(item){
    this.posts = Object.assign({}, item);
  }

  updatePost(item) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    var body = { title: this.posts.title, body: 'bar', userId: 1 };
    return this.http.put(this.url+'/'+item.id, body, httpOptions)
    .subscribe(res => {
        console.log(JSON.stringify(res));
        // this.getData();
        this.posts = Object.assign({}, item);
      }, (err) => {
        console.log(err);
      }
    );
  }


}
