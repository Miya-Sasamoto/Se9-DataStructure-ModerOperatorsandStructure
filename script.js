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
  }
};
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
  const{menu = [], starterMenu: starter = []} = restaurant;
  console.log(menu,starter); // starter は前菜。アペタイザーだと思ったらフラ語。徹底している。
//上記コンソール表示　[] (4)Foccacia, Bruschetta,Garlic Bread,Caprese Salad となる。
//最初のところは、そもそもmenuという変数名ないし、でもそこでデフォルト値を[]空配列で設定しているため、コンソールにはこのように表示される。
　//変数を変異させる。オブジェクト編 [main,secondary] = [secondary,main];やったよね。
let a = 111;
let b = 123;
const obj = {a:23, b:25, c:14};

({a,b} = obj);//これを全体をカッコで囲むということが大事。
console.log(a,b); //23,25と表示。

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
