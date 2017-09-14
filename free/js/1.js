
//let(変数宣言)
/*変数の再宣言が不可*/
let name = "soarflat";
console.log(name);

name = "SoarFlat";
console.log(name);

//let name = "SOARFLAT";


//const(変数宣言)
/*再宣言、再代入が不可*/
const NAME = "soarflat";
console.log(NAME);

//NAME = "SOARFLAT";




/*
if (true) {
  var a = "1";
  var b = "2";
  const c = "3";
  console.log(a);
  console.log(b);
  console.log(c);
}

//console.log(a);
//console.log(b);
//console.log(c);

*/


/*
const traffic_light = {
  blue: "go",
  yellow: "slow down",
  red: "stop",
  current: " ",
  change_light: function () {
    switch (traffic_light.current) {
      case traffic_light.blue:
        traffic_light.current = traffic_light.yellow;
        break;
      case traffic_light.yellow:
        traffic_light.current = traffic_light.red;
        break;
      case traffic_light.red:
        traffic_light.current = traffic_light.blue;
        break;
      default:
        traffic_light.current = traffic_light.blue;
        break;
    }
  }
}


traffic_light.change_light();
console.log(traffic_light.current);
traffic_light.change_light();
console.log(traffic_light.current);
traffic_light.blue = "go fast";
traffic_light.change_light();
console.log(traffic_light.current);
traffic_light.change_light();
console.log(traffic_light.current);
*/



/*関数*/
function show() {
  this.hoge = 2;
  console.log(this.hoge);
}
//関数呼び出し
//show();

//オブジェクト
let myObject = {
  //プロバティ
  value: 10,
  //メソッド
  show: function() {
    console.log(this.value);
  }
}
//メソッド呼び出し
//myObject.show();

myObject = {
  value: 3,
  show: function() {
    var self = this;
    console.log(self.value);

    function show() {
      console.log(self.value);
    }
    show();
  }
}
//メソッド呼び出し
//myObject.show();



function MyObject(value) {
  this.value = value;
  this.increment = function() {
    this.value++;
  };
}
myObject = new MyObject(100);
console.log(myObject.value);

myObject.increment();
console.log(myObject.value);


myObject = {
  value: 1,
  show: function() {
    console.log(this.value);
  }
};
var yourObject = {
  value: 3
}
//myObject.show();
//myObject.show.apply(yourObject);
//myObject.show.cell(yourObject);

//ECMScript:アロー関数
//従来
var plus = function(x, y) {
  return x + y;
}

//アロー関数
plus = (x, y) => {
  return x + y;
}
let num = plus(1, 1);


