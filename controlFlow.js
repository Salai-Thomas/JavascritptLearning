let a = 1;

while(a < 10){
    a++
    if(a == 5){
       break;       //output: 234 (5) နဲ့ညီရင် break; [loop ထဲက ထွက်]
    }
     console.log(a);
}

while(a < 10){
    a++
    if(a == 5){
       continue;       //output: 234678910 (5) နဲ့ ညီရင် contniue [loop ပြန်ပတ် အောက်ကိုဆက်မသွားပဲ]
    }
     console.log(a);
}

let b = 1
do{
    b++
    console.log(b);
}while(b < 5);          //2345  (ပထမဆုံး condition မစစ်ပဲ နဲ့အရင်လုပ်ချင်တဲ့ခါ do while ကိုသုံး)

let c = 'mg mg';

switch(c){
    case 'aye aye':
        console.log('the name is aye aye');
    case 'Mg mg':
        console.log('the name is mg mg');
    default:
        console.log('nothing!')
}

// switch သည် case sensitive ဖြစ် (အသေးအကြီးလွဲ ရင် condition false)
