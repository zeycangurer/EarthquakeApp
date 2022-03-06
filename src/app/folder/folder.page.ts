import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public depremler:any;


  constructor(private activatedRoute: ActivatedRoute,public service:ApiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
    console.log("ben buradayım");
    this.service.webService().subscribe(data=>{
      this.depremler = data;
    })

  
    

  }

}
