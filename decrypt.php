<div class="wrapper">
    <div class="row box">
        <div class="col-lg-12">


            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Cipher text
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="input-group">
                        <span class="input-group-addon">Message:</span>
                        <textarea id="decrypt_cipherTxt" class="form-control"></textarea>
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
                        <a href="https://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung" target="_blank">Wikipedia: Ceasar-Verschlüsselung</a>
                        <p>
                            Alphabet: Ascii-Character(<span class="asciiOffsetBegin"></span>) to Ascii-Character(<span class="asciiOffsetEnd"></span>)
                        </p>
                    </div>                            
                    <div class="input-group">
                        <span class="input-group-addon">'<span class="asciiOffsetBeginChar"></span>' was shifted to:</span>
                        <input type="text" class="form-control" id="decrypt_shift">
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon" id="basic-addon1">Ceasar Plain:</span>
                        <textarea class="form-control" id="decrypt_plainCeaser" readonly="true"></textarea>
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
                    <div class="btn-group" id="decrypt_method" data-toggle="buttons">
                        <label class="btn btn-default">
                            <input type="radio" class="btn-radio" value="0" id="option1">[n]-Rows
                        </label>
                        <label class="btn btn-default active">
                            <input type="radio" class="btn-radio" value="1" id="option2" checked>[n]-chars in Row
                        </label>
                    </div>
                    
                    <div class="input-group">
                        <span class="input-group-addon">[n] (1-100): </span>
                        <input type="text" class="form-control" id="decrypt_rows">
                    </div>

                    <div class="input-group">
                        <span class="input-group-addon" id="basic-addon1">Skytale Plain:</span>
                        <textarea id="decrypt_plainSkytale" class="form-control" readonly="true"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row box">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Plain (Ceaser + Skytale)</h3>
                </div>
                <div class="panel-body">
                    <div class="input-group">
                        <span class="input-group-addon">1. Skytale<br /> 2. Ceaser</span>
                        <textarea id="decrypt_plainProduct" class="form-control" readonly="true"></textarea>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div> 