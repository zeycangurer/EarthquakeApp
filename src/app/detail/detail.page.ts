import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public yer:string;
  public siddet:string;
  public derinlik:string;
  public enlem:string;
  public boylam:string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.yer = this.activatedRoute.snapshot.paramMap.get('yer');
    this.siddet = this.activatedRoute.snapshot.paramMap.get('siddet');
    this.derinlik = this.activatedRoute.snapshot.paramMap.get('derinlik');
    this.enlem = this.activatedRoute.snapshot.paramMap.get('enlem');
    this.boylam = this.activatedRoute.snapshot.paramMap.get('boylam');
    
    console.log(this.yer);
    console.log(this.siddet);
    console.log(this.derinlik);
    console.log(this.enlem);
    console.log(this.boylam);
  }

}
