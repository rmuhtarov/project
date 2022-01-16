"use strict";

function dengi(i) {
    function func1(){
        console.log(i+1);
    }

    function func2(){
        console.log(i-1);
    }

    function func3(){
        console.log(i*2);
    }

    function func4(){
        console.log(i/2);
    }

    let massiv = [func1(), func2(), func3(), func4()];

    return massiv;
}

dengi(1);