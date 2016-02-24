var data = "";
console.log("started");

function injectScript(source) {
    var elem = document.createElement("script"); //Create a new script element
    elem.type = "text/javascript"; //It's javascript
    elem.innerHTML = source; //Assign the source
    document.documentElement.appendChild(elem); //Inject it into the DOM
}


injectScript("("+(function() {

  /*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
  var saveAs=saveAs||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=e.webkitRequestFileSystem,c=e.requestFileSystem||a||e.mozRequestFileSystem,u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},f="application/octet-stream",s=0,d=500,l=function(t){var o=function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()};e.chrome?o():setTimeout(o,d)},v=function(e,t,n){t=[].concat(t);for(var o=t.length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(i){u(i)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["﻿",e],{type:e.type}):e},w=function(t,u,d){d||(t=p(t));var w,y,m,S=this,h=t.type,O=!1,R=function(){v(S,"writestart progress write writeend".split(" "))},b=function(){if((O||!w)&&(w=n().createObjectURL(t)),y)y.location.href=w;else{var o=e.open(w,"_blank");void 0==o&&"undefined"!=typeof safari&&(e.location.href=w)}S.readyState=S.DONE,R(),l(w)},g=function(e){return function(){return S.readyState!==S.DONE?e.apply(this,arguments):void 0}},E={create:!0,exclusive:!1};return S.readyState=S.INIT,u||(u="download"),r?(w=n().createObjectURL(t),o.href=w,o.download=u,void setTimeout(function(){i(o),R(),l(w),S.readyState=S.DONE})):(e.chrome&&h&&h!==f&&(m=t.slice||t.webkitSlice,t=m.call(t,0,t.size,f),O=!0),a&&"download"!==u&&(u+=".download"),(h===f||a)&&(y=e),c?(s+=t.size,void c(e.TEMPORARY,s,g(function(e){e.root.getDirectory("saved",E,g(function(e){var n=function(){e.getFile(u,E,g(function(e){e.createWriter(g(function(n){n.onwriteend=function(t){y.location.href=e.toURL(),S.readyState=S.DONE,v(S,"writeend",t),l(e)},n.onerror=function(){var e=n.error;e.code!==e.ABORT_ERR&&b()},"writestart progress write abort".split(" ").forEach(function(e){n["on"+e]=S["on"+e]}),n.write(t),S.abort=function(){n.abort(),S.readyState=S.DONE},S.readyState=S.WRITING}),b)}),b)};e.getFile(u,{create:!1},g(function(e){e.remove(),n()}),g(function(e){e.code===e.NOT_FOUND_ERR?n():b()}))}),b)}),b)):void b())},y=w.prototype,m=function(e,t,n){return new w(e,t,n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return n||(e=p(e)),navigator.msSaveOrOpenBlob(e,t||"download")}:(y.abort=function(){var e=this;e.readyState=e.DONE,v(e,"abort")},y.readyState=y.INIT=0,y.WRITING=1,y.DONE=2,y.error=y.onwritestart=y.onprogress=y.onwrite=y.onabort=y.onerror=y.onwriteend=null,m)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!=define.amd&&define([],function(){return saveAs});

  /*! ics.js March 11, 2014 */
  var ics=function(){"use strict";if(navigator.userAgent.indexOf("MSIE")>-1&&navigator.userAgent.indexOf("MSIE 10")==-1){console.log("Unsupported Browser");return}var e=navigator.appVersion.indexOf("Win")!==-1?"\r\n":"\n";var t=[];var n=["BEGIN:VCALENDAR","VERSION:2.0"].join(e);var r=e+"END:VCALENDAR";return{events:function(){return t},calendar:function(){return n+e+t.join(e)+r},addEvent:function(n,r,i,s,o){if(typeof n==="undefined"||typeof r==="undefined"||typeof i==="undefined"||typeof s==="undefined"||typeof o==="undefined"){return false}var u=new Date(s);var a=new Date(o);var f=("0000"+u.getFullYear().toString()).slice(-4);var l=("00"+(u.getMonth()+1).toString()).slice(-2);var c=("00"+u.getDate().toString()).slice(-2);var h=("00"+u.getHours().toString()).slice(-2);var p=("00"+u.getMinutes().toString()).slice(-2);var d=("00"+u.getMinutes().toString()).slice(-2);var v=("0000"+a.getFullYear().toString()).slice(-4);var m=("00"+(a.getMonth()+1).toString()).slice(-2);var g=("00"+a.getDate().toString()).slice(-2);var y=("00"+a.getHours().toString()).slice(-2);var b=("00"+a.getMinutes().toString()).slice(-2);var w=("00"+a.getMinutes().toString()).slice(-2);var E="";var S="";if(p+d+b+w!=0){E="T"+h+p+d;S="T"+y+b+w}var x=f+l+c+E;var T=v+m+g+S;var N=["BEGIN:VEVENT","CLASS:PUBLIC","DESCRIPTION:"+r,"DTSTART;VALUE=DATE:"+x,"DTEND;VALUE=DATE:"+T,"LOCATION:"+i,"SUMMARY;LANGUAGE=en-us:"+n,"TRANSP:TRANSPARENT","END:VEVENT"].join(e);t.push(N);return N},download:function(i,s){if(t.length<1){return false}s=typeof s!=="undefined"?s:".ics";i=typeof i!=="undefined"?i:"calendar";var o=n+e+t.join(e)+r;var u;if(navigator.userAgent.indexOf("MSIE 10")===-1){u=new Blob([o])}else{var a=new BlobBuilder;a.append(o);u=a.getBlob("text/x-vCalendar;charset="+document.characterSet)}saveAs(u,i+s);return o}}}
  !function(t){"use strict";if(t.URL=t.URL||t.webkitURL,t.Blob&&t.URL)try{return void new Blob}catch(e){}var n=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var e=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},n=function(){this.data=[]},o=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},i=n.prototype,r=o.prototype,a=t.FileReaderSync,c=function(t){this.code=this[this.name=t]},l="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),s=l.length,u=t.URL||t.webkitURL||t,d=u.createObjectURL,f=u.revokeObjectURL,R=u,h=t.btoa,p=t.atob,b=t.ArrayBuffer,g=t.Uint8Array,w=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(o.fake=r.fake=!0;s--;)c.prototype[l[s]]=s+1;return u.createObjectURL||(R=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(w),n.origin=e&&e[1])),n}),R.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof o?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):h?e+";base64,"+h(t.data):e+","+encodeURIComponent(t.data)):d?d.call(u,t):void 0},R.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&f&&f.call(u,t)},i.append=function(t){var n=this.data;if(g&&(t instanceof b||t instanceof g)){for(var i="",r=new g(t),l=0,s=r.length;s>l;l++)i+=String.fromCharCode(r[l]);n.push(i)}else if("Blob"===e(t)||"File"===e(t)){if(!a)throw new c("NOT_READABLE_ERR");var u=new a;n.push(u.readAsBinaryString(t))}else t instanceof o?"base64"===t.encoding&&p?n.push(p(t.data)):"URI"===t.encoding?n.push(decodeURIComponent(t.data)):"raw"===t.encoding&&n.push(t.data):("string"!=typeof t&&(t+=""),n.push(unescape(encodeURIComponent(t))))},i.getBlob=function(t){return arguments.length||(t=null),new o(this.data.join(""),t,"raw")},i.toString=function(){return"[object BlobBuilder]"},r.slice=function(t,e,n){var i=arguments.length;return 3>i&&(n=null),new o(this.data.slice(t,i>1?e:this.data.length),n,this.encoding)},r.toString=function(){return"[object Blob]"},r.close=function(){this.size=0,delete this.data},n}(t);t.Blob=function(t,e){var o=e?e.type||"":"",i=new n;if(t)for(var r=0,a=t.length;a>r;r++)i.append(Uint8Array&&t[r]instanceof Uint8Array?t[r].buffer:t[r]);var c=i.getBlob(o);return!c.slice&&c.webkitSlice&&(c.slice=c.webkitSlice),c};var o=Object.getPrototypeOf||function(t){return t.__proto__};t.Blob.prototype=o(new t.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);
  
  function startScrape(id){
    console.log('export started');
    console.log(id);
    if(data != ""){
      var cal = ics();
      data.ASSIGNS.forEach(function( index ) {
        if(index.CONTACTID == id){
          var numb = 0;
          var numb2 = 0;
          if(index.PROJECT_START_DT){
            numb = index.PROJECT_START_DT.match(/\d/g);
            numb = numb.join("");
          } else if(index.DT){
            numb = index.DT.match(/\d/g);
            numb = numb.join("");
          }
          if(index.PROJECT_END_DT){
            numb2 = index.PROJECT_END_DT.match(/\d/g);
            numb2 = numb2.join("");
            var d2 = new Date();
            d2.setTime(numb2);
          }
          var d = new Date();
          d.setTime(numb);
          cal.addEvent((index.PROJECT_NAME||index.COMMENT||"Selligent"), index.COMMENT, "", d, (d2 || ""));
        }
      })
      cal.download("calendar");
    }
  }



  //Save the old function
  var proxied = window.XMLHttpRequest.prototype.open;
  //Overwrite with a new one
  window.XMLHttpRequest.prototype.open = function(method, path, async) {
      if (path.indexOf("GetPlanning") > -1) {
         this.addEventListener('readystatechange', function() {
              if (this.readyState === 4)
              {   
                  data = JSON.parse(this.responseText);
                  console.log(data);
                  setTimeout(function(){ 
                    $('.exportButton').remove();
                    $('.pln-contactcol').each(function( index ) {
                       var $input = $('<button class="exportButton">Export</button>');
                      $(this).append($input);
                      var name = $(this).find('div').find('.pln-name').html();
                      $(this).on('click', '.exportButton', function(){
                          console.log("clicked");
                          data.CONTACTS.forEach(function( index ) {
                            if(index.NAME == name){
                              console.log('person found');
                              startScrape(index.ID);
                            }
                          });
                      });
                    });
                    $('.pln-item').each(function( index ) {
                      if($(this).children(".pln-item-text")[0].innerHTML.indexOf("JJA") >= 0){
                        $(this).css('background-color', 'red');
                      }
                    });
                    $('.pln-item').each(function( index ) {
                      if($(this).children(".pln-item-text")[0].innerHTML.indexOf("TFA") >= 0){
                        $(this).css('background-color', 'blue');
                      }
                    });
                  }, 3000);
              }    
          }, true);
      }
      return proxied.apply(this, [].slice.call(arguments)); //Call the old function
  };
}).toString()+")()");