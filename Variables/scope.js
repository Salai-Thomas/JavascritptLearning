function myfunction(){
    let localVar = 10;
     if (true){
        let blockVar = 20;  
        console.log(localVar); //Accessible
        console.log(blockVar);  //Accessible
     } 

     console.log(localVar); //Accessible
     //console.log(blockVar); // Not accessible, because it's declared inside a block
}

// myfunction();

//Scope အလုပ်လုပ်ပုံမှာ variable ကို မတူညီသော နည်းလမ်း let,var,const နဲ့ 
// ဘယ်လိုပင် ပြောင်းပြောင်း declared လုပ်လုပ် အတူတူပင်ဖြစ်သည်။

{
   var var1 ='I\'m var'
   let let1 ='I\'m let'
}

console.log(var1 + 2); //Accessible [output: I'm var2]
console.log(let1 + 2); //ReferenceError: let1 is not defined

// let is block scope variable.that can't use out of block scope.
