import {Injectable} from "@angular/core";

@Injectable()
export class AppConfig {
  public version: string = "1.0.0";
  public locale: string = "en-US";
  public currencyFormat = {style: "currency", currency: "RIAL"};
  public dateFormat = {year: 'numeric', month: 'short', day: 'numeric'};
  // API Related configs
  public apiPort: string = "1234";
  public apiProtocol: string | undefined;
  public apiHostName: string | undefined;
  public baseApiPath: string | undefined;

  constructor() {
    if (this.apiProtocol === undefined) {
      this.apiProtocol = window.location.protocol;
    }
    if (this.apiHostName === undefined) {
      this.apiHostName = window.location.hostname;
    }
    if (this.apiPort === undefined) {
      this.apiPort = window.location.port;
    }
    if (this.apiHostName.includes("infomud") || this.apiHostName.includes("heroku")) {
      this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + "/";
    } else {
      this.baseApiPath =""
      // this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort + "/";
    }
    if (this.locale === undefined) {
      this.locale = navigator.language;
    }
  }
}
