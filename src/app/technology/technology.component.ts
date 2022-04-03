import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  constructor(private _services: NewsapiserviceService) {}

  // create variable to save data
  topHeadingDisplay: any;
  topHeadingArr: any = [];
  leftContentTechPage: any = [];
  techUsTopContent: any = [];
  techGbTopContent: any = [];
  techCaTopContent: any = [];
  techAuTopContent: any = [];
  techIeTopContent: any = [];

  ngOnInit(): void {
    this._services.techPageHeading().subscribe((result) => {
      console.log(result);
      try {
        // left content
        this._services.techPageTopContent().subscribe((result) => {
          console.log(result);
          this.leftContentTechPage = result.articles.slice(0, 15);
          for (var i = 0; i < this.leftContentTechPage.length; i++) {
            if (this.leftContentTechPage[i].urlToImage == null) {
              this.leftContentTechPage[i].urlToImage =
                '../../assets/not-image.jpg';
            }
          }
        });

        // tech us
        this._services.techPageUsContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.techUsTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.techUsTopContent.length; i++) {
              if (this.techUsTopContent[i].urlToImage == null) {
                this.techUsTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.techUsTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // tech gb
        this._services.techPageGbContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.techGbTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.techGbTopContent.length; i++) {
              if (this.techGbTopContent[i].urlToImage == null) {
                this.techGbTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.techGbTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // tech ca
        this._services.techPageCaContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.techCaTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.techCaTopContent.length; i++) {
              if (this.techCaTopContent[i].urlToImage == null) {
                this.techCaTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.techCaTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // tech au
        this._services.techPageAuContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.techAuTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.techAuTopContent.length; i++) {
              if (this.techAuTopContent[i].urlToImage == null) {
                this.techAuTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.techAuTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // tech ie
        this._services.techPageIeContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.techIeTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.techIeTopContent.length; i++) {
              if (this.techIeTopContent[i].urlToImage == null) {
                this.techIeTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.techIeTopContent = [
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
