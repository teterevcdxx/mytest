import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUniversity } from 'src/app/shared/models/univercity.model';
import { AppSelectors } from 'src/app/shared/store/app.selectors';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  savedUniversities$: Observable<IUniversity[]>

  constructor(private store: Store) { }
  
  ngOnInit(): void {
    this.savedUniversities$ = this.store.select(AppSelectors.savedUnivercities);
  }
  public export(){
    html2canvas.default(this.screen.nativeElement).then((canvas:any) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = `My universities ${new Date().toISOString().split('T')[0]}`;
      this.downloadLink.nativeElement.click();
    });
  }

}
