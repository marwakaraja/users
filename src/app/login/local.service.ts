import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public saveDataUser(key: string, value: string) {
    sessionStorage.setItem(key, value);
}
}
