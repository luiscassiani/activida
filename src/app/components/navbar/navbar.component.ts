import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

   public logout(){
    this. login.logout();
    window.location.reload();
  }

  loginRoute(){
this.router.navigate(['/login'])
// console.log("navegando al login");
  }

}
