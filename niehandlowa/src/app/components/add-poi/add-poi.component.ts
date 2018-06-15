import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {DateAdapter} from '@angular/material';

@Component({
  selector: 'app-add-poi',
  templateUrl: './add-poi.component.html',
  styleUrls: ['./add-poi.component.css']
})
export class AddPOIComponent implements OnInit {
  public openDate: Date;
  time = {hour: 13, minute: 30};
  constructor(private _toastr: ToastrService,
    private _dateAdapter: DateAdapter<Date>) {
    this._dateAdapter.setLocale('pl');
   }

  ngOnInit() {
    // setTimeout(() => this._toastr.success('Kurłaaa','Janusz Notification!'));
    this.time = {hour: 13, minute: 30};
  }

}
