var asciiOffsetBegin = 33;
var asciiOffsetEnd = 127;

var encrypt_SkytaleMethod = 1;
var decrypt_SkytaleMethod = 1;

$(function () {
    init();

    //--------------------------------------------------------------------------
    // Encrypt
    //--------------------------------------------------------------------------
    $("#encrypt_plainTxt").on("keyup", function () {
        var plainTxt = $("#encrypt_plainTxt").val().trim();
        $("#encrypt_cipherCeaser").val(getCipherTextCeaser(plainTxt));
        $("#encrypt_cipherSkytale").val(getCipherTextSkytale(plainTxt));
        $("#encrypt_cipherProduct").val(getCipherTextProduct(plainTxt));
        
    });

    $("#encrypt_shift").on("keyup", function () {
        var plainTxt = $("#encrypt_plainTxt").val().trim();
        $("#encrypt_cipherCeaser").val(getCipherTextCeaser(plainTxt));
        $("#encrypt_cipherProduct").val(getCipherTextProduct(plainTxt));
    });

    $("#encrypt_rows").on("keyup", function () {
        var plainTxt = $("#encrypt_plainTxt").val().trim();        
        $("#encrypt_cipherSkytale").val(getCipherTextSkytale(plainTxt));
        $("#encrypt_cipherProduct").val(getCipherTextProduct(plainTxt));
    });
    
    
    $("#encrypt_method .btn").on("click", function () {
        encrypt_SkytaleMethod = parseInt($(this).find(".btn-radio").attr("value"));
        var plainTxt = $("#encrypt_plainTxt").val().trim();        
        $("#encrypt_cipherSkytale").val(getCipherTextSkytale(plainTxt));
        $("#encrypt_cipherProduct").val(getCipherTextProduct(plainTxt));
    });
    
    //--------------------------------------------------------------------------
    // Decrypt
    //--------------------------------------------------------------------------
    $("#decrypt_cipherTxt").on("keyup", function () {
        var cipherTxt = $("#decrypt_cipherTxt").val().trim();
        $("#decrypt_plainCeaser").val(getPlainTextCeaser(cipherTxt));
        $("#decrypt_plainSkytale").val(getPlainTextSkytale(cipherTxt));
        $("#decrypt_plainProduct").val(getPlainTextProduct(cipherTxt));

    });


    $("#decrypt_shift").on("keyup", function () {
        var cipherTxt = $("#decrypt_cipherTxt").val().trim();
        $("#decrypt_plainCeaser").val(getPlainTextCeaser(cipherTxt));
        $("#decrypt_plainProduct").val(getPlainTextProduct(cipherTxt));
    });

    $("#decrypt_rows").on("keyup", function () {
        var cipherTxt = $("#decrypt_cipherTxt").val().trim();
        $("#decrypt_plainSkytale").val(getPlainTextSkytale(cipherTxt));
        $("#decrypt_plainProduct").val(getPlainTextProduct(cipherTxt));
    });
    
    $("#decrypt_method .btn").on("click", function () {
        decrypt_SkytaleMethod = parseInt($(this).find(".btn-radio").attr("value"));
        var cipherTxt = $("#decrypt_cipherTxt").val().trim();        
        $("#decrypt_plainSkytale").val(getPlainTextSkytale(cipherTxt));
        $("#decrypt_plainProduct").val(getPlainTextProduct(cipherTxt));
    });
});


function init() {
    $("#encrypt_plainTxt").val("");
    $("#encrypt_shift").val("");
    $("#encrypt_cipherCeaser").val("");
    $("#encrypt_rows").val("");
    $("#encrypt_cipherSkytale").val("");
    $("#encrypt_cipherProduct").val("");
 
    $("#decrypt_cipherTxt").val("");    
    $("#decrypt_shift").val("");
    $("#decrypt_plainCeaser").val("");
    $("#decrypt_rows").val("");
    $("#decrypt_plainSkytale").val("");
    $("#decrypt_plainProduct").val("");
 
    $(".asciiOffsetBegin").text(asciiOffsetBegin);
    $(".asciiOffsetBeginChar").text(String.fromCharCode(asciiOffsetBegin));    
    $(".asciiOffsetEnd").text(asciiOffsetEnd);
}


//--------------------------------------------------------------------------
// Encrypt
//--------------------------------------------------------------------------
function getCipherTextCeaser(plainTxt) {
    var result = "";

    //Get from inputfields    
    var shiftToChar = $("#encrypt_shift").val();

    //Calculate char shift
    if(shiftToChar !== undefined && shiftToChar !== ""){
        if(shiftToChar.charCodeAt(0)>=asciiOffsetBegin && shiftToChar.charCodeAt(0)<=asciiOffsetEnd){
            var shift = shiftToChar.charCodeAt(0) - asciiOffsetBegin;        
            result += encryptCeasar(plainTxt, shift);
        }
    }

    return result;
}

function getCipherTextSkytale(plainTxt) {
    var result = "";

    //Get from inputfields
    var rows = parseInt($("#encrypt_rows").val().trim());
    if(rows<=100&&rows>0){
        //Cipher
        result += encryptSkytale(plainTxt, rows, encrypt_SkytaleMethod);
    }
    return result;
}

function getCipherTextProduct(plainTxt){
    var result = plainTxt;
    //Set Product cipher
    result = getCipherTextCeaser(result);
    result = getCipherTextSkytale(result);
    return result;
}

//--------------------------------------------------------------------------
// Dencrypt
//--------------------------------------------------------------------------
function getPlainTextCeaser(cipherTxt) {
    var result = "";

    //Get from inputfields    
    var shiftToChar = $("#decrypt_shift").val().trim();
   
    //Calculate char shift
    if(shiftToChar !== undefined && shiftToChar !== ""){
        if(shiftToChar.charCodeAt(0)>=asciiOffsetBegin && shiftToChar.charCodeAt(0)<=asciiOffsetEnd){
            var shift = shiftToChar.charCodeAt(0) - asciiOffsetBegin;      
            result += decryptCeasar(cipherTxt, shift);
        }
    }

    return result;
}

function getPlainTextSkytale(cipherTxt) {
    var result = "";

    //Get from inputfields
    var rows = parseInt($("#decrypt_rows").val().trim());
    if(rows<=100&&rows>0){
        //Cipher
        result += decryptSkytale(cipherTxt, rows, decrypt_SkytaleMethod);
    }
    return result;
}


function getPlainTextProduct(cipherTxt) {
    var result = "";
    var result = cipherTxt;
    result = getPlainTextSkytale(result);
    result = getPlainTextCeaser(result);
    return result;
}