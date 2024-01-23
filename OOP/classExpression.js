let car_obj = new Car //error


let Car = class {
    color = "Red"
    wheels = 4
    drive() {
    console.log("The car is driving")
    }
}

// Function တွေမှာ Hoisting/Lifting သကြေyာသyာဝရှိပေမယ့် Class တွေမှာ မရှိပါyူး။ ဒါ
// ကြောင့် Function တွေလို အရင်သုံးပြီး နောက်မှကြေညာလို့မရပါyူး။ အသုံးမပြုခင် ကြိုတင်ကြေညာ
// သတ်မှတ်ထားပေးoို့ လိုအပ်ပါတယ်။


console.log(car_obj.wheels);

