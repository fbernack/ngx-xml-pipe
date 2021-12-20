import { NgModule } from '@angular/core';
import { XmlPipe } from './xml-pipe.pipe';


@NgModule({
  declarations: [
    XmlPipe
  ],
  exports: [
    XmlPipe
  ]
})
export class XmlPipeModule { }
