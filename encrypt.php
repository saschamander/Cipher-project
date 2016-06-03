<div class="wrapper">
    <div class="row box">
        <div class="col-lg-12">


            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Plain text
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="input-group">
                        <span class="input-group-addon">Message:</span>
                        <textarea id="encrypt_plainTxt" class="form-control"></textarea>
                    </div>  
                </div>
            </div>


        </div>
    </div>
    <div class="row box">
        <div class="col-lg-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Ceasar</h3>
                </div>
                <div class="panel-body">
                    <div>
                        <a href="https://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung" target="_blank">Wikipedia: Ceasar-Cipher</a>
                        <p>
                            Alphabet: Ascii-Character(<span class="asciiOffsetBegin"></span>) to Ascii-Character(<span class="asciiOffsetEnd"></span>)
                        </p>
                    </div>                            
                    <div class="input-group">
                        <span class="input-group-addon">'<span class="asciiOffsetBeginChar"></span>' shift to:</span>
                        <input type="text" class="form-control" id="encrypt_shift">
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon">Ceasar Cipher:</span>
                        <textarea class="form-control" id="encrypt_cipherCeaser" readonly="true"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Skytale</h3>
                </div>
                <div class="panel-body">
                    <div>
                        <a href="https://de.wikipedia.org/wiki/Skytale" target="_blank">Wikipedia: Skytale</a>                                
                    </div>  

                    <div class="btn-group" id="encrypt_method" data-toggle="buttons">
                        <label class="btn btn-default">
                            <input type="radio" class="btn-radio" value="0" id="option1">[n]-Rows
                        </label>
                        <label class="btn btn-default active">
                            <input type="radio" class="btn-radio" value="1" id="option2" checked>[n]-chars in Row
                        </label>
                    </div>
                    
                    <div class="input-group">
                        <span class="input-group-addon">[n] (1-100): </span>
                        <input type="text" class="form-control" id="encrypt_rows">
                    </div>

                    <div class="input-group">
                        <span class="input-group-addon">Skytale Cipher:</span>
                        <textarea id="encrypt_cipherSkytale" class="form-control" readonly="true"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row box">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Ceaser + Skytale</h3>
                </div>
                <div class="panel-body">
                    <div class="input-group">
                        <span class="input-group-addon">1. Ceaser<br /> 2. Skytale</span>
                        <textarea id="encrypt_cipherProduct" class="form-control" readonly="true"></textarea>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div> 