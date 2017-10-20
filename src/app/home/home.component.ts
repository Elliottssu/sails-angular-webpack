import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,) {
    // Do stuff
  }

  ngOnInit() {
    this.userService.testApi().subscribe(result => {
      console.log(result)
    })
    console.log('Hello Home');
  }

}
