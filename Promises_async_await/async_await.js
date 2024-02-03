//pwd (2023)
async function add1000later() {
    let result = await add1000()
    console.log(result)
}

function add1000(){
    let result = 0

    for(let i = 0; i <= 1000;i++){
        result +=i;
    }

    return result
}

console.log("some processes")
add1000later()
console.log("more processes")

// async Keyword ပါသွားလို ့ add1000later() Function ဟာရိုးရိုး Function မဟုတ်ေတာ့ပါ ူး။ 
// ကြေစာင့်စရာမလို ဲ သူ့ ာသာလုပ်စရာရှိတာ ဆက်လုပ်မှာမို ့လို ့ ချန်ထားခဲ့လို့ရတဲ့ Functionစ်သွားပါပြပီ။ 
// အဲ့ဒီ Function ထဲမှာ add1000() Function ကို ကြေခါ်သးတဲ့အခါ await Keyword နဲ့ေခါ်သးထားတာကို သတိပုပါ။
//  ကြေစာင့ ်ရမယ့်အလုပ်က ဒီအလုပ်မို ့လို ့ await ထည့်ပြပီးလုပ်ကြေပးရတာပါ။

//Promises နဲ့ result တူ ရေးထုံးကွဲ async က ပိုပြီးနားလည်ရလွယ်သောကြောင့်
