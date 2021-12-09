import cipher from './cipher.js';

// document.getElementById("encode").onclick = encode; 
let buttonEncode = document.getElementById('encode');
// document.getElementById("decode").onclick = decode;
let buttonDecode = document.getElementById('decode');
// document.getElementById("delete").onclick = clear;//funcion para borrar 
let buttonClear = document.getElementById('delete');
//validaciones 
if (buttonClear != null) {
   buttonClear.addEventListener('click', clear);
}

if (buttonEncode != null) {

   buttonEncode.addEventListener('click', encode);
}
if (buttonDecode != null) { // si era null se paraba y  no seguia
   buttonDecode.addEventListener('click', decode);
}
// buttonEncode.addEventListener('click',encode);
// buttonDecode.addEventListener('click',decode);
// buttonClear.addEventListener('click',clear);
/*improvisando para cambiar el fondo*/


let champ = document.getElementById('champ');
if (champ != null) {


   champ.addEventListener('change', function () {


      switch (champ.value) {
         case 'yummi':

            document.body.style.backgroundImage = "url('https://www.wallpaperuse.com/wallp/90-902890_m.jpg  ')";
            break;

         case 'veigar':

            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg')";
            break;
         case 'jinx':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg')";

            break;
         case 'teemo':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg')";
            break;
         case 'ashe':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg')";
            break;
         case 'amumu':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg')";
            break;
         case 'lulu':
            document.body.style.backgroundImage = "url('https://www.esportmaniacos.com/wp-content/uploads/2021/11/Lulu_0.jpg')";
            break;
         case 'morgana':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg')";
            break;
         case 'thresh':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg')";
            break;

         case 'gragas':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg')";
            break;
         case 'vi':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg')";
            break;
         case 'sona':
            document.body.style.backgroundImage = "url('https://esports.as.com/2021/07/23/league-of-legends/Sona_1485461461_725490_1440x600.jpg')";
            break;
         case 'warwick':
            document.body.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg')";
            break;
      }
   })
}


function clear() {
   document.getElementById('stringOutput').value = '';
   document.getElementById('string').value = '';
   document.getElementById('offset').value = '1';
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