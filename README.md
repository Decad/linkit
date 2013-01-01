Linkit
======

A Simple JQuery plugin to convert urls found in strings or in an elements html into clickable links.

Usage
=====

On an element

```javascript

$(selector).linkit()

```
linkit can aslo be used on a string like so:

```javascript

$.linkit(string)

```

Options
=======

Linkit also supports overriding its default options by passing a options object as a parameter. The default values are listed below

```javascript
$(selector).linkit({
   target: null, //Defaults to null, used to set the target attribute on a link eg. "_blank"
   protocolRegex: /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
   wwwRegex: /(^|[^\/])(www\.[\S]+(\b|$))/gim,
   protocolTemplate: "<a href='$1'>$1</a>",
   wwwTemplate: '$1<a href="http://$2">$2</a>'
})

```