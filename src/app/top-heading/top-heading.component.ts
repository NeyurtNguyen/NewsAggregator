import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../services/newsapiservice.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  // create variable to save data
  topHeadingDisplay:any;
  topHeadingArr:any  = [];
  leftContent:any  = [];

  ngOnInit(): void {
    
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      try {
        this._services.topContent().subscribe((result) => {
          console.log(result);
          this.leftContent = result.articles;
          for (var i = 0; i < this.leftContent.length; i++) {
            if (this.leftContent[i].urlToImage == null) {
              this.leftContent[i].urlToImage == "../../assets/not-image.jpg";
            } 
          }
        });

        
        if (result.articles.length > 0) {
          this.topHeadingArr = result.articles;
          for (var i = 0; i < this.topHeadingArr.length; i++) {
            if (this.topHeadingArr[i].urlToImage == null) {
              continue;
            } else {
              this.topHeadingDisplay = this.topHeadingArr[i];
              this.topHeadingArr.splice(i,1);
              return;
            }
          }
        } else {
          // Data preventive
          this._services.topHeading2().subscribe((result) => {
            console.log(result);
            this.topHeadingArr = result.articles;
            for (var i = 0; i < this.topHeadingArr.length; i++) {
              if (this.topHeadingArr[i].urlToImage == null) {
                continue;
              } else {
                this.topHeadingDisplay = this.topHeadingArr[i];
                this.topHeadingArr.splice(i,1);
                return;
              }
            }
          });
        }
      } catch (error) {
          console.log(error);
      }
    });
    
  }

}
