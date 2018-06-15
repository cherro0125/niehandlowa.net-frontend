import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-poi',
  templateUrl: './add-poi.component.html',
  styleUrls: ['./add-poi.component.css']
})
export class AddPOIComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
