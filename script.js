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

  ///ここめっちゃおもしろい
  order: function(starterIndex,mainIndex){　//ここでfuntion定義
      return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
      //restaurant.という意味でthis.が使われている。その中のarray　の場所を後々定義。
  }


  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);

const[x,y,z] = arr;
console.log(x,y,z);

let [main, ,secondary] = restaurant.categories; //ここに間に穴を開ける！
console.log(main,secondary);　//こうすることで、Italian, Vegetarianと表示される。

// const temp = main;　
// main = secondary; //ここで上書きをしている。
// secondary = temp;
// console.log(main,secondary); //Vegetarian Italianと表記される。ただ上をletにして

//これをdistructuringしていく。再構築。というか壊してまた作る。
[main,secondary] = [secondary,main];
//これは単純に最代入しているだけだから、constとかletとかいらない
console.log(main,secondary); //Vegetarian , italianと表記

const [starter,maindish] = restaurant.order(2,0); //restaurantのorder functionでarrayの番号を定義して、やる。
console.log(starter,maindish);
//Garlic Bread, Pizza イェーーーーい

//では配列の中に入れ子がある場合はどうなるのかああ
const nested = [2,4,[5,6]];
// const [i,,j] = nested;
// console.log(i,j); //2,(2)[5,6]出てくる。そりゃそーだよね
const[i,,[j,k]] = nested;
console.log(i,j,k); //2,5,6と出てくるよ。

//デフォルトの値。
// const [p,q,r]= [8,9]; //一個足りない
const [p=1,q=1,r=1]= [8,9]; //デフォルトの値を入れておく。
console.log(p,q,r);
