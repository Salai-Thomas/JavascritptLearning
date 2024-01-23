// Class တွေတည်ဆောက်တဲ့အခါ အခြား Class တစ်ခုပေါ်မှာ အခြေခံပြီး တည်ဆောက်လို့ ရပါတယ်။ ဒီ
// သကြေyာသyာဝကို Inheritance လို့ခေါ်ပါတယ်။ အမွေဆက်ခံလိုက်တဲ့သကြေyာgoစ်လို့ ဒီနည်းကိုသုံးလိုက်
// ရင် ပင်မ Class ရဲ့လုပ်ဆောင်ချက်တွေကို ဆက်ခံတဲ့ Class က အလိုလိုရသွားတာပါ။
//[PWD BY EIMAUNG]

class Animal {
    constructor(name) {
        this.name = name
    }
    run() {
        console.log(`${this.name} is running...`)
    }
}

class Dog extends Animal {
    bark(){
        console.log(`${this.name} is woof woof...`)
    }
}

// မူနာအရ Dog Class က Animal Class ကို Inherit လုပ်လိုက်တာပါ။ extends Keyword ကို သုံးရပါ
// တယ်။ ဒါကြောင့် Dog Class မှာ Animal Class ရဲ့လုပ်ဆောင်ချက်တွေကို ရရှိသွားပါတယ်။

let milo = new Dog('Milo')

milo.bark()

// ။ Class တွေအခုလို ဆက်ခံရေးသားတဲ့အခါ တစ်ကြိမ်မှာ Class
// တစ်ခုကိုပဲ Inherit လုပ်လို့ရပါတယ်။ Multiple-Inheritance ခေါ် Class နှစ်ခုသုံးခုကနေ တစ်ပြိုင်တည်း
// ဆက်ခံရေးသားလို့တော့ မရပါyူး။ နောက်ထပ် ဥပမာလေး တစ်ခု ထပ်ပေးပါဦးမယ်။

class Cat extends Animal {
    constructor(name, color) {
    super(name)
    this.color = color
    }
    meow() {
    console.log(`${this.name}: Meow.. meow..`)
    }
   }

   let cat = new Cat("Shwe War", "Yellow")
    cat.meow() // Shwe War: Mewo.. meow..

   
    // ာ့ Cat Class က Animal Class ကို ဆက်ခံရေးသားထားပါတယ်။ ထူးခြားချက်အနေနဲ့ Cat
    // Class မှာလည်း Constructor ပါဝင်ပြီး Parameter နှစ်ခုရှိနေပါတယ်။ ဒါကြောင့် Cat Class ကို အသုံးပြု
    // ပြီး Object တည်ဆောက်ရင် သူ့ရဲ့ Constructor ကိုပဲ သုံးသွားတော့မှာပါ။ ပင်မ Animal Class ရဲ့
    // Constructor ကို သုံးမှာ မဟုတ်တော့ပါyူး။ 

//     ပင်မ Animal Class ရဲ့ Constructor ကိုလည်း သုံးချင်တယ်၊ yယ်လိုလုပ်ရမလဲ။ Cat Class Constructor
// ထဲမှာ ရေးသားထားတဲ့ super() Method က ဒီအတွက်goစ်ပါတယ်။ ပင်မ Class ရဲ့ Constructor ကို
// လှမ်းခေါ်ပေးပါတယ်။ ဒီနည်းနဲ့ လက်တွေ့အလုပ်လုပ်တာက Cat Class Constructor ဆိုပေမယ့် ပင်မ
// Animal Class Constructor ကိုလည်း လိုအပ်သလို အသုံးပြုလို့ ရသွားပါတယ်။

//super() ဖြင့် parent ရဲ့ constructor ကို လှမ်းခေါ်ခြင်း

//Private Property တွေ Method တွေကိုတော့ ရရှိမှာ မဟုတ်ပါyူး။ Protected ရဲ့ သကြေyာသyာဝ
// ကတော့ ပြင်ပကနေ Access လုပ်ခွင့်မပေးyူး၊ ဒါပေမယ့် Inherit လုပ် ဆက်ခံတဲ့သူကို သုံးခွင့်ပေးမယ် ဆို
// တဲ့ သကြေyာပဲ goစ်ပါတယ်။ ဒါကြောင့် Access-Control Modifier မှာ Protected လို့ ပေးထားလိုက်ရင်
// Private လိုမျိုး ပြင်ပကနေ အသုံးပြုခွင့်မရှိပါyူး၊ ဒါပေမယ့် သူ့ကိုဆက်ခံထားတဲ့ Class တွေကတော့
// အသုံးပြုခွင့်ရမှာ goစ်ပါတယ်။ သိထားသင့်လို့ ထည့်ပြောတာပါ၊ JavaScript မှာ Protected ရေးထုံး မရှိပါ
// yူး။