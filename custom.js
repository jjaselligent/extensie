var timestamp = Math.round((new Date()).getTime() / 1000),
method = 'GET',
url = '/restapi/api/sync/lists',
toHash = timestamp + '-' + method + '-' +url,
hash = CryptoJS.HmacSHA256(toHash,"6E720684795A4370906E3B1BAE5B9A995AA976C53B294B9292B625DF6FB4815E"),
auth = 'hmac REST_JONAS:'+ hash +':'+ timestamp;

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
  var json = JSON.parse(this.responseText);
  json.result.forEach(function(entry) {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(entry.name);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("lists").appendChild(node);
      console.log(entry);
  });
}
});

console.log(toHash);
console.log(auth);
xhr.open("GET", 'https://aca.emsecure.net'+url,false);
xhr.setRequestHeader("Authorization", auth);
//xhr.setRequestHeader("Cache-Control", "no-cache");
//xhr.setRequestHeader('Content-Type', 'text/plain');
console.log(xhr);

xhr.send(data);