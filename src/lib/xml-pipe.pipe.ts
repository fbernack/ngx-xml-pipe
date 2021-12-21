import { Pipe, PipeTransform } from '@angular/core';
import * as xmlbuilder2 from 'xmlbuilder2';

@Pipe({ name: 'xml' })
export class XmlPipe implements PipeTransform {

  transform(value: any, prettyPrint: boolean = false, root: string = ''): string {

    const doc = xmlbuilder2.create();
    if (root) {
      // insert custom root node
      doc.ele(root).ele(value);
    } else {
      doc.ele(value)
    }

    return doc.end({ prettyPrint: prettyPrint });
  }
}
