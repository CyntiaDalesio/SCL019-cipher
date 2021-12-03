export const cipher = {

  encode: function (offsetValue, stringValue) {
    if(offsetValue==='null'|| stringValue.length===0 || offsetValue===0){
      throw new TypeError();
      }
    let codeChar = 0;
    let stringEncode = '';
    for (let index = 0; index < stringValue.length;index++) {

      let char= parseInt(stringValue.charCodeAt(index));
      if(char<65 || char>90){
        throw new TypeError();
      }else{

      codeChar = parseInt(((char- 65 + offsetValue) % 26) + 65);

      stringEncode += String.fromCharCode(codeChar);

    }
  }

    return stringEncode;
  },


  decode: function (offsetValue, stringValue) {
if(offsetValue==='null'|| stringValue.length===0 || offsetValue===0){
throw new TypeError();
}


    let codeChar=0;
    let stringDecode = "";
    
  
    for (let index = 0; index < stringValue.length; index++) {


      let char= parseInt(stringValue.charCodeAt(index));
      if(char<65 || char>90){
        throw new TypeError();
      }else{

        codeChar = parseInt(((char + 65 - offsetValue) % 26) + 65);

        stringDecode += String.fromCharCode(codeChar);
      }

     


    }
    return stringDecode;
  }
}

export default cipher;
