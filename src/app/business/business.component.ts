import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../services/newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  // create variable to save data
  topHeadingDisplay:any;
  topHeadingArr:any  = [];
  leftContentBusinessPage:any  = [];
  businessUsTopContent:any  = [];
  businessGbTopContent:any  = [];
  businessCaTopContent:any  = [];
  businessAuTopContent:any  = [];
  businessIeTopContent:any  = [];

  ngOnInit(): void {
    
    this._services.bussinessPageHeading().subscribe((result) => {
      console.log(result);
      try {

        // left content
        this._services.bussinessPageTopContent().subscribe((result) => {
          console.log(result);
          this.leftContentBusinessPage = result.articles.slice(0, 15);
          for (var i = 0; i < this.leftContentBusinessPage.length; i++) {
            if (this.leftContentBusinessPage[i].urlToImage == null) {
              this.leftContentBusinessPage[i].urlToImage = "../../assets/not-image.jpg";
            } 
          }
        });
        
        // business us
        this._services.bussinessPageUsContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.businessUsTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.businessUsTopContent.length; i++) {
              if (this.businessUsTopContent[i].urlToImage == null) {
                this.businessUsTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.businessUsTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // business gb
        this._services.bussinessPageGbContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.businessGbTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.businessGbTopContent.length; i++) {
              if (this.businessGbTopContent[i].urlToImage == null) {
                this.businessGbTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.businessGbTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // business ca
        this._services.businessPageCaContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.businessCaTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.businessCaTopContent.length; i++) {
              if (this.businessCaTopContent[i].urlToImage == null) {
                this.businessCaTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.businessCaTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });
        
        // business au
        this._services.businessPageAuContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.businessAuTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.businessAuTopContent.length; i++) {
              if (this.businessAuTopContent[i].urlToImage == null) {
                this.businessAuTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.businessAuTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""},
              {content: "", source: "", title: "", url: "", urlToImage: ""}
            ];
          }
        });

        // business ie
        this._services.businessPageIeContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.businessIeTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.businessIeTopContent.length; i++) {
              if (this.businessIeTopContent[i].urlToImage == null) {
                this.businessIeTopContent[i].urlToImage = "../../assets/not-image.jpg";
              } 
            }
          } else {
            this.businessIeTopContent = [
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
