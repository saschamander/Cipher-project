/**
 * 
 * @param {string} text A text that shall be ciphered by the skytale method
 * @param {int} rows Integer of how many rows/cols shall be used
 * @param {int} method Either 0 or 1 for col or rows method
 * @returns {string} Returns a ciphered text
 */
function encryptSkytale(text, rows, method) {
    var result = "";

    switch (method) {
        // Row
        case 0:
            result += encryptSkytaleRows(text, rows);
            break;
            // Chars in row
        case 1:
            result += encryptSkytaleCharsInRow(text, rows);
            break;
    }

    return result;
}

/**
 * This function uses the chars in row method.
 * 
 * @param {string} text A text that shall be ciphered by the skytale method
 * @param {int} rows Integer of how many rows/cols shall be used
 * @returns {string} Returns a ciphered text
 */
// FIXME
function encryptSkytaleCharsInRow(text, rows) {
    var result = "";
    
    var array = text.split('');
    var charsInRow = Math.floor(array.length / rows);
    for (var i = 0; i < charsInRow; i++) {
        for (var j = i; true; j += charsInRow) {
            if (array[j] === undefined) {
                break;
            } else {
                result += array[j];
            }
        }
    }
     
    return result;
}

/**
 * This function uses the chars in rows skytale method. 
 * 
 * @param {string} text A text that shall be ciphered by the skytale method
 * @param {int} rows Integer of how many rows/cols shall be used
 * @returns {string} Returns a ciphered text
 */
function encryptSkytaleRows(text, rows) {
    var result = "";
    var array = text.split('');

    for (var i = 0; i < rows; i++) {
        for (var j = i; j < array.length; j += rows) {
            if (array[j] === undefined) {
                break;
            } else {
                result += array[j];
            }
        }
    }
    return result;
}

/**
 * 
 * @param {string} text A text that shall be decrypted by the skytale method
 * @param {int} rows Integer of how many rows/cols shall be used
 * @param {int} method Either 0 or 1 for col or rows method
 * @returns {string} Returns a plain text
 */
function decryptSkytale(text, rows, method) {
    var result = "";

    switch (method) {
        //COL
        case 0:
            result += decryptSkytaleRows(text, rows);
            break;
            //ROW         
        case 1:
            result += decryptSkytaleCharsInRow(text, rows);
            break;
    }

    return result;
}

/**
 * This function uses the chars in row method.
 * 
 * @param {string} text A text that shall be decrypted by the skytale method
 * @param {int} rows Integer of how many rows/cols shall be used
 * @returns {string} Returns a plain text
 */
// FIXME
function decryptSkytaleCharsInRow(text, rows) {
    var result = "";
    var decrypted = [];
    var charsInRow = Math.floor(text.length / rows);
    //console.log("####################################################");
    //console.log("Starting Decryption. \nMath.ceil(text.length("+text.length+")/ rows("+rows+")) = "+charsInRow);
    
    //Help-variable for addressing to be set char.
    var index = 0;

    for (var i = 0; i < charsInRow; i++) {
        for (var j = i; j < text.length; j += charsInRow) {
            if ((j < text.length || index < text.length)) {
                decrypted[j] = text[index];
                //console.log("Writing text[" + index + "]=\'" + text[index] + "\' to decrypted[" + j + "]. Resulting in \'" + decrypted + "\'");
                index++;
            } else {
                break;
            }
        }
    }

    result = decrypted.join("");
    return result;
}

/*
function decryptSkytaleRows(text, rows) {
    var result = "";
    
    text = text.split('');
    
    var charsInRow = Math.ceil(text.length / rows);
    var charsInLastRow = text.length % charsInRow;
    
    console.log("charsInRow: "+charsInRow);
    console.log("charsInLastRow: "+charsInLastRow);
    
    //Help-variable for addressing to be set char.
    var index = 0;

    for (var i = 0; i < rows; i++) {
        for (var j = i; j <= text.length; j += rows) {
            if (index < text.length) {
                if(charsInLastRow !== 0){
                    if(j > (text.length -charsInLastRow)){
                        j--;
                    }         
                }
                if(text[j] !== undefined){
                    
                    
                    result += text[j];
                    //console.log("Writing text[" + index + "]=\'" + text[index] + "\' to decrypted[" + j + "]. Resulting in \'" + decrypted + "\'");
                    index++;
                }else{
                    break;
                }
            } else {
                break;
            }
        }
    }

    //result = decrypted.join("");
    
    return result;
}
*/

/**
 * This function uses the chars in rows skytale method. 
 * 
 * @param {string} text A text that shall be decrypted by the skytale method
 * @param {int} rows Integer of how many rows/cols shall be used
 * @returns {string} Returns a plain text
 */
function decryptSkytaleRows(text, rows) {
    var result = "";
    var decrypted = [];

    //Help-variable for addressing to be set char.
    var index = 0;

    for (var i = 0; i < rows; i++) {
        for (var j = i; j < text.length; j += rows) {
            if ((j < text.length || index < text.length)) {
                decrypted[j] = text[index];
                index++;
            } else {
                break;
            }
        }
    }

    result = decrypted.join("");
    return result;
}

var testsequence = "Hello Bob";
var testshift = 6;
var encrypted = encryptSkytaleCharsInRow(testsequence,testshift);
console.log("\""+testsequence+"\" encrypted with method Chars-in-Row with Shift "+testshift+" is \""+encrypted+"\"");

var decrypted = decryptSkytaleCharsInRow(encrypted,testshift);
console.log("\""+encrypted+"\" decrypted with method Chars-in-Row with Shift "+testshift+" is \""+decrypted+"\"");
