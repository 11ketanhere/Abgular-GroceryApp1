import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  listData:any;
  item: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.listData.value = params.data
    })
  }

}
