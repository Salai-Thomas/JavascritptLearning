// Object တည်ဆောက်စရာ မလိုပဲ Class ကနေ တိုက်ရိုက် အသုံးပြုလိုရင် static Property နဲ့
// static Method ကိုသုံး။ [PWD FROM EI MAUNG]

class Caculator{
    static PI = 3.14

    static add(x,y){
        return x + y;
    }
}

console.log(Caculator.add(5,5)); //output: 10

let CacObj = new Caculator

console.log(CacObj.PI) //output: undefined [တည်ဆောက်လိုက်တဲ့ obj ကို ယူသုံးခွင့်မပေး]

//ဒီသကြေyာသyာဝကို Access-Control Modifier လို့ခေါ်ပြီး Property တွေMethod တွေကို ဘယ်နည်း
//ဘယ်ပုံ Access လုပ် အသုံးပြုခွင့်ပြုမလဲဆိုတာကို သတ်မှတ်နိုင်တဲ့ နည်းလမ်းတွေဖြစ်ပါတယ်။

//အတွေ့များသော Access-Control Modifiedrs

// • Public [default] [can assess by obj]
// • Private [other programming] [In Js # Keyword]
// • Protected [other programming]
// • Static [can assess by class]

//* JS မှာ Static keyword တစ်ခုပဲရှိ

//Object တစ်ခုရဲ့ အသေးစိတ်အချက်အလက်တွေကို မဆိုင်သူ သိစရာမလိုဘူးး၊ ထိစရာမလိုဘူး ဆိုတဲ့သဘောတရားသည် Encapsulation ဖြစ်။ [May Be Private Access]