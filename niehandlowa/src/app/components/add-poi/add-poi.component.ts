import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import POI from '../../models/POI';


@Component({
  selector: 'app-add-poi',
  templateUrl: './add-poi.component.html',
  styleUrls: ['./add-poi.component.css']
})
export class AddPOIComponent implements OnInit {
  public newPOI: POI = new POI;

  constructor(private _toastr: ToastrService) {

   }

  ngOnInit() {
    // setTimeout(() => this._toastr.success('Kurłaaa','Janusz Notification!'));

  }

  public onSubmit() {
    console.log(this.newPOI);
  }

}
