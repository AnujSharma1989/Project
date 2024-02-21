// VAr let const difference
document.write('VAr let const difference scop');
//var fname='Anuj';
//var fname='Sharma';
//console.log(fname);
// Scope
let fname='Anuj global';
function display()
{
    let fname ='Anuj function';
    
    {
        let fname ='anuj block';
        console.log ("block scope",fname);
    }
    console.log("function scope", fname);
}
    console.log(fname);
    display();
    
// Variable hoisting