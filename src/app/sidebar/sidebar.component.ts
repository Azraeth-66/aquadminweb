import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);

     
    });
  }
  
  redirect(){
    this.router.navigate(['mascotadata']);
  }


}
