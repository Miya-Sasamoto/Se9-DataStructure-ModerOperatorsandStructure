'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { //これはネストされているのか。されている。
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  ///ここめっちゃおもしろい
  order: function(starterIndex,mainIndex){　//ここでfuntion定義
      return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
      //restaurant.という意味でthis.が使われている。その中のarray　の場所を後々定義。
  },
  orderDelivery: function({starterIndex,mainIndex,time,address}){
    // console.log(obj);//{time:2230-----って感じで表示される。}
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is really delicios pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza:function(mainIngredients,...otherIngredients){
    console.log(mainIngredients);//mashrooms
    console.log(otherIngredients);//(3)tomatos,"Basil""cheese"こう表示される！
  },
};

const rest1 = {
  name : "Capri1",
  // numGuests :20,
  numGuests :0,//これだと、falseって前やったよね。　

};

const rest2 = {
  name : "Rome1",
  owner : "Miya",
}

console.log("----NOW I AM DOING----");
console.log("----OR ASSIGNMENT OPERATOR----");

// rest2.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; //rest2.numGuests = rest1.numGuests || 10;一緒の意味。
// rest2.numGuests ||= 10; //rest2.numGuests = rest2.numGuests || 10;一緒の意味。

console.log("----NULISH ASSGINMENT OPERATOR ----")
rest1.numGuests ??= 10; //これだと、rest1はnumGuests0
rest2.numGuests ??= 10;///これだと、rest2はnumGuests10
//⇨nulishだから！

// rest1.owner = rest1.owner && "<ANOUNYMOUS>"; //owner:undefinedですよ
// rest2.owner = rest 2.owner && "<ANOUNYMOUS>"; //こうすると、rest2のownerは匿名になります。
rest1.owner &&= "<ANOUNYMOUS>";
rest2.owner &&= "<ANOUNYMOUS>";

console.log(rest1); //{name:Capri1,numGuests:20}と表示
console.log(rest2); //{name:Rome1,owner:Miya, numGuests:20}と表示

console.log("----OR----");
//論理演算子にある3つの特徴。
//どんなデータ型も返せて、どんなデータ型でもいけて、短縮することもできる。
// console.log(3 || "Miya"); //この結果はただの３だけ。||の場合は、boolean値でなくてもいけることが判明。
// console.log(""|| "Miya"); //Miya(左側がfalseの結果だから)
// console.log(true || 0); //true　左側がtrueのため、普通にこのまま結果表示
// console.log(undefined || null); /// null　undefinedはfalseの値よね。
// console.log(undefined || 0 ||"" || "Hello" || 23 || null); //Hello。だってhelloが最初の真の値だから。

// restaurant.numGuests = 38; //これが入ると38になる。
// restaurant.numGuests = 0; //0の場合は反応しないんです。だって0ってfalseじゃん。
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //三項演算子を使う。
// console.log(guests1); //10。だってnumGuestsまだ定義されていないから。

const guest2 = restaurant.numGuests || 10;
console.log(guest2); //10と表示される。


//?? というのはnullish valueというとても新しい概念。nullかundefinedになる。(NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //デフォルトの値が設定されていたら、0となったけど、それをオフにしたら10と表示された。

console.log("----OR----");
// console.log("----AND----");
// console.log(0 && "Miya"); //0
// console.log(7 && "Miya");// Miyaと返す。
//
// console.log("Hello" && null && 23 && "Miya"); //null
//
// if(restaurant.orderPizza){
//   restaurant.orderPizza("mushroom" , "spinach");
// }
//
// restaurant.orderPizza && restaurant.orderPizza("mushroom" , "spinach");


const arr =[1,2, ... [3,4]];


const [a,b,...others] = [1,2,3,4,5]; ///この...hersは残りみたいな感じでまとめられる。
console.log(a,b,others); //1,2(3)[3,4,5] と表示。

const [pizza, , risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);
///上記コンソール表示　Pizza Risotto,(4)[Foccacia,Bruschetta,Garlic Bread, Caprese Salad]　スキップされた要素は含まれない。

//objects
const {sat,...weekdays} = restaurant.openingHours;
console.log(sat,weekdays); /// 土曜日のところだけまぁ普通に入れて、それ以外は(thuとfri)はweekdaysとして格納する。　　

const add = function(...numbers){
  // console.log(numbers); ///(2)[2,3],(4)[5,4,3,2],(5)[7,6,5,3,2]と表示される！
  let sum = 0;
  for (let i = 0; i<numbers.length; i++)sum += numbers[i];//最初はびっくりするけど、よくよく見るとこれはそのままです。
  console.log(sum); //5,14,23と足し算が表示される。
};
add(2,3);
add(5,4,3,2);
add(7,6,5,3,2);

const x = [23,5,7];
add(...x); ///スプレッド演算子を使えばこれで35とコンソールに表示させることができる！　

// restaurant.orderPizza("mushrooms","tomatos","Basil","cheese");
restaurant.orderPizza("mushroom");

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr); //(5)[1,2,7,8,9] そうだ。
//これをspreadオペレーターでもっと良く早く描けるようになりました。

// const newArr = [1,2,...arr];
// console.log(newArr);///(5)[1,2,7,8,9]これは初耳。
//この...はarrの配列から全ての値を取り出すという意味です。手書きで書くよりもいいね。この場合は数字が3つだから「描けるやろ！」って思っても、これが１００この値がある配列だったらどうよ。それにそこを変えたら全部変えな行かなくなる。

// console.log(...newArr); //これだと、配列じゃなくて、普通に1,2,7,8,9と表示される。

const newMenu = [...restaurant.mainMenu,"Gnocci"];
console.log(newMenu); //(4)Pizza,Pasta,Risotto,Gnocciになる。pushじゃないんだね。


//2つの配列の結合について
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu =[...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu); //７個出てくる。

const str = "Miya";
const letters = [...str,"","S"];
console.log(letters); ///M I Y A  S になる。一個一個が独立してしまった！
//このことから、配列を構築するときと、関数に値を渡すときだけ使うようにしよう。このspread オペレーター
console.log(...str); //M I Y A
console.log("J","O"); //J O 爆笑
//だからテンプレートリテラルとかはできないね。

// const ingredients = [prompt("Let\s make pasta!Ingredients 1 ?"),prompt("Let\s make pasta!Ingredients 2 ?"),prompt("Let\s make pasta!Ingredients 3 ?")]; //promptってあれ。なんか上から出てくるやつ。
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
//これで上のorderPasta関数に値が入る。
// restaurant.orderPasta(...ingredients)//このやり方の方が、上のやり方よりもわかりやすい。というか簡単。


  restaurant.orderDelivery({
    time:"22:30",
    address: "Via del sole, 21",
    mainIndex:2,
    starterIndex:2
  });//このようにしてメソッドを読んでいるのです。
///Destructuring objects
  const {name,openingHours,categories} = restaurant;
  console.log(name,openingHours,categories);
  //上記コンソール表示「Classico Italiano thu ,fri , sat, (4)[ Italian, Pizzeria,Vegetarian,organic] ってなる。データを取得するにはいい方法ですね。


  //はいそれでは、、変数名とプロパティ名を異なるものにしたいときはどうすればいいでしょうか。
  const {name: restaurantName, openingHours:hours, categories:tags} = restaurant;
  console.log(restaurantName,hours,tags);
  // 上記コンソール表示「Classico Italiano thu ,fri , sat, (4)[ Italian, Pizzeria,Vegetarian,organic] ってなる。さっきと全く一緒。便利

  //APIコールなどで、存在しないものを呼び出すこともあるかもしれないから、デフォルト値を設定指定おくと本当に便利です。
  // const{menu = [], starterMenu: starter = []} = restaurant;
  // console.log(menu,starter); // starter は前菜。アペタイザーだと思ったらフラ語。徹底している。
//上記コンソール表示　[] (4)Foccacia, Bruschetta,Garlic Bread,Caprese Salad となる。
//最初のところは、そもそもmenuという変数名ないし、でもそこでデフォルト値を[]空配列で設定しているため、コンソールにはこのように表示される。
　//変数を変異させる。オブジェクト編 [main,secondary] = [secondary,main];やったよね。
// let a = 111;
// let b = 123;
// const obj = {a:23, b:25, c:14};

// ({a,b} = obj);//これを全体をカッコで囲むということが大事。
// console.log(a,b); //23,25と表示。

//nested（入れ子）の場合。nested objects
//pt.1
// const {fri} = openingHours;
// console.log(fri); //{open:11,close:23}と表示。
//pt.2
// const{fri:{open,close},} = openingHours;
// console.log(open,close); //11 23t表示
//極端な例でpt.3
const{fri:{open:o,close:c},} = openingHours;
console.log(o,c); //11 23　名前を変えることorder

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);
//
// const[x,y,z] = arr;
// console.log(x,y,z);
//
// let [main, ,secondary] = restaurant.categories; //ここに間に穴を開ける！
// console.log(main,secondary);　//こうすることで、Italian, Vegetarianと表示される。
//
// // const temp = main;　
// // main = secondary; //ここで上書きをしている。
// // secondary = temp;
// // console.log(main,secondary); //Vegetarian Italianと表記される。ただ上をletにして
//
// //これをdistructuringしていく。再構築。というか壊してまた作る。
// [main,secondary] = [secondary,main];
// //これは単純に最代入しているだけだから、constとかletとかいらない
// console.log(main,secondary); //Vegetarian , italianと表記
//
// const [starter,maindish] = restaurant.order(2,0); //restaurantのorder functionでarrayの番号を定義して、やる。
// console.log(starter,maindish);
// //Garlic Bread, Pizza イェーーーーい
//
// //では配列の中に入れ子がある場合はどうなるのかああ
// const nested = [2,4,[5,6]];
// // const [i,,j] = nested;
// // console.log(i,j); //2,(2)[5,6]出てくる。そりゃそーだよね
// const[i,,[j,k]] = nested;
// console.log(i,j,k); //2,5,6と出てくるよ。
//
// //デフォルトの値。
// // const [p,q,r]= [8,9]; //一個足りない
// const [p=1,q=1,r=1]= [8,9]; //デフォルトの値を入れておく。
// console.log(p,q,r);
