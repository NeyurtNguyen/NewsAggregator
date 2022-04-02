import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  urlTopHeadlines = "https://newsapi.org/v2/top-headlines";
  
  apiKey= "&apiKey=0239e75895d44dd9a739e10d28e6092f" || "&apiKey=0239e75895d44dd9a739e10d28e6092f";

  //-------------------country api start-------------------//

  // ae-UNITED ARAB EMIRATES-a rap
  aeApiUrl = this.urlTopHeadlines + "?country=ae" + this.apiKey;
  
  // ar-ARGENTINA
  arApiUrl = this.urlTopHeadlines + "?country=ar" + this.apiKey;

  // at-AUSTRIA-ao
  atApiUrl = this.urlTopHeadlines + "?country=at" + this.apiKey;

  // au-AUSTRALIA-uc
  auApiUrl = this.urlTopHeadlines + "?country=au" + this.apiKey;
  
  // be-BELGIUM-bi
  beApiUrl = this.urlTopHeadlines + "?country=be" + this.apiKey;
  
  // bg-BULGARIA-bun-ga-ry
  bgApiUrl = this.urlTopHeadlines + "?country=bg" + this.apiKey;
  
  // br-BRAZIL
  brApiUrl = this.urlTopHeadlines + "?country=br" + this.apiKey;
  
  // ca-CANADA
  caApiUrl = this.urlTopHeadlines + "?country=ca" + this.apiKey;
  
  // ch-Switzerland-thuy si
  chApiUrl = this.urlTopHeadlines + "?country=ch" + this.apiKey;
  
  // cn-CHINA-tau khua
  cnApiUrl = this.urlTopHeadlines + "?country=cn" + this.apiKey;
  
  // co-COLOMBIA
  coApiUrl = this.urlTopHeadlines + "?country=co" + this.apiKey;

  // cu-CUBA
  cuApiUrl = this.urlTopHeadlines + "?country=cu" + this.apiKey;

  // cz-CZECH REPUBLIC-cong hoa sec
  czApiUrl = this.urlTopHeadlines + "?country=cz" + this.apiKey;

  // de-GERMANY-duc
  deApiUrl = this.urlTopHeadlines + "?country=de" + this.apiKey;
  
  // eg-EGYPT-ai cap
  egApiUrl = this.urlTopHeadlines + "?country=eg" + this.apiKey;
  
  // fr-FRANCE-phap
  frApiUrl = this.urlTopHeadlines + "?country=fr" + this.apiKey;
  
  // gb-UNITED KINGDOM-anh
  gbApiUrl = this.urlTopHeadlines + "?country=gb" + this.apiKey;
  
  // gr-GREECE-hy lap
  grApiUrl = this.urlTopHeadlines + "?country=gr" + this.apiKey;
  
  // hk-Hong Kong
  hkApiUrl = this.urlTopHeadlines + "?country=hk" + this.apiKey;
  
  // hu-HUNGARY
  huApiUrl = this.urlTopHeadlines + "?country=hu" + this.apiKey;
  
  // id-INDONESIA
  idApiUrl = this.urlTopHeadlines + "?country=id" + this.apiKey;

  // ie-IRELAND
  ieApiUrl = this.urlTopHeadlines + "?country=ie" + this.apiKey;

  // il-ISRAEL
  ilApiUrl = this.urlTopHeadlines + "?country=il" + this.apiKey;

  // in-INDIA-an do
  inApiUrl = this.urlTopHeadlines + "?country=in" + this.apiKey;
  
  // it-ITALY-y
  itApiUrl = this.urlTopHeadlines + "?country=it" + this.apiKey;
  
  // jp-JAPAN-nhat ban
  jpApiUrl = this.urlTopHeadlines + "?country=jp" + this.apiKey;
  
  // kr-KOREA, REPUBLIC OF- han quoc
  krApiUrl = this.urlTopHeadlines + "?country=kr" + this.apiKey;
  
  // lt-LITHUANIA
  ltApiUrl = this.urlTopHeadlines + "?country=lt" + this.apiKey;
  
  // lv-LATVIA
  lvApiUrl = this.urlTopHeadlines + "?country=lv" + this.apiKey;
  
  // ma-MOROCCO-ma roc
  maApiUrl = this.urlTopHeadlines + "?country=ma" + this.apiKey;
  
  // mx-MEXICO
  mxApiUrl = this.urlTopHeadlines + "?country=mx" + this.apiKey;

  // my-MALAYSIA
  myApiUrl = this.urlTopHeadlines + "?country=my" + this.apiKey;

  // ng-NIGERIA
  ngApiUrl = this.urlTopHeadlines + "?country=ng" + this.apiKey;

  // nl-NETHERLANDS-ha lan
  nlApiUrl = this.urlTopHeadlines + "?country=nl" + this.apiKey;
  
  // no-NORWAY-na uy
  noApiUrl = this.urlTopHeadlines + "?country=no" + this.apiKey;
  
  // nz-NEW ZEALAND
  nzApiUrl = this.urlTopHeadlines + "?country=nz" + this.apiKey;
  
  // ph-PHILIPPINES
  phApiUrl = this.urlTopHeadlines + "?country=ph" + this.apiKey;
  
  // pl-POLAND-ba lan
  plApiUrl = this.urlTopHeadlines + "?country=pl" + this.apiKey;
  
  // pt-PORTUGAL-bo dao nha
  ptApiUrl = this.urlTopHeadlines + "?country=pt" + this.apiKey;
  
  // ro-ROMANIA
  roApiUrl = this.urlTopHeadlines + "?country=ro" + this.apiKey;
  
  // rs-Serbia
  rsApiUrl = this.urlTopHeadlines + "?country=rs" + this.apiKey;

  // ru-RUSSIA-nga
  ruApiUrl = this.urlTopHeadlines + "?country=ru" + this.apiKey;
  
  // sa-SAUDI ARABIA
  saApiUrl = this.urlTopHeadlines + "?country=sa" + this.apiKey;
  
  // se-SWEDEN- thuy dien
  seApiUrl = this.urlTopHeadlines + "?country=se" + this.apiKey;

  // sg-SINGAPORE
  sgApiUrl = this.urlTopHeadlines + "?country=sg" + this.apiKey;

  // si-SLOVENIA
  siApiUrl = this.urlTopHeadlines + "?country=si" + this.apiKey;

  // sk-SLOVAKIA
  skApiUrl = this.urlTopHeadlines + "?country=sk" + this.apiKey;
  
  // th-THAILAND
  thApiUrl = this.urlTopHeadlines + "?country=th" + this.apiKey;
  
  // tr-TURKEY-Tho Nhi Ki
  trApiUrl = this.urlTopHeadlines + "?country=tr" + this.apiKey;
  
  // tw-TAIWAN
  twApiUrl = this.urlTopHeadlines + "?country=tw" + this.apiKey;
  
  // ua-UKRAINE
  uaApiUrl = this.urlTopHeadlines + "?country=ua" + this.apiKey;

  // us-United States-My
  usApiUrl = this.urlTopHeadlines + "?country=us" + this.apiKey;
  
  // ve-VENEZUELA
  veApiUrl = this.urlTopHeadlines + "?country=ve" + this.apiKey;
  
  // za-SOUTH AFRICA-Nam Phi
  zaApiUrl = this.urlTopHeadlines + "?country=za" + this.apiKey;
  
  //-------------------country api end-------------------//

  /**
   * 
   * 
   * 
   * 
   */

  //-------------------category api start-------------------//

  // business us news api url
  businessUsApiUrl = this.urlTopHeadlines + "?country=us&category=business" + this.apiKey;
  // business gb news api url
  businessGbApiUrl = this.urlTopHeadlines + "?country=gb&category=business" + this.apiKey;
  // business ca news api url
  businessCaApiUrl = this.urlTopHeadlines + "?country=ca&category=business" + this.apiKey;
  // business au news api url
  businessAuApiUrl = this.urlTopHeadlines + "?country=au&category=business" + this.apiKey;
  // business ie news api url
  businessIeApiUrl = this.urlTopHeadlines + "?country=ie&category=business" + this.apiKey;

   // technology us news api url
   techUsApiUrl = this.urlTopHeadlines + "?country=us&category=technology" + this.apiKey;
   // technology gb news api url
   techGbApiUrl = this.urlTopHeadlines + "?country=gb&category=technology" + this.apiKey;
   // technology ca news api url
   techCaApiUrl = this.urlTopHeadlines + "?country=ca&category=technology" + this.apiKey;
   // technology au news api url
   techAuApiUrl = this.urlTopHeadlines + "?country=au&category=technology" + this.apiKey;
   // technology ie news api url
   techIeApiUrl = this.urlTopHeadlines + "?country=ie&category=technology" + this.apiKey;

   // entertainment us news api url
   entertainmentUsApiUrl = this.urlTopHeadlines + "?country=us&category=entertainment" + this.apiKey;
   // entertainment gb news api url
   entertainmentGbApiUrl = this.urlTopHeadlines + "?country=gb&category=entertainment" + this.apiKey;
   // entertainment ca news api url
   entertainmentCaApiUrl = this.urlTopHeadlines + "?country=ca&category=entertainment" + this.apiKey;
   // entertainment au news api url
   entertainmentAuApiUrl = this.urlTopHeadlines + "?country=au&category=entertainment" + this.apiKey;
   // entertainment ie news api url
   entertainmentIeApiUrl = this.urlTopHeadlines + "?country=ie&category=entertainment" + this.apiKey;

   // general us news api url
   generalUsApiUrl = this.urlTopHeadlines + "?country=us&category=general" + this.apiKey;
   // general gb news api url
   generalGbApiUrl = this.urlTopHeadlines + "?country=gb&category=general" + this.apiKey;
   // general ca news api url
   generalCaApiUrl = this.urlTopHeadlines + "?country=ca&category=general" + this.apiKey;
   // general au news api url
   generalAuApiUrl = this.urlTopHeadlines + "?country=au&category=general" + this.apiKey;
   // general ie news api url
   generalIeApiUrl = this.urlTopHeadlines + "?country=ie&category=general" + this.apiKey;

   // health us news api url
   healthUsApiUrl = this.urlTopHeadlines + "?country=us&category=health" + this.apiKey;
   // health gb news api url
   healthGbApiUrl = this.urlTopHeadlines + "?country=gb&category=health" + this.apiKey;
   // health ca news api url
   healthCaApiUrl = this.urlTopHeadlines + "?country=ca&category=health" + this.apiKey;
   // health au news api url
   healthAuApiUrl = this.urlTopHeadlines + "?country=au&category=health" + this.apiKey;
   // health ie news api url
   healthIeApiUrl = this.urlTopHeadlines + "?country=ie&category=health" + this.apiKey;

   // science us news api url
   scienceUsApiUrl = this.urlTopHeadlines + "?country=us&category=science" + this.apiKey;
   // science gb news api url
   scienceGbApiUrl = this.urlTopHeadlines + "?country=gb&category=science" + this.apiKey;
   // science ca news api url
   scienceCaApiUrl = this.urlTopHeadlines + "?country=ca&category=science" + this.apiKey;
   // science au news api url
   scienceAuApiUrl = this.urlTopHeadlines + "?country=au&category=science" + this.apiKey;
   // science ie news api url
   scienceIeApiUrl = this.urlTopHeadlines + "?country=ie&category=science" + this.apiKey;

   // sports us news api url
   sportsUsApiUrl = this.urlTopHeadlines + "?country=us&category=sports" + this.apiKey;
   // sports gb news api url
   sportsGbApiUrl = this.urlTopHeadlines + "?country=gb&category=sports" + this.apiKey;
   // sports ca news api url
   sportsCaApiUrl = this.urlTopHeadlines + "?country=ca&category=sports" + this.apiKey;
   // sports au news api url
   sportsAuApiUrl = this.urlTopHeadlines + "?country=au&category=sports" + this.apiKey;
   // sports ie news api url
   sportsIeApiUrl = this.urlTopHeadlines + "?country=ie&category=sports" + this.apiKey;


  //-------------------category api end-------------------//
  /**
  * 
  * 
  */


  //-------------------hot api start-------------------//
  hotNewsApiUrl = "https://newsapi.org/v2/everything?q=hot" + this.apiKey;
  // data preventive
  hotNewsApiUrl2 = "https://newsapi.org/v2/everything?q=new" + this.apiKey;

  topNewsApiUrl = "https://newsapi.org/v2/everything?q=top" + this.apiKey;
  
  //-------------------hot api end-------------------//

  
  // // news api url
  // newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0239e75895d44dd9a739e10d28e6092f";
  
  // // tech news api url
  // techApiUrl = "https://newsapi.org/v2/top-headlines?country=us" + this.apiKey;
  
  
  // // top heading
  topHeading():Observable<any> {
    return this._http.get(this.hotNewsApiUrl);
  }
  topHeading2():Observable<any> {
    return this._http.get(this.hotNewsApiUrl2);
  }
  // main content
  topContent():Observable<any> {
    return this._http.get(this.topNewsApiUrl);
  }
  bussinessTopContent():Observable<any> {
    return this._http.get(this.businessUsApiUrl);
  }
  // preventive
  bussinessTopContent2():Observable<any> {
    return this._http.get(this.businessGbApiUrl);
  }
  entertainmentTopContent():Observable<any> {
    return this._http.get(this.entertainmentUsApiUrl);
  }
  // preventive
  entertainmentTopContent2():Observable<any> {
    return this._http.get(this.entertainmentGbApiUrl);
  }
  generalTopContent():Observable<any> {
    return this._http.get(this.generalUsApiUrl);
  }
  // preventive
  generalTopContent2():Observable<any> {
    return this._http.get(this.generalGbApiUrl);
  }
  healthTopContent():Observable<any> {
    return this._http.get(this.healthUsApiUrl);
  }
  // preventive
  healthTopContent2():Observable<any> {
    return this._http.get(this.healthGbApiUrl);
  }
  scienceTopContent():Observable<any> {
    return this._http.get(this.scienceUsApiUrl);
  }
  // preventive
  scienceTopContent2():Observable<any> {
    return this._http.get(this.scienceGbApiUrl);
  }
  sportsTopContent():Observable<any> {
    return this._http.get(this.sportsUsApiUrl);
  }
  // preventive
  sportsTopContent2():Observable<any> {
    return this._http.get(this.sportsGbApiUrl);
  }
  technologyTopContent():Observable<any> {
    return this._http.get(this.techUsApiUrl);
  }
  // preventive
  technologyTopContent2():Observable<any> {
    return this._http.get(this.techGbApiUrl);
  }
  
  // // top technology news
  // techNews():Observable<any> {
  //   return this._http.get(this.techApiUrl);
  // }

  // // top business news
  // business():Observable<any> {
  //   return this._http.get(this.businessApiUrl);
  // }
}
