//方法練習
let dog = {
    name : "海尼根",
    type : "金毛",
    age : 2,

    getNmae:function(){
        //this 關鍵字，指向dog這個物件
        // console.log(this.name);
        //return 呼叫方法得到值
        return this.name
    },
    getType:function(){
        // console.log(this.type);
        return this.type
    },
    getAge:function(){ //getAge(){}
        // console.log(this.age);
        return this.age
    },

    setName:function(x){
        this.name = x
        console.log(x)
    },
    setAge(y){
        this.age = y
        console.log(y)
    },
    setType(z){
        this.type = z
        console.log(z)
    }
// 設定多個參數
// setAll(nameParm, typeParm, ageParm){
    //  this.name = nameParm
    //  this.type = typeParm
    //  this.age = ageParm
    // }
}
dog.getNmae();
dog.getType();
dog.getAge();

console.log(dog.getNmae())
console.log(dog.getType())
console.log(dog.getAge())

dog.setName("七喜");
dog.setAge(3)
dog.setType("柴柴")

//JS 的預設值是undefined
function test(){
    //this 指向瀏覽視窗
    console.log(this);
}
test();

//功德區域
let btn = document.getElementById("testbtn")
btn.addEventListener("click", function(){
    console.log("功德+1")
    alert("功德+1")
})

//一般打工時數計算
// const moneyNum = document.getElementById("moneyNum")
const hourNum = document.getElementById("hourNum")
const caculateBtn = document.getElementById("caculateBtn")
let x = 150

caculateBtn.addEventListener("click", ()=>{
    if(hourNum.value <40){
        console.log(x*0.8*parseInt(hourNum.value))
    }else{
        console.log(x*parseInt(hourNum.value))
    }
} )

//高級打工時數計算
const moneyNum1 = document.getElementById("moneyNum1")
const hourNum1 = document.getElementById("hourNum1")
const caculateBtn1 = document.getElementById("caculateBtn1")

caculateBtn1.addEventListener("click", ()=>{
    let hour = hourNum1.valueAsNumber
    let money = moneyNum1.valueAsNumber

    if(hour<40){
        console.log(money*0.8*hour)
    }else{
        console.log(money*hour)
    }
} )




