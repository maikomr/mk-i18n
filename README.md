mk-i18n
=======

`mk-i18n` is a polymer element wrapper for <a href="i18next.com">i18next</a> 
that displays text according to a language set in `mk-i18n-config` element.

See <a href="#mk-i18n-config">mk-i18n-config</a> for more information about
`mk-i18n-config` and locales folder structure.

It  library in order to retrieve languages.

Example:

Given the following locale: `/locales/es/translation.json`

```    
   {
    "messagekey": "Hola"
   }
```
And `mk-i18n-config` lng property is set to "es".

```html
   <p><mk-i18n key="messagekey"></mk-i18n></p>
```
Will display "Hola" inside a paragraph.