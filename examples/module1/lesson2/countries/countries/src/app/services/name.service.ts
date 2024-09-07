import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NameService {
  public name = "";

  setName(name: string): void {
    this.name = name;
  }
}
