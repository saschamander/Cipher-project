Plaintext:  ThisIsAPlainText!

Ceasar-Cipher: 

    Decription:
    Shifts all characters in the plaintext to another char. 
    The algorithm converts each character of the plaintext to its ascii-code and shifts it by a given character(which is also converted to ascii).

    Example:
    Shift '!' to:   "   (shift = 33(!) - 32("))
    Cipher:         UijtJtBQmbjoUfyu"

Skytale-Cipher:
       
    Decription:
    The Skytale cipher turns the given plaintext to a matrix and converts it to a cipher-word.
    There are 2 different Methods for the Skytale-Cipher.
    Firstly the Row-Method were you can give the count of rows that shall be used. (Vertical)
    Secondly the Chars-in-Row-Method (Cols) where you can say how many chars shall be in 1 row. (Horizontal)

    Example:
        Key(n): 3
        Row-Method:
            n
            1.  T h i s I
            2.  s A P l a
            3.  i n T e x
           (4.) t !
            Row-Cipher: TsithAn!iPTsleIax
        
        Chars-In-Row:
        n   1. 2. 3.
            T  h  i
            s  I  s
            A  P  l
            a  i  n
            T  e  x
            t  !
            Chars-In-Row-Cipher: TsAaTthIPie!islnx
