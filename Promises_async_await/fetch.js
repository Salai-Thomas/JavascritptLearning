//(PWD 2023)

fetch("https://api.covid19api.com/summary")
.then(res => res.json())

.then(data => {
 const global = data.Global
 const allCountries = data.Countries
 const myanmar = allCountries.find(c => c.Country === "Myanmar")
    console.log("Global:", global, "Myanmar:", myanmar)
  })

// fetch() Function က URL လိပ်စာအတိုင်း အချက်အလက်ကြေတွ
//  သွားယူကြေပးပါတယ်။ ဒီလိုယူတဲ့အလုပ်ကို Promise အကြေနနဲ ့ လုပ်သွားတာပါ။ ဒါကြေကာင့် တခားအလုပ်ကြေတွ
//  ရှိရင် သွားယူတဲ့အလုပ် ပြပီးကြေအာင် ကြေစာင့်စရာမလိုပါ ူး။ ကြကိုတင်ပြပီး ဆက်လုပ်သွားလို ့ ရနိုင်ပါတယ်။