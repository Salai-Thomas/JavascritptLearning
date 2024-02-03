normal();
function normal(){
    console.log('normal function');
}


let anonymousFunciton = function(){
    console.log('Anonymous Function');
}

anonymousFunciton();        //variable ထဲထည့်ရေးရတာကြောင့်ဖြစ်နိုင် declare မလုပ်ခင် normal function ကဲ့သို့မယူသုံးနိုင်

let arrorFunction = ()=> console.log('Arrow Funciton');

arrorFunction();

//function(name='salai',age=20){
//     argument မပေးရင် parameter မှ default value ကို သုံးသွားမည်။
// }
