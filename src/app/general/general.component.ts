import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../services/newsapiservice.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  // create variable to save data
  topHeadingDisplay:any;
  topHeadingArr:any  = [];
  leftContentGeneralPage:any  = [];
  generalUsTopContent:any  = [];
  generalGbTopContent:any  = [];
  generalCaTopContent:any  = [];
  generalAuTopContent:any  = [];
  generalIeTopContent:any  = [];

  ngOnInit(): void {
    this._services.generalPageHeading().subscribe((result) => {
      console.log(result);
      try {

        // left content
        this._services.generalPageTopContent().subscribe((result) => {
          console.log(result);
          this.leftContentGeneralPage = result.articles.slice(0, 15);
          for (var i = 0; i < this.leftContentGeneralPage.length; i++) {
            if (this.leftContentGeneralPage[i].urlToImage == null) {
              this.leftContentGeneralPage[i].urlToImage = "../../assets/not-image.jpg";
            } 
          }
        });
        
        // general us
        this._services.generalPageUsContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.generalUsTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.generalUsTopContent.length; i++) {
              if (this.generalUsTopContent[i].urlToImage == null) {
                this.generalUsTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.generalUsTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // general gb
        this._services.generalPageGbContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.generalGbTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.generalGbTopContent.length; i++) {
              if (this.generalGbTopContent[i].urlToImage == null) {
                this.generalGbTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.generalGbTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // general ca
        this._services.generalPageCaContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.generalCaTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.generalCaTopContent.length; i++) {
              if (this.generalCaTopContent[i].urlToImage == null) {
                this.generalCaTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.generalCaTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });
        
        // general au
        this._services.generalPageAuContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.generalAuTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.generalAuTopContent.length; i++) {
              if (this.generalAuTopContent[i].urlToImage == null) {
                this.generalAuTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.generalAuTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // general ie
        this._services.generalPageIeContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.generalIeTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.generalIeTopContent.length; i++) {
              if (this.generalIeTopContent[i].urlToImage == null) {
                this.generalIeTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.generalIeTopContent = [
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
