import cipher from './cipher.js';

document.getElementById("encode").onclick = encode;

document.getElementById("decode").onclick = decode;

document.getElementById("delete").onclick = clear;//funcion para borrar 



function clear(){
   document.getElementById('stringOutput').value = '';
   document.getElementById('string').value = '';

}


function encode() {


   let offsetValue = parseInt(document.getElementById("offset").value);

   let stringValue = document.getElementById("string").value;

   let stringEncoded = cipher.encode(offsetValue, stringValue);

   document.getElementById('stringOutput').value = stringEncoded;

}
function decode() {

   let offsetValue = parseInt(document.getElementById("offset").value);
   let stringValue = document.getElementById("string").value;


   let stringDecode = cipher.decode(offsetValue, stringValue);
   document.getElementById('stringOutput').value = stringDecode;

}

console.log(cipher);