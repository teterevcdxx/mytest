import { Injectable } from '@angular/core';
import { IUniversity } from '../shared/models/univercity.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { 
  }

  private _getLocalStorage(): IUniversity[]{
   return JSON.parse(localStorage.getItem('saved') || '[]')
  }

  public addToLocalStorage(item: IUniversity){
    const storage = Array.from(this._getLocalStorage());
    storage.push(item);
    localStorage.setItem('saved', JSON.stringify(storage));
  }

  public removeFromLocalStorage(item: IUniversity){
    const storage = Array.from(this._getLocalStorage());
    storage.splice(storage.indexOf(item), 1);
    localStorage.setItem('saved', JSON.stringify(storage)); 
  }
}
