import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../services/newsapiservice.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  // create variable to save data
  topHeadingDisplay:any;
  topHeadingArr:any  = [];
  leftContentEntertainmentPage:any  = [];
  entertainmentUsTopContent:any  = [];
  entertainmentGbTopContent:any  = [];
  entertainmentCaTopContent:any  = [];
  entertainmentAuTopContent:any  = [];
  entertainmentIeTopContent:any  = [];

  ngOnInit(): void {
    this._services.entertainmentPageHeading().subscribe((result) => {
      console.log(result);
      try {

        // left content
        this._services.entertainmentPageTopContent().subscribe((result) => {
          console.log(result);
          this.leftContentEntertainmentPage = result.articles.slice(0, 15);
          for (var i = 0; i < this.leftContentEntertainmentPage.length; i++) {
            if (this.leftContentEntertainmentPage[i].urlToImage == null) {
              this.leftContentEntertainmentPage[i].urlToImage = "../../assets/not-image.jpg";
            } 
          }
        });
        
        // entertainment us
        this._services.entertainmentPageUsContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.entertainmentUsTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.entertainmentUsTopContent.length; i++) {
              if (this.entertainmentUsTopContent[i].urlToImage == null) {
                this.entertainmentUsTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.entertainmentUsTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // entertainment gb
        this._services.entertainmentPageGbContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.entertainmentGbTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.entertainmentGbTopContent.length; i++) {
              if (this.entertainmentGbTopContent[i].urlToImage == null) {
                this.entertainmentGbTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.entertainmentGbTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // entertainment ca
        this._services.entertainmentPageCaContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.entertainmentCaTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.entertainmentCaTopContent.length; i++) {
              if (this.entertainmentCaTopContent[i].urlToImage == null) {
                this.entertainmentCaTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.entertainmentCaTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });
        
        // entertainment au
        this._services.entertainmentPageAuContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.entertainmentAuTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.entertainmentAuTopContent.length; i++) {
              if (this.entertainmentAuTopContent[i].urlToImage == null) {
                this.entertainmentAuTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.entertainmentAuTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // entertainment ie
        this._services.entertainmentPageIeContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.entertainmentIeTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.entertainmentIeTopContent.length; i++) {
              if (this.entertainmentIeTopContent[i].urlToImage == null) {
                this.entertainmentIeTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.entertainmentIeTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
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
