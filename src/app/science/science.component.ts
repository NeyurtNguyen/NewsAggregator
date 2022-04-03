import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  constructor(private _services: NewsapiserviceService) {}

  // create variable to save data
  topHeadingDisplay: any;
  topHeadingArr: any = [];
  leftContentSciencePage: any = [];
  scienceUsTopContent: any = [];
  scienceGbTopContent: any = [];
  scienceCaTopContent: any = [];
  scienceAuTopContent: any = [];
  scienceIeTopContent: any = [];

  ngOnInit(): void {
    this._services.sciencePageHeading().subscribe((result) => {
      console.log(result);
      try {
        // left content
        this._services.sciencePageTopContent().subscribe((result) => {
          console.log(result);
          this.leftContentSciencePage = result.articles.slice(0, 15);
          for (var i = 0; i < this.leftContentSciencePage.length; i++) {
            if (this.leftContentSciencePage[i].urlToImage == null) {
              this.leftContentSciencePage[i].urlToImage =
                '../../assets/not-image.jpg';
            }
          }
        });

        // science us
        this._services.sciencePageUsContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.scienceUsTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.scienceUsTopContent.length; i++) {
              if (this.scienceUsTopContent[i].urlToImage == null) {
                this.scienceUsTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.scienceUsTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // science gb
        this._services.sciencePageGbContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.scienceGbTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.scienceGbTopContent.length; i++) {
              if (this.scienceGbTopContent[i].urlToImage == null) {
                this.scienceGbTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.scienceGbTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // science ca
        this._services.sciencePageCaContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.scienceCaTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.scienceCaTopContent.length; i++) {
              if (this.scienceCaTopContent[i].urlToImage == null) {
                this.scienceCaTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.scienceCaTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // science au
        this._services.sciencePageAuContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.scienceAuTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.scienceAuTopContent.length; i++) {
              if (this.scienceAuTopContent[i].urlToImage == null) {
                this.scienceAuTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.scienceAuTopContent = [
              { content: '', source: '', title: 'Error unknown', url: '', urlToImage: '../../assets/not-image.jpg' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
              { content: '', source: '', title: '', url: '', urlToImage: '' },
            ];
          }
        });

        // science ie
        this._services.sciencePageIeContent().subscribe((result) => {
          console.log(result);
          if (result.articles.length >= 5) {
            this.scienceIeTopContent = result.articles.slice(0, 5);
            for (var i = 0; i < this.scienceIeTopContent.length; i++) {
              if (this.scienceIeTopContent[i].urlToImage == null) {
                this.scienceIeTopContent[i].urlToImage =
                  '../../assets/not-image.jpg';
              }
            }
          } else {
            this.scienceIeTopContent = [
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
