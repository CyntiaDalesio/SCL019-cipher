import cipher from './cipher.js';

let buttonEncode = document.getElementById('encode');

let buttonDecode = document.getElementById('decode');

let buttonClear = document.getElementById('clear');

let buttonSend = document.getElementById('send');

let buttonBack= document.getElementById('back');
//validaciones por que si eran null no seguia el scrip
if (buttonBack != null) {
   buttonBack.addEventListener('click',back);
}

if (buttonSend != null) {
   buttonSend.addEventListener('click',send);
}
if (buttonClear != null) {
   buttonClear.addEventListener('click', clear);
}

if (buttonEncode != null) {

   buttonEncode.addEventListener('click', encode);
}
if (buttonDecode != null) { 
   buttonDecode.addEventListener('click', decode);
}


let champ = document.getElementById('champ');
if (champ != null) {


   champ.addEventListener('change', function () {

      document.body.style.transition='1s';
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
         case 'heimerdinger':
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

function back(){
// document.URL("/index.html");
   window.location.href = "/index.html"
}

function clear() {
   document.getElementById('stringOutput').value = '';
   document.getElementById('string').value = '';
   document.getElementById('offset').value = '1';
}


function send(){

if (document.getElementById('stringOutput').value =='' || document.getElementById('string').value =='') {
   
   alert('No ha escrito ningún mensaje');


} else {
   alert('Mensaje enviado con éxito!!');
   window.location.href = "/index.html"
}



   


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