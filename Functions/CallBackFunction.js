//CallBack From MSquare
//Function တစ်ခုပြီးမှတစ်ခု run ချင်တဲ့ခါသုံး
//Asynchronous ဖြစ်တဲ့ js code တွေနဲ့တွဲသုံးလေ့ရှိ
//ပထမှ function ပြီးမှ ဒု function ကို run သင့်တဲ့ကောင်တွေမှာသုံး
//callback function သည် function တစ်ခုကို parameter ဖြင့်လက်ခံ

function Invoke(callback){
    //another async code!
    console.log('after async');
    callback()
}

function calledFunction(){
    console.log('success');
}

// Invoke(calledFunction())  ဒီလိုဆိုတစ်ခါတည်း run သလိုဖြစ်ပြီး parameter ထဲက function ကို တစ်ခါတည်းခေါ်ပြီး error တတ်
// Truly Syntax
// Invoke(calledFunction)

//Scoping Escape (My Terms)
//global scope ကကောင် က local scope ထဲက function တစ်ခုကို ယူသုံးချင်တဲ့ခါလဲ CallBack ကိုသုံးနိုင်

function Global(callback){
    console.log('global Function');

    callback()
}

function Outer(){
    console.log('this is outer');
    function Inner(){
        console.log('Inner Function')
    }
    Global(Inner)
}

Outer();