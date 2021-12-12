export const cipher = {

  encode: function (offsetValue, stringValue) {
    if (offsetValue === 'null' || stringValue.length === 0 || offsetValue === 0) {
      throw new TypeError();
    }
    let codeChar = 0;
    let stringEncoded = '';
    for (let index = 0; index < stringValue.length; index++) {

      let char = parseInt(stringValue.charCodeAt(index));

      if (char >= 65 && char <= 90) {

        codeChar = parseInt(((char - 65 + offsetValue) % 26) + 65);

        stringEncoded += String.fromCharCode(codeChar);

      } else if (char >= 97 && char <= 122) {
        codeChar = parseInt(((char - 97 + offsetValue) % 26) + 97);

        stringEncoded += String.fromCharCode(codeChar);
      } else {

        stringEncoded += String.fromCharCode(char);

      }
    }

    return stringEncoded;
  },


  decode: function (offsetValue, stringValue) {
    if (offsetValue === 'null' || stringValue.length === 0 || offsetValue === 0) {
      throw new TypeError();
    }


    let codeChar = 0;
    let stringDecoded = "";


    for (let index = 0; index < stringValue.length; index++) {


      let char = parseInt(stringValue.charCodeAt(index));
      
      if (char >= 65 && char <= 90) {

        codeChar = parseInt(((char + 65 - offsetValue) % 26) + 65);

        stringDecoded += String.fromCharCode(codeChar);
      } else if (char>= 97 && char<= 122) {
        
        codeChar = parseInt(((char + 97 + offsetValue) % 26) + 97);
        
        stringDecoded += String.fromCharCode(codeChar);
        
      } else {

        stringDecoded += String.fromCharCode(char);
      }




    }
    return stringDecoded;
  }
}

export default cipher;
