import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  constructor(private _services: NewsapiserviceService) {}

  // create variable to save data
  topHeadingDisplay: any;
  topHeadingArr: any = [];
  leftContentSportsPage: any = [];
  sportsUsTopContent: any = [];
  sportsGbTopContent: any = [];
  sportsCaTopContent: any = [];
  sportsAuTopContent: any = [];
  sportsIeTopContent: any = [];

  ngOnInit(): void {
    this._services.sportsPageHeading().subscribe((result) => {
      console.log(result);
      try {
        // left content
        this._services.sportsPageTopContent().subscribe((result) => {
          console.log(result);
          this.leftContentSportsPage = result.articles.slice(0, 15);
          for (var i = 0; i < this.leftContentSportsPage.length; i++) {
            if (this.leftContentSportsPage[i].urlToImage == null) {
              this.leftContentSportsPage[i].urlToImage =
                '../../assets/not-image.jpg';
            }
          }
        });

        // sports us
        this._services.sportsPageUsContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.sportsUsTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.sportsUsTopContent.length; i++) {
              if (this.sportsUsTopContent[i].urlToImage == null) {
                this.sportsUsTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.sportsUsTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // sports gb
        this._services.sportsPageGbContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.sportsGbTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.sportsGbTopContent.length; i++) {
              if (this.sportsGbTopContent[i].urlToImage == null) {
                this.sportsGbTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.sportsGbTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // sports ca
        this._services.sportsPageCaContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.sportsCaTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.sportsCaTopContent.length; i++) {
              if (this.sportsCaTopContent[i].urlToImage == null) {
                this.sportsCaTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.sportsCaTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // sports au
        this._services.sportsPageAuContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.sportsAuTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.sportsAuTopContent.length; i++) {
              if (this.sportsAuTopContent[i].urlToImage == null) {
                this.sportsAuTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.sportsAuTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // sports ie
        this._services.sportsPageIeContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.sportsIeTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.sportsIeTopContent.length; i++) {
              if (this.sportsIeTopContent[i].urlToImage == null) {
                this.sportsIeTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.sportsIeTopContent = [
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
