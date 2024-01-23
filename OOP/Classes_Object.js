// Class ဆိုတာ Object Template လို့ဆိုနိုင်။Object တည်ဆောက်လိုက်ရင်
// ပါဝင်ရမယ့်အချက်အလက်နဲ့ လုပ်ဆောင်ချက်တွေကို ကြိုတင်သတ်မှတ်ပေးထားနိုင်တဲ့
// နည်းလမ်းတစ်မျိုးဖြစ်ပါတယ်။ (PWD BY EI MAUNG)

class Car{
    color = "red"
    wheels = 'four'
    drive(){
        console.log('driving')
    }
}

let toyota = new Car

console.log(toyota.color)
console.log(toyota.wheels)
toyota.drive()

console.log(Car.color) //output: undefined *[class ကတိုက်ရိုက်မခေါ်နိုင် obj မှတစ်ဆင့်ပဲခေါ်နိုင်]

