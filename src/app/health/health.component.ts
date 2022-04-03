import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit {
  constructor(private _services: NewsapiserviceService) {}

  // create variable to save data
  topHeadingDisplay: any;
  topHeadingArr: any = [];
  leftContentHealthPage: any = [];
  healthUsTopContent: any = [];
  healthGbTopContent: any = [];
  healthCaTopContent: any = [];
  healthAuTopContent: any = [];
  healthIeTopContent: any = [];

  ngOnInit(): void {
    this._services.healthPageHeading().subscribe((result) => {
      console.log(result);
      try {
        // left content
        this._services.healthPageTopContent().subscribe((result) => {
          console.log(result);
          this.leftContentHealthPage = result.articles.slice(0, 15);
          for (var i = 0; i < this.leftContentHealthPage.length; i++) {
            if (this.leftContentHealthPage[i].urlToImage == null) {
              this.leftContentHealthPage[i].urlToImage =
                '../../assets/not-image.jpg';
            }
          }
        });

        // health us
        this._services.healthPageUsContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.healthUsTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.healthUsTopContent.length; i++) {
              if (this.healthUsTopContent[i].urlToImage == null) {
                this.healthUsTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.healthUsTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // health gb
        this._services.healthPageGbContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.healthGbTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.healthGbTopContent.length; i++) {
              if (this.healthGbTopContent[i].urlToImage == null) {
                this.healthGbTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.healthGbTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // health ca
        this._services.healthPageCaContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.healthCaTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.healthCaTopContent.length; i++) {
              if (this.healthCaTopContent[i].urlToImage == null) {
                this.healthCaTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.healthCaTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // health au
        this._services.healthPageAuContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.healthAuTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.healthAuTopContent.length; i++) {
              if (this.healthAuTopContent[i].urlToImage == null) {
                this.healthAuTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.healthAuTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // health ie
        this._services.healthPageIeContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.healthIeTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.healthIeTopContent.length; i++) {
              if (this.healthIeTopContent[i].urlToImage == null) {
                this.healthIeTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.healthIeTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
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
              this.topHeadingArr.splice(i, 1);
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
                this.topHeadingArr.splice(i, 1);
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
