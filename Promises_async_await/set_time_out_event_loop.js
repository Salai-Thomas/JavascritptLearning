// Event Loop

console.log(1);
console.log(2);
setTimeout(()=> console.log(3),1000);
console.log(4);

//output 
// 1
// 2
// 4
// 3

//setTimeout() အတွက် Callback အ‌ေနနဲ ့ Function Expression တစ်ခုကိုက ြ ေပးခဲ့တာကိုကြေတွ့ရနိုင်ပါတယ်။
//အစီစဉ်တိုင်း ဆို 1,2 1000ms (1s) wait  output 3 and 4
//Javascript ရဲ့ eventloop သဘောကြောင့် 3 အတွက် မစောင့်တော့ပဲ 4 ကိုပဲအရင်လုပ်ပြီးမှ 3 ကိုပြန်လုပ်