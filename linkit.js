/*
*  Jquery plugin for turning urls into anchor elements
*
*  Author: Declan Cook
*  Licence: MIT
*/

(function($) {

  $.linkit = function(str, options) {

    var settings = $.extend({}, $.fn.linkit.defaults, options),
        output = str;

    if(settings.target !== null) {
      settings.protocolTemplate = "<a href='$1' target='" + settings.target + "'>$1</a>"
      settings.wwwTemplate = "$1<a href='$2' target='" + settings.target + "'>$2</a>"
    }

    output = output.replace(settings.protocolRegex, settings.protocolTemplate)
    output = output.replace(settings.wwwRegex, settings.wwwTemplate)

    return output
  }

  $.fn.linkit = function(options) {

    return this.each(function() {
      var $this = $(this),
          children = $this.children();

      if(children.length > 0) {
        children.linkit(options)
      } else {
        $this.html($.linkit($this.html(), options))
      }
    })

  }

  $.fn.linkit.defaults = {
   target: null,
   protocolRegex: /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
   wwwRegex: /(^|[^\/])(www\.[\S]+(\b|$))/gim,
   protocolTemplate: "<a href='$1'>$1</a>",
   wwwTemplate: '$1<a href="http://$2">$2</a>'
  }

})(jQuery)