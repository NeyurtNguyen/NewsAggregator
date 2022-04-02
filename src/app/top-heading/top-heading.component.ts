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
  businessTopContent:any  = [];
  entertainmentTopContent:any  = [];
  generalTopContent:any  = [];
  healthTopContent:any  = [];
  scienceTopContent:any  = [];
  sportsTopContent:any  = [];
  technologyTopContent:any  = [];

  ngOnInit(): void {
    
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      try {
        this._services.topContent().subscribe((result) => {
          console.log(result);
          this.leftContent = result.articles.slice(0, 20);
          for (var i = 0; i < this.leftContent.length; i++) {
            if (this.leftContent[i].urlToImage == null) {
              this.leftContent[i].urlToImage == "../../assets/not-image.jpg";
            } 
          }
        });
        
        // business
        this._services.bussinessTopContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.businessTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.businessTopContent.length; i++) {
              if (this.businessTopContent[i].urlToImage == null) {
                this.businessTopContent[i].urlToImage == "../../assets/not-image.jpg";
              } 
            }
          } else {
            this._services.bussinessTopContent2().subscribe((result) => {
              console.log(result);
              if (result.articles.length >= 5){
                this.businessTopContent = result.articles.slice(0, 5);
                for (var i = 0; i < this.businessTopContent.length; i++) {
                  if (this.businessTopContent[i].urlToImage == null) {
                    this.businessTopContent[i].urlToImage == "../../assets/not-image.jpg";
                  } 
                }
              } else {
                this.businessTopContent = [
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""}
                ];
              }
            });
          }
        });

        // entertainment
        this._services.entertainmentTopContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.entertainmentTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.entertainmentTopContent.length; i++) {
              if (this.entertainmentTopContent[i].urlToImage == null) {
                this.entertainmentTopContent[i].urlToImage == "../../assets/not-image.jpg";
              } 
            }
          } else {
            this._services.entertainmentTopContent2().subscribe((result) => {
              console.log(result);
              if (result.articles.length >= 5){
                this.entertainmentTopContent = result.articles.slice(0, 5);
                for (var i = 0; i < this.entertainmentTopContent.length; i++) {
                  if (this.entertainmentTopContent[i].urlToImage == null) {
                    this.entertainmentTopContent[i].urlToImage == "../../assets/not-image.jpg";
                  } 
                }
              } else {
                this.entertainmentTopContent = [
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""}
                ];
              }
            });
          }
        });

        // general
        this._services.generalTopContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.generalTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.generalTopContent.length; i++) {
              if (this.generalTopContent[i].urlToImage == null) {
                this.generalTopContent[i].urlToImage == "../../assets/not-image.jpg";
              } 
            }
          } else {
            this._services.generalTopContent2().subscribe((result) => {
              console.log(result);
              if (result.articles.length >= 5){
                this.generalTopContent = result.articles.slice(0, 5);
                for (var i = 0; i < this.generalTopContent.length; i++) {
                  if (this.generalTopContent[i].urlToImage == null) {
                    this.generalTopContent[i].urlToImage == "../../assets/not-image.jpg";
                  } 
                }
              } else {
                this.generalTopContent = [
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""}
                ];
              }
            });
          }
        });
        
        // health
        this._services.healthTopContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.healthTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.healthTopContent.length; i++) {
              if (this.healthTopContent[i].urlToImage == null) {
                this.healthTopContent[i].urlToImage == "../../assets/not-image.jpg";
              } 
            }
          } else {
            this._services.healthTopContent2().subscribe((result) => {
              console.log(result);
              if (result.articles.length >= 5){
                this.healthTopContent = result.articles.slice(0, 5);
                for (var i = 0; i < this.healthTopContent.length; i++) {
                  if (this.healthTopContent[i].urlToImage == null) {
                    this.healthTopContent[i].urlToImage == "../../assets/not-image.jpg";
                  } 
                }
              } else {
                this.healthTopContent = [
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""}
                ];
              }
            });
          }
        });

        // science
        this._services.scienceTopContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.scienceTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.scienceTopContent.length; i++) {
              if (this.scienceTopContent[i].urlToImage == null) {
                this.scienceTopContent[i].urlToImage == "../../assets/not-image.jpg";
              } 
            }
          } else {
            this._services.scienceTopContent2().subscribe((result) => {
              console.log(result);
              if (result.articles.length >= 5){
                this.scienceTopContent = result.articles.slice(0, 5);
                for (var i = 0; i < this.scienceTopContent.length; i++) {
                  if (this.scienceTopContent[i].urlToImage == null) {
                    this.scienceTopContent[i].urlToImage == "../../assets/not-image.jpg";
                  } 
                }
              } else {
                this.scienceTopContent = [
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""}
                ];
              }
            });
          }
        });

        // sports
        this._services.sportsTopContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.sportsTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.sportsTopContent.length; i++) {
              if (this.sportsTopContent[i].urlToImage == null) {
                this.sportsTopContent[i].urlToImage == "../../assets/not-image.jpg";
              } 
            }
          } else {
            this._services.sportsTopContent2().subscribe((result) => {
              console.log(result);
              if (result.articles.length >= 5){
                this.sportsTopContent = result.articles.slice(0, 5);
                for (var i = 0; i < this.sportsTopContent.length; i++) {
                  if (this.sportsTopContent[i].urlToImage == null) {
                    this.sportsTopContent[i].urlToImage == "../../assets/not-image.jpg";
                  } 
                }
              } else {
                this.sportsTopContent = [
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""}
                ];
              }
            });
          }
        });

        // technology
        this._services.technologyTopContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5){
            this.technologyTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.technologyTopContent.length; i++) {
              if (this.technologyTopContent[i].urlToImage == null) {
                this.technologyTopContent[i].urlToImage == "../../assets/not-image.jpg";
              } 
            }
          } else {
            this._services.technologyTopContent2().subscribe((result) => {
              console.log(result);
              if (result.articles.length >= 5){
                this.technologyTopContent = result.articles.slice(0, 5);
                for (var i = 0; i < this.technologyTopContent.length; i++) {
                  if (this.technologyTopContent[i].urlToImage == null) {
                    this.technologyTopContent[i].urlToImage == "../../assets/not-image.jpg";
                  } 
                }
              } else {
                this.technologyTopContent = [
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""},
                  {content: "", source: "", title: "", url: "", urlToImage: ""}
                ];
              }
            });
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
