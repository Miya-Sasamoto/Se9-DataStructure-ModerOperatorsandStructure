'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const weekdays = ["mon","tue","wed","thu","fri","sat","sun"];
const openingHours = { //これはネストされているのか。されている。
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
   },
 };


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours : openingHours, //前はこういう書き方をしていた

  openingHours, //いちよこれで引っ張ってこれる


  ///ここめっちゃおもしろい
  order(starterIndex,mainIndex){　//ここでfuntion定義
      return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
      //restaurant.という意味でthis.が使われている。その中のarray　の場所を後々定義。
  },
  orderDelivery({starterIndex,mainIndex,time,address}){
    // console.log(obj);//{time:2230-----って感じで表示される。}
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is really delicios pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredients,...otherIngredients){
    console.log(mainIngredients);//mashrooms
    console.log(otherIngredients);//(3)tomatos,"Basil""cheese"こう表示される！
  },
};

//Work with String part3
console.log("a+verynice+string");
console.log("a+very+nice+string".split("+")); //(4) ['a', 'very', 'nice', 'string'] となる　＋で区切られた
console.log("Miya:Sasamoto".split(":")); //Miya Sasamoto

const [firstName,lastName] = "Miya Sasamoto".split(" ");

const newName =["Ms.",firstName,lastName.toUpperCase()].join(" ");
console.log(newName); //Ms. Miya SASAMOTO
//split とjoinは本当によく使えるんだby Jonas

const capitalizedName = function(name){
  const names = name.split(" "); //空白で区切る
  const namesUpper = [];　//大文字にしたやつを格納する配列を作る

  for (const n of names){ //ループ
    namesUpper.push(n[0].toUpperCase() + n.slice(1)); //配列にpushするのは、名前の一番先頭を大文字にしたやつと、それ以降をくっつけたやつ　
  }
  console.log(namesUpper.join(" "));// でそれを空白を入れてくっつける。めんどくせえ。
}

capitalizedName ("jessica and smith davis"); //Jessica And Smith Davis
capitalizedName ("miya and noel gonzalez"); //Miya And Noel Gonzalez

const message = "Go to gate 21";
console.log(message);//Go to gate 21
console.log(message.padStart(25,"+"));//++++++++++++Go to gate 21 全体で25になるように調節している
console.log("Miya".padStart(23,"*"));//*******************Miya
console.log("Miya".padStart(23,"*").padEnd(35,"%")); //*******************Miya%%%%%% padEndは後ろにつける

const maskCreditCard = function(number){
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length,"*");

}

console.log(maskCreditCard("102731569242873423"));
console.log(maskCreditCard("3456789876545678123"));

const message2 = "Bad weather ..... All departures delayed";
console.log(message2.repeat(5)); //これが5回繰り返される

const planesLine = function(n){
  console.log(`There are ${n} planes in line`);
}

planesLine(5);
planesLine(3);
planesLine(17);

// const airline = "TAP Air Portgal";
//
// console.log(airline.toLowerCase()); //全てを小文字に
// console.log(airline.toUpperCase()); //全てを大文字に
// console.log("miya".toUpperCase()); // MIYA
//
// //乗客の名前の確認
// const passenger = "jOnaS";
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower); //jonas
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); //1番目から始まる言葉を追加
// console.log(passengerCorrect); //Jonas
//
// //メールの比較
// const email = "hello@jonas.io";
// const loginemail = " Hello@Jonas.jo \n"
//
// // const lowerEmail = loginemail.toLowerCase(); //小文字にする
// // const trimmedEmail = lowerEmail.trim(); //両橋の空白を取り除いた文字列を返す
// // console.log(trimmedEmail); //hello@jonas.io
//
// //はいはいそれでは今の流れを一括でやってみましょー
// const normalizedEmail = loginemail.toLowerCase().trim(); //繋げて書くことができる！
// // console.log(normalizedEmail); //hello@jonas.io
// console.log(email === normalizedEmail); //false
// console.log(email === normalizedEmail ? "Yes it is correct" : "NOOT");
//
// //Replacing
// //£を$に変える
// const priceGB = "288,97£";
// console.log(priceGB);
// const priceUS = priceGB.replace("£" , "$").replace(",",".");
// console.log(priceUS);//288.97£
//
// const announcement = "All passenger come to bording door 23.Bordin door 23!";
// console.log(announcement);
// console.log(announcement.replace("door","gate")); //実はこれだけだと、最初のdoorしかgateにならない。二つ目のdoorはgateにならないのだ。
// console.log(announcement.replaceAll("door","gate")); //replaceAllとやると、全部変えることができる。
//
// console.log(announcement.replace(/door/g,"gate")); //これでもreplaceAllと同じように全てが痴漢される！
//
// //Booleans
// const plane = "A32neo";
// console.log(plane.includes("A22")); //false  incudes!三単現
// console.log(plane.includes("A32")); //true
// console.log(plane.startsWith("Air")); //false　starts！三単現
// console.log(plane.startsWith("A")); //true
//
// if (plane.startsWith("Airbus") && plane.endsWith("nco")){ //まじでsつけるの忘れる
//   console.log("Part of the new AirBus family!");
// }else{
//   console.log("WTF r u ?");
// }
//
// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun") ){
//     console.log("You CANNOT bring it ");
//   }else{
//     console.log("Enjoy your flights!");
//   }
// }
//
// checkBaggage("I have laptop,some Food and a pocket Knife");//You CANNOT bring it
// checkBaggage("I have Socks and Camera"); //Enjoy your flights!
// checkBaggage("Got some Snacks and a Gun for protetion"); //You CANNOT bring it


// const airline = "TAP Air Portgal";
// const plane = "A320";
//
// console.log(plane[0]); //A
// console.log(plane[1]); //3
// console.log(plane[2]); //2
// console.log("B737"[0]); //B
//
// console.log(airline.length); //15
// console.log("B737".length); //4
//
// console.log(airline.indexOf("r"));  //6 ６番目だから！
// console.log(airline.lastIndexOf("r")); //10 一番最後のrの場所
// console.log(airline.indexOf("portgal")); //-1なぜなら、Portgalと大文字ではないので、見つからないから-1
//
// console.log(airline.slice(4)); //Air Portgal 4番目から始まる言葉を抽出する。部分文字列という
// console.log(airline.slice(5)); //ir Portgalとなる
// console.log(airline.slice(4,7)); //Air となる
//
// ///⇧はハードコーディングだった。これからはlengthを知らない状態でコードを書いてみよう。indexOfとかが重要になってくる　
//
// console.log(airline.slice(0,airline.indexOf(" "))); //TAP 最初から、初めてのスペースまでを表示
// console.log(airline.slice(airline.lastIndexOf(" ") + 1 )); //Portgal　最後のスペースより後を表示
//
// console.log(airline.slice(-2)); //al　最後から２番目を表示
// console.log(airline.slice(1,-1)); // AP Air Portgal　最初の一文字を抜かす
//
// const checkMiddleseat = function(seat){
//   //BとEは真ん中の席です
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E"){
//     console.log("You got the middle meat ;(");
//   }else{
//     console.log("You gout luck one !");
//   }
// }
//
// checkMiddleseat("11B"); //You got the middle meat ;(
// checkMiddleseat("23C"); //You gout luck one !
// checkMiddleseat("10A"); //You gout luck one !
// checkMiddleseat("25E"); //You got the middle meat ;(

// ///SETS⇨重複なし
// const orderSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza"]);
//
//   console.log(orderSet); //Set(3){Pasta,Pizza,Risotto}と重複したものは表示されない。配列に似てる。反復可能
//
//   console.log(new Set("Miya"));//　M I Y Aと表示される
//
//   console.log(orderSet.size); //⇨3と表示される。lengthではないらしい。配列ではないので。何種類の料理を作るかとかわかるためにいいかもしれない。　
//   console.log(orderSet.has("Pasta")); //true
//   console.log(orderSet.has("Bread"));//含まれているか？ということ。結果はfalse
//   console.log(orderSet.has("Garlic Bread"));//false
//   orderSet.add("Garlic Bread");
//   orderSet.add("Garlic Bread");
//   console.log(orderSet); //Set(4){Pasta,Pizza,Risotto,GarlicBread}
//   console.log(orderSet.has("Garlic Bread")); //true
//   orderSet.delete("Risotto");//消している
//   console.log(orderSet);//Set(3){Pasta,Pizza,Garlic Bread}
//   // orderSet.clear();//全部消す
//   // console.log(orderSet);//(0)ゼロになった
//   //Set にはindexという概念がない。そのためorderSet[0]とかやってもundefinedになる。そもそもsetは順番関係なく重複したものを消すよね？だったら順番とか関係なくないk？
//   console.log("------");
//   for (const order of orderSet) console.log(order); //pizza pasta garlic Bread
//   //for ループだから表示形式が少し違う
//   console.log("------");
//   const staff = ["Master","Chef","Waiter","Waiter","Owner"];
//   const  staffUniqe = new Set(staff);
//   console.log(staff);//(5)"Master","Chef","Waiter","Waiter","Owner"
//   console.log(staffUniqe); //(4) "Master","Chef","Waiter",Owner" ダブりは解除される
//   //これを配列に変えてみましょう。
//   const staffUniqeArray = [...new Set(staff)];
//   console.log(staffUniqeArray); //(4)["Master","Chef","Waiter",Owner"]
//   console.log(new Set(["Master","Chef","Waiter","Waiter","Owner"]).size); //4
//   console.log(new Set("MiyaSasamoto").size); //9

// //MAPS⇨SETよりも便利
// const rest = new Map();
// rest.set("name","Italiano");
// rest.set(1,"Firenze,Italy");
// console.log(rest.set(2,"Lisboa,Poetugal"));//Map(3{'name' => 'Italiano', 1 => 'Firenze,Italy', 2 => 'Lisboa,Poetugal'})
// //Mapはどんどん積み重なっていく感じ。だから、最後だけconsole表示させてもこんな感じで全部表示される
// rest
// .set("categories",['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set("open",11)
// .set("close",23);
// console.log(rest);//Map(6)  {'name' => 'Italiano', 1 => 'Firenze,Italy', 2 => 'Lisboa,Poetugal', 'categories' => Array(4), 'open' => 11, …}
// rest
// .set(true,"We are open")
// .set(false,"we are closed");
// console.log(rest); //Map(8) {'name' => 'Italiano', 1 => 'Firenze,Italy', 2 => 'Lisboa,Poetugal', 'categories' => Array(4), 'open' => 11, …}
// console.log(rest.get("name")); //Italianoとなる
// console.log(rest.get("open")); //11 となる
// console.log(rest.get(true));//we are openとなる
//
// const time = 21;
// console.log(rest.get(time > rest.get("open")&& time < rest.get("close"))); //We are open
// const time2 = 10;
// console.log(rest.get(time2 > rest.get("open")&& time2 < rest.get("close"))); //We are closed
//
// console.log(rest.has("categories"));//true
// rest.delete(2); //2であるlisboaを消した
// console.log(rest);//Map(7)になった
// console.log(rest.size)//7
// //ちょっとsetと似ているところもあるのでは？？
// rest.set([1,2],"Test");
// console.log(rest); // Map(8) 
// console.log(rest.get([1,2]));//undefined？？
// //HEApの関係で違うように捉えられる。それを解消するためには、、
//
// const arr = [3,4];//ここで定義をして
// rest.set(arr,"Test2");//その定義したやつをここで利用して、
// console.log(rest)// Map(9) 
// console.log(rest.get(arr));//test2
// rest.set(document.querySelector("h1"),"Heading");
// console.log(rest);//Map(9) HTMLファイルのh1がここで選択される
//

//Maps : Iteration
//さっきとは違う値の入れ方
// const question = new Map([
//   ["question", "What is the best programming languese in the world"],
//   [1,"C"],
//   [2,"Java"],
//   [3,"JS"],
//   ["correct", 3],
//   [true,"You got it !"],
//   [false,"NOOO"],
// ]);
// console.log(question);//Map(7) {'question' => 'What is the best programming languese in the world', 1 => 'C', 2 => 'Java', 3 => 'JS', 'Correct Answer' => 3, …}となる
// //この書き方の方が簡単かもね
//
// console.log(Object.entries(openingHours)); //(3)Array(2),Array(2),Array(2)
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);//Map(3)"thu",,,みたいによくわからんが。
//
// //Question
// console.log(question.get("question"));
// for (const [key,value] of question){
//   if(typeof key === "number") console.log(`Answer ${key} : ${value}`); ///Answer 1:Cと感じで3つ表示される　
// }
// // const answer = Number(prompt("Your Answer"));
// // console.log(answer);
//
// // console.log(question.get(question.get("correct") === answer));
// //正解ならyou got it ! 違うならnoooとでる！
//
// //map をarrayにする
// console.log([...question]);///とやれば！
// console.log([...question.keys()]); //['question', 1, 2, 3, 'correct', true, false]
// console.log([...question.values()]);//['What is the best programming languese in the world', 'C', 'Java', 'JS', 3, 'You got it !', 'NOOO']
// const properties = Object.keys(openingHours);
// console.log(properties); //(3)[thu,fri,sat]
//
// // console.log(`We are open on ${properties.length} days`); // we are open on 3 days
// let openStr = `We are open on ${properties.length}days:`;
//
// for (const day of Object.keys(openingHours)){
//   openStr += `${day},`
// }
//   console.log(openStr); //we are open on 3 days: thu,fri,sat
//
//   const values =  Object.values(openingHours);
//   console.log(values); //3つの値が表示される。thu fri satの
//
//   const entries = Object.entries(openingHours);
//   console.log(entries); //(3)[Array(2),Array(2),Array(2)]
// // }
// for (const x of entries)console.log(x); //キーとバリューが出力
// //(2)[thu ...]みたいな！

// if(restaurant.openingHours.mon)console.log(restaurant.openingHours.mon.open); //undefined
// if(restaurant.openingHours.fri)console.log(restaurant.openingHours.fri.open); //11 設定されてるからね！

//Optional Chainingというシステムが誕生した。
//あるプロパティが存在しない場合、即座にundefinedが返されるという仕組み。
// console.log(restaurant.openingHours.mon?.open);//undefinedになる。
// console.log(restaurant.openingHours?.mon?.open); //undefined
//
// const days = ["mon","tue","wed","thu","fri","sat","sun"];
// for(const day of days){
//   //mon undefined
//   //tue undefined
//   //wed undefined
//   //thu 12
//   //fri 11
//   //sat 0
//   //sun undefined　となる！　
//
//   // console.log(day);
//   // console.log(restaurant.openingHours[day]?.open || "closed"); // ||はORダヨ！
//   // const open = restaurant.openingHours[day]?.open || "closed";
//   // console.log(`on ${day},we open at ${open}`); //テンプレートリテラル
//   //しかしこれだと0がfalsey valueということが仇になり、うまく反応しない。
//   const open = restaurant.openingHours[day]?.open ?? "closed"; //??にすると反応する nullかundefinedか
//   console.log(`on ${day},we open at ${open}`); //テンプレートリテラル
// }
//
//
// //Methods
//
// console.log(restaurant.order?.(0,1)?? "Methods does not exist");//
// //0と１で入れてるから、それがstarterIndex とmainIndexに代入されて、ここでは表示が[foccacia,pastaになる]
// console.log(restaurant.orderRisotto?.(0,1)?? "Methods does not exist");//undefined
//
//
// //Arrays
// const users = [
//     {name :"Jonas", email:"hello@jonas.com"
//     }
// ];
//
// console.log(users[0]?.name ?? "Users is empty"); //Jonas わかった？？

///for of looping
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for (const item of menu) console.log(item);
// //自動的に配列全体をループする。　
//
// for (const [i ,el] of menu.entries()){
//   console.log(`${i + 1}:${el}`);
// }
//
// console.log(menu.entries());//Array Iterator{}とでる。

//
// const rest1 = {
//   name : "Capri1",
//   // numGuests :20,
//   numGuests :0,//これだと、falseって前やったよね。　
//
// };
//
// const rest2 = {
//   name : "Rome1",
//   owner : "Miya",
// }
//
// console.log("----NOW I AM DOING----");
// console.log("----OR ASSIGNMENT OPERATOR----");
//
// // rest2.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
//
// // rest1.numGuests ||= 10; //rest2.numGuests = rest1.numGuests || 10;一緒の意味。
// // rest2.numGuests ||= 10; //rest2.numGuests = rest2.numGuests || 10;一緒の意味。
//
// console.log("----NULISH ASSGINMENT OPERATOR ----")
// rest1.numGuests ??= 10; //これだと、rest1はnumGuests0
// rest2.numGuests ??= 10;///これだと、rest2はnumGuests10
// //⇨nulishだから！
//
// // rest1.owner = rest1.owner && "<ANOUNYMOUS>"; //owner:undefinedですよ
// // rest2.owner = rest 2.owner && "<ANOUNYMOUS>"; //こうすると、rest2のownerは匿名になります。
// rest1.owner &&= "<ANOUNYMOUS>";
// rest2.owner &&= "<ANOUNYMOUS>";
//
// console.log(rest1); //{name:Capri1,numGuests:20}と表示
// console.log(rest2); //{name:Rome1,owner:Miya, numGuests:20}と表示
//
// console.log("----OR----");
// //論理演算子にある3つの特徴。
// //どんなデータ型も返せて、どんなデータ型でもいけて、短縮することもできる。
// // console.log(3 || "Miya"); //この結果はただの３だけ。||の場合は、boolean値でなくてもいけることが判明。
// // console.log(""|| "Miya"); //Miya(左側がfalseの結果だから)
// // console.log(true || 0); //true　左側がtrueのため、普通にこのまま結果表示
// // console.log(undefined || null); /// null　undefinedはfalseの値よね。
// // console.log(undefined || 0 ||"" || "Hello" || 23 || null); //Hello。だってhelloが最初の真の値だから。
//
// // restaurant.numGuests = 38; //これが入ると38になる。
// // restaurant.numGuests = 0; //0の場合は反応しないんです。だって0ってfalseじゃん。
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //三項演算子を使う。
// // console.log(guests1); //10。だってnumGuestsまだ定義されていないから。
//
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2); //10と表示される。
//
//
// //?? というのはnullish valueというとても新しい概念。nullかundefinedになる。(NOT 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); //デフォルトの値が設定されていたら、0となったけど、それをオフにしたら10と表示された。
//
// console.log("----OR----");
// // console.log("----AND----");
// // console.log(0 && "Miya"); //0
// // console.log(7 && "Miya");// Miyaと返す。
// //
// // console.log("Hello" && null && 23 && "Miya"); //null
// //
// // if(restaurant.orderPizza){
// //   restaurant.orderPizza("mushroom" , "spinach");
// // }
// //
// // restaurant.orderPizza && restaurant.orderPizza("mushroom" , "spinach");
//
//
// const arr =[1,2, ... [3,4]];
//
//
// const [a,b,...others] = [1,2,3,4,5]; ///この...hersは残りみたいな感じでまとめられる。
// console.log(a,b,others); //1,2(3)[3,4,5] と表示。
//
// const [pizza, , risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(pizza,risotto,otherFood);
// ///上記コンソール表示　Pizza Risotto,(4)[Foccacia,Bruschetta,Garlic Bread, Caprese Salad]　スキップされた要素は含まれない。
//
// //objects
// const {sat,...weekdays} = restaurant.openingHours;
// console.log(sat,weekdays); /// 土曜日のところだけまぁ普通に入れて、それ以外は(thuとfri)はweekdaysとして格納する。　　
//
// const add = function(...numbers){
//   // console.log(numbers); ///(2)[2,3],(4)[5,4,3,2],(5)[7,6,5,3,2]と表示される！
//   let sum = 0;
//   for (let i = 0; i<numbers.length; i++)sum += numbers[i];//最初はびっくりするけど、よくよく見るとこれはそのままです。
//   console.log(sum); //5,14,23と足し算が表示される。
// };
// add(2,3);
// add(5,4,3,2);
// add(7,6,5,3,2);
//
// const x = [23,5,7];
// add(...x); ///スプレッド演算子を使えばこれで35とコンソールに表示させることができる！　
//
// // restaurant.orderPizza("mushrooms","tomatos","Basil","cheese");
// restaurant.orderPizza("mushroom");
//
// // const arr = [7,8,9];
// // const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// // console.log(badNewArr); //(5)[1,2,7,8,9] そうだ。
// //これをspreadオペレーターでもっと良く早く描けるようになりました。
//
// // const newArr = [1,2,...arr];
// // console.log(newArr);///(5)[1,2,7,8,9]これは初耳。
// //この...はarrの配列から全ての値を取り出すという意味です。手書きで書くよりもいいね。この場合は数字が3つだから「描けるやろ！」って思っても、これが１００この値がある配列だったらどうよ。それにそこを変えたら全部変えな行かなくなる。
//
// // console.log(...newArr); //これだと、配列じゃなくて、普通に1,2,7,8,9と表示される。
//
// const newMenu = [...restaurant.mainMenu,"Gnocci"];
// console.log(newMenu); //(4)Pizza,Pasta,Risotto,Gnocciになる。pushじゃないんだね。
// //
//
// //2つの配列の結合について
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
//
// const menu =[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu); //７個出てくる。
//
// const str = "Miya";
// const letters = [...str,"","S"];
// console.log(letters); ///M I Y A  S になる。一個一個が独立してしまった！
// //このことから、配列を構築するときと、関数に値を渡すときだけ使うようにしよう。このspread オペレーター
// console.log(...str); //M I Y A
// console.log("J","O"); //J O 爆笑
// //だからテンプレートリテラルとかはできないね。
//
// // const ingredients = [prompt("Let\s make pasta!Ingredients 1 ?"),prompt("Let\s make pasta!Ingredients 2 ?"),prompt("Let\s make pasta!Ingredients 3 ?")]; //promptってあれ。なんか上から出てくるやつ。
// // console.log(ingredients);
//
// // restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// //これで上のorderPasta関数に値が入る。
// // restaurant.orderPasta(...ingredients)//このやり方の方が、上のやり方よりもわかりやすい。というか簡単。
//
//
//   restaurant.orderDelivery({
//     time:"22:30",
//     address: "Via del sole, 21",
//     mainIndex:2,
//     starterIndex:2
//   });//このようにしてメソッドを読んでいるのです。
// ///Destructuring objects
//   const {name,openingHours,categories} = restaurant;
//   console.log(name,openingHours,categories);
//   //上記コンソール表示「Classico Italiano thu ,fri , sat, (4)[ Italian, Pizzeria,Vegetarian,organic] ってなる。データを取得するにはいい方法ですね。
//
//
//   //はいそれでは、、変数名とプロパティ名を異なるものにしたいときはどうすればいいでしょうか。
//   const {name: restaurantName, openingHours:hours, categories:tags} = restaurant;
//   console.log(restaurantName,hours,tags);
//   // 上記コンソール表示「Classico Italiano thu ,fri , sat, (4)[ Italian, Pizzeria,Vegetarian,organic] ってなる。さっきと全く一緒。便利
//
//   //APIコールなどで、存在しないものを呼び出すこともあるかもしれないから、デフォルト値を設定指定おくと本当に便利です。
//   // const{menu = [], starterMenu: starter = []} = restaurant;
//   // console.log(menu,starter); // starter は前菜。アペタイザーだと思ったらフラ語。徹底している。
// //上記コンソール表示　[] (4)Foccacia, Bruschetta,Garlic Bread,Caprese Salad となる。
// //最初のところは、そもそもmenuという変数名ないし、でもそこでデフォルト値を[]空配列で設定しているため、コンソールにはこのように表示される。
// 　//変数を変異させる。オブジェクト編 [main,secondary] = [secondary,main];やったよね。
// // let a = 111;
// // let b = 123;
// // const obj = {a:23, b:25, c:14};
//
// // ({a,b} = obj);//これを全体をカッコで囲むということが大事。
// // console.log(a,b); //23,25と表示。
//
// //nested（入れ子）の場合。nested objects
// //pt.1
// // const {fri} = openingHours;
// // console.log(fri); //{open:11,close:23}と表示。
// //pt.2
// // const{fri:{open,close},} = openingHours;
// // console.log(open,close); //11 23t表示
// //極端な例でpt.3
// const{fri:{open:o,close:c},} = openingHours;
// console.log(o,c); //11 23　名前を変えることorder
//
// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// // console.log(a,b,c);
// //
// // const[x,y,z] = arr;
// // console.log(x,y,z);
// //
// // let [main, ,secondary] = restaurant.categories; //ここに間に穴を開ける！
// // console.log(main,secondary);　//こうすることで、Italian, Vegetarianと表示される。
// //
// // // const temp = main;　
// // // main = secondary; //ここで上書きをしている。
// // // secondary = temp;
// // // console.log(main,secondary); //Vegetarian Italianと表記される。ただ上をletにして
// //
// // //これをdistructuringしていく。再構築。というか壊してまた作る。
// // [main,secondary] = [secondary,main];
// // //これは単純に最代入しているだけだから、constとかletとかいらない
// // console.log(main,secondary); //Vegetarian , italianと表記
// //
// // const [starter,maindish] = restaurant.order(2,0); //restaurantのorder functionでarrayの番号を定義して、やる。
// // console.log(starter,maindish);
// // //Garlic Bread, Pizza イェーーーーい
// //
// // //では配列の中に入れ子がある場合はどうなるのかああ
// // const nested = [2,4,[5,6]];
// // // const [i,,j] = nested;
// // // console.log(i,j); //2,(2)[5,6]出てくる。そりゃそーだよね
// // const[i,,[j,k]] = nested;
// // console.log(i,j,k); //2,5,6と出てくるよ。
// //
// // //デフォルトの値。
// // // const [p,q,r]= [8,9]; //一個足りない
// // const [p=1,q=1,r=1]= [8,9]; //デフォルトの値を入れておく。
// // console.log(p,q,r);



// console.log("----CODING CHALLENGE #1----");
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
(プレーヤー配列の最初のプレーヤーはgkで、他のプレーヤーはfpです。バイエルン ミュンヘン (チーム 1) の場合、ゴールキーパーの名前で 1 つの変数 ('gk') を作成し、残りの 10 人のフィールド プレーヤーすべてで 1 つの配列 ('fieldPlayers') を作成します。)
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//
// //1
// const[players1,players2] = game.players;
// console.log(players1,players2);
//
// //2
// const [gk,...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);
//
// //3
// const allPlayer = [...players1,...players2];
// console.log(allPlayer);
//
// //4
// const players1Final = [...players1,"Thiago","Countinho","Perisic"];
// console.log(players1Final);
//
// //5 IDK oddsって何？
// const {odds:{team1,x:draw,team2}} = game;//drawとやれという指示があるため、デフォルト値を設定。
// console.log(team1,draw,team2);
//
//
// //6 IDK
// const printGoals = function(...players){
//   console.log(players);
//   console.log(`${players.length} goals were scored!`); //何人がゴールしたか。
// }
// // printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// printGoals(...game.scored);
//
// //7 オッズの低いチームが勝つ確率が高いらしいがわからん。
// team1 < team2 && console.log("Team1 is more likely to win");
// team1 > team2 && console.log("Team2 is more likely to win");

// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉


GOOD LUCK 😀
*/
// console.log("---CODING CHALLENGE---");
//
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//
//
// //1
// for(const [i,goals] of game.scored.entries()) //entriesはindexも教えてくれる
// console.log(`Goal ${i + 1} : ${goals}`);
//
// //2 IDK odds = オッズ
// //まず平均の計算がわからない。全部足して、それを数でわる？
// const odds = Object.values(game.odds);　
// let ave = 0;
// for (const odd of odds) ave += odd;// for ループで足していく。
// ave /= odds.length;
// console.log(ave);
//
// //3 WTF fuck off
// // console.log(game.odds);
// // console.log(`Victory ${game.team1}'s odd is ${game.odds}'`);
// for (const [team,odd] of Object.entries(game.odds)){
//   // console.log(team,odd);
//   const teamStr = team === "x" ? "draw" : `Victory ${game[team]}`; //すぐこうやってやるじゃん意味不
//   console.log(`Odds of ${teamStr} ${odd}`);
// }


///////////////////////////////////////
// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
//
// console.log("---CODING CHALLENGE #3");
// //1
// console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events)
//
// //2
// gameEvents.delete(64);
// //最初removeってかいた。
//
// //3
//
// const time = [...gameEvents.keys()].pop();
// console.log(time); //92 。一番最後のものだけ
// console.log(
//   // `An event happened, on average, every ${gameEvents.size} minutes`//あれ？１０だ。
//   `An event happened, on average, every ${time / gameEvents.size} minutes`//ゲームは90分らしい
// );
//
// // console.log(question.get("question"));
// // for (const [key,value] of question){
// //   if(typeof key === "number") console.log(`Answer ${key} : ${value}`); ///Answer 1:Cと感じで3つ表示される　
// // }
// //4
// // console.log(gameEvents);
// // for (const [key,value] of gameEvents){
// //   const
// //   console.......
// // }
//
// for (const [key,value]of gameEvents){
//   const half = key < 45 ? "FIRST" : "AFTER";
//   console.log(`[${half}HALF] ${key} : ${value}`)
// }
