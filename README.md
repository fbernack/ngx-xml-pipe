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
{{ value | xml : prettyPrint : root }}
```
### Arguments

| Param | Type | Default Value | Details |
| --- | --- | --- | --- |
| value | `object` |  | The object to be displayed in XML representation. |
| prettyPrint | `boolean` | false | Whether the XML elements should be indented according to their level. |
| root | `string` |  | Name of an optional root element to be added. |
 
### Examples
#### Default usage
```typescript
foo = { foo :  'bar' }
```
```html
{{ foo | xml }}
```
Result: 
```xml
<?xml version="1.0"?><foo>bar</foo>
```
#### Additional root element
Note: If your object has multiple properties at the first level, a root element must be added, otherwise a valid XML document cannot be displayed.
```typescript
foo = { name:  "Lisa Simpson", address: { street :  "742 Evergreen Terrace", city:  "Springfield" }}
```
```html
{{{ foo : false : 'character' }}}
```
Result: 
```xml
<?xml version="1.0"?><character><name>Lisa Simpson</name><address><street>742 Evergreen Terrace</street><city>Springfield</city></address></character>
```

## Credits

This project is based on [xmlbuilder2](https://github.com/oozcitak/xmlbuilder2).