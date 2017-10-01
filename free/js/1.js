var test = "test";
let hoge = "hoge";
const hello = "hello";


function sample() {
  console.log(test);
  console.log(hoge);
  console.log(hello);
}

sample();


const fuga = 1;

hoge = 'test';
hoge = 'hoge';

const piyo = [1];
piyo.obj = {'string': "文字列"};
let func = (num1 = '', num2 = '') => {
  if (num1 === '' || num2 === '') {
    return "引数なし";
  } else {
    return num1 + num2;
  }
};

piyo.obj.func = func;

console.log(piyo.obj.func("hoge", "tste"));

class Hoge {
  constructor(param = 'default string') {
    this.param = param;
    this.string = "文字列";
    this.integer = 1;
    this.bool = true;
  }

  print(test) {
    console.log(this.string);
    console.log(this);
  }

  static create(param = 'createメソッド') {
    return new Hoge(this.param);
  }

}

const hoge_class = new Hoge('Hello World!');
const fuga_class = Hoge.create("GoodBye");

hoge_class.print("gorira");
fuga_class.print("dog");




