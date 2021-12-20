# XmlPipe

<p align="center">
<a href="https://www.npmjs.com/package/xml-pipe"><img src="https://img.shields.io/npm/v/xml-pipe.svg?style=flat-square" alt="npm"></a>
<a href="https://github.com/daFant/xml-pipe/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT licensed"></a><br/><br/>

Angular Pipe which converts a value into its XML-format representation.
</p>


## Installation

### Peer dependency

The package uses the peer dependency [xmlbuilder2](https://github.com/oozcitak/xmlbuilder2), so this must be installed first.

`npm i xmlbuilder2`

### Install XmlPipe

Use npm to install the package:
```
npm i xml-pipe
```

Or install using `ng add`:
```
ng add xml-pipe
```

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