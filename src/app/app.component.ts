import { Component,OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';


  showNavbar:boolean = true;
  showFooter:boolean = true;

  id :string =''
  odject=[];
  arry={};
  data : any;


  constructor(
    protected router : Router
  ){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log('event.url',event.url);
  
        if((event['url'] == '/home/login')||(event['url']== '/home/register')){
          this.showNavbar = false;
          this.showFooter = false;

        }else if((event['url'] =='/register')||(event['url']== '/user-register')){
          this.showNavbar = true;

      }
    }
  })
}
}
