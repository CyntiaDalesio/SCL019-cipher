export const cipher = {

  encode: function (offsetValue, stringValue) {
    if (offsetValue === 'null' || stringValue.length === 0 || offsetValue === 0) {
      throw new TypeError();
    }
    let codeChar = 0;
    let stringEncode = '';
    for (let index = 0; index < stringValue.length; index++) {

      let char = parseInt(stringValue.charCodeAt(index));

      if (char >= 65 && char <= 90) {

        codeChar = parseInt(((char - 65 + offsetValue) % 26) + 65);

        stringEncode += String.fromCharCode(codeChar);

      } else if (char >= 97 && char <= 122) {
        codeChar = parseInt(((char - 97 + offsetValue) % 26) + 97);

        stringEncode += String.fromCharCode(codeChar);
      } else {

        stringEncode += String.fromCharCode(char);

      }
    }

    return stringEncode;
  },


  decode: function (offsetValue, stringValue) {
    if (offsetValue === 'null' || stringValue.length === 0 || offsetValue === 0) {
      throw new TypeError();
    }


    let codeChar = 0;
    let stringDecode = "";


    for (let index = 0; index < stringValue.length; index++) {


      let char = parseInt(stringValue.charCodeAt(index));
      
      if (char >= 65 && char <= 90) {

        codeChar = parseInt(((char + 65 - offsetValue) % 26) + 65);

        stringDecode += String.fromCharCode(codeChar);
      } else if (char>= 97 && char<= 122) {
        
        codeChar = parseInt(((char + 97 + offsetValue) % 26) + 97);
        
        stringDecode += String.fromCharCode(codeChar);
        
      } else {

        stringDecode += String.fromCharCode(char);
      }




    }
    return stringDecode;
  }
}

export default cipher;
