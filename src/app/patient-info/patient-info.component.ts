import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
  pateintData;
  objectKeys = Object.keys;
  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.service.getPatientInfo().subscribe((data: any) => {
      this.pateintData = data.data;
    });
  }
}
