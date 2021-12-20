# XmlPipe

Angular Pipe which converts a value into its XML-format representation.

## Installation

`npm i xml-pipe`

## Usage

1) Register the `XmlPipeModule` in your app module.

 ```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { XmlPipeModule } from 'XmlPipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    XmlPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 ```

 2) Use the `xml` pipe in your template expression.

 ```html
<p>{{ foo | xml }}</p>
```

## Credits

This project is based on [xmlbuilder2](https://github.com/oozcitak/xmlbuilder2).