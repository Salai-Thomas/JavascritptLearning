class Car{
    #hp = 150
    color = 'red'

    static info(){
        console.log(`Horse Power: ${this.#hp}`);
    }

}

// ိုးရိုးရေးလိုက်တဲ့ color Property ဟာ Public goစ်ပြီး ရှေ့ကနေ Hash သင်္ကေတလေး ခံရေးထားတဲ့
// #hp Property က Private goစ်သွားပါတယ်။ ဒီရေးထုံးဟာ JavaScript မှာ အခုမှစမ်းသပ်အဆင့်ပဲ ရှိပါ
// သေးတယ်။ ဒါကြောင့် ရေးထုံးအရမှန်ပါတယ်။ တစ်ချို့ Update မgoစ်တဲ့ Browser တွေမှာ စမ်းကြည့်လို့
// တော့ ရဦးမှာ မဟုတ်ပါyူး။ စမ်းကြည့်လို့မရရင် Browser ကို Update လုပ်ပြီး ပြန်စမ်းကြည့်နိုင်ပါတယ်
