<!DOCTYPE html>
<html lang="de">
    <head>
        <!-- General -->
        <title>Sascha Mander</title>
        <link href="./img/favicon.png" rel="shortcut icon" type="image/x-icon">        

        
        <!-- Fonts -->
        <link rel="stylesheet" href="./fonts/glyphicons-halflings-regular.woff" media="screen" />
        <link rel="stylesheet" href="./fonts/glyphicons-halflings-regular.ttf" media="screen" />
        <link rel="stylesheet" href="./fonts/glyphicons-halflings-regular.svg" media="screen" />
        <link rel="stylesheet" href="./fonts/glyphicons-halflings-regular.eot" media="screen" />
        <link rel="stylesheet" href="./fonts/fontawesome-webfont.woff" media="screen" />
        <link rel="stylesheet" href="./fonts/fontawesome-webfont.ttf" media="screen" />
        <link rel="stylesheet" href="./fonts/fontawesome-webfont.svg" media="screen" />
        <link rel="stylesheet" href="./fonts/fontawesome-webfont.eot" media="screen" />
        
        
        <!-- Stylesheets -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/styles.css" type="text/css" media="screen" />

        
        <!-- Scripts -->
        <script src="js/jquery.min.js" type="text/javascript"></script>        
        <script src="js/bootstrap.min.js" type="text/javascript"></script>   
        
        <!-- Implemantation of the different crypt algorithms -->
        <script src="js/ceasar.js" type="text/javascript"></script>
        <script src="js/skytale.js" type="text/javascript"></script>
        
        <!-- Controller -->
        <script src="js/script.js" type="text/javascript"></script>
    </head>
    
    <body>
        <h1 class="page-header">
            En-/Decryption: Ceaser-/Skytale-Cipher
        </h1>
        <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#encrypt">Encrypt</a></li>
            <li><a data-toggle="tab" href="#decrypt">Decrypt</a></li>
        </ul>

          <div class="tab-content">
            <div id="encrypt" class="tab-pane fade in active">
                <?php include './encrypt.php'; ?>
            </div>
            <div id="decrypt" class="tab-pane fade">
                <div class="wrapper">
                    <?php include './decrypt.php'; ?>
                </div>
            </div>
          </div>
        
    </body>
</html>