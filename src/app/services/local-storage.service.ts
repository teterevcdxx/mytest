import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { 

  }

  private _getLocalStorage(){
   return JSON.parse(localStorage.getItem('saved') || '[]')
  }

  addToLocalStorage(item: any){
    const storage = Array.from(this._getLocalStorage());
    storage.push(item);
    localStorage.setItem('saved', JSON.stringify(storage));
  }

  removeFromLocalStorage(item: any){
    const storage = Array.from(this._getLocalStorage());
    storage.splice(storage.indexOf(item), 1);
    localStorage.setItem('saved', JSON.stringify(storage)); 
  }
}
