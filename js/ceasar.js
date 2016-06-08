/**
 * 
 * @param {type} text A text that shall be ciphered by the ceasar method
 * @param {type} shift Integer of how many chars the text shall be shifted
 * @returns {String} Returns a ciphered text
 */
function encryptCeasar(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var currentCharAscii = text.charAt(i).charCodeAt(0);
        var shiftedCharAscii = currentCharAscii + shift;

        if (shiftedCharAscii > asciiOffsetEnd) {
            shiftedCharAscii = asciiOffsetBegin + (shiftedCharAscii - asciiOffsetEnd);
        }
        var shiftedChar = String.fromCharCode(shiftedCharAscii);
        result += shiftedChar;
    }
    return result;
}

/**
 * 
 * @param {string} text Cipher text that shall be decrypted
 * @param {type} shift Integer of how many chars the text was shifted
 * @returns {String} Returns a plain text
 */
function decryptCeasar(text, shift) {
    var result = "";
    shift = -(shift);    
    for (var i = 0; i < text.length; i++) {
        var currentCharAscii = text.charAt(i).charCodeAt(0);
        var shiftedCharAscii = currentCharAscii + shift;

        if (shiftedCharAscii < asciiOffsetBegin) {
            shiftedCharAscii = asciiOffsetEnd + (shiftedCharAscii - asciiOffsetBegin);
        }
        var shiftedChar = String.fromCharCode(shiftedCharAscii);
        result += shiftedChar;
    }
    return result;
}
