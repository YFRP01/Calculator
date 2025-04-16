const but1 = document.getElementById('one')
const but2 = document.getElementById('two')
const but3 = document.getElementById('three')
const but4 = document.getElementById('four')
const but5 = document.getElementById('five')
const but6 = document.getElementById('six')
const but7 = document.getElementById('seven')
const but8 = document.getElementById('eight')
const but9 = document.getElementById('nine')
const butsum = document.getElementById('sum')
const butsub = document.getElementById('substract')
const butprod = document.getElementById('product')
const butdiv = document.getElementById('divide')
const butequel = document.getElementById('equal')
const butdot = document.getElementById('dot')
const butclear = document.getElementById('clearid')
const but0 = document.getElementById('zero')
const display = document.getElementById('display')

let temp = '';


function appendValue(val) {
    
    if (val === 'clear') {
        clear();
    }
    else if (val === 'del') {
        deleteItem();
    }
    else {
        temp += val;
        display.value = temp;
    
    }    
}

function deleteItem () {
    
    temp = temp.slice(0, -1);
    display.value = temp;
    console.log(temp);
}
function clear() {

    display.value = '';
    temp = '';

}

function result() {

    try {
        if (eval(temp)) {
            console.log(eval(temp));
            display.value = eval(temp);
        }
        else if(eval(temp) === undefined){
            display.value = 'Input is empty!';
        }
        else {
            display.value = 'Error!';
        }
    }
    catch(error) {
        display.value = 'Error!';
    }
    
    temp = '';
}