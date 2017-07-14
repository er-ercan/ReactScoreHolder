// import "./../imports/utils";
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';


Meteor.startup(() => {
 //  Players.insert({
 //   name:'Ilker',
 //   score:29
 // });
 // console.log(Players.find().fetch());
// class Person {
//   constructor(name='İsimsiz', age=0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGreeting(){
//     return `Hi ${this.name}`; //altgr + noktalı virgül tuşu ile kesme işaretleri arasına yazılıyor.bknz:``
//   }
//   getPersonDescription(){
//     return `Hi ${this.name} is ${this.age} year(s) old.`;
//   }
//
// }
//
// class Employee extends Person {
//  constructor(name, age, title){
//    super(name, age);
//    this.title = title;
//  }
//  getGreeting(){
//   if (this.title) {
//     return `Hi! I am ${this.name}. I work as a ${this.title}`;
//
//   }
//   else{
//     return super.getGreeting();//Parent olanın fonksiyonunu kullanmaya yarıyor.
//   }
//  }
//  hasJob(){
//    return !!this.title;
//  }
// }
// class Programmer extends Person {
//   constructor(name, preferredLanguage = 'assembly'){
//     super(name);
//     this.preferredLanguage = preferredLanguage;
//   }
//   getGreeting(){
//     if (this.preferredLanguage) {
//       return `Hi! I am ${this.name}. I am ${this.preferredLanguage} developer.`;
//     }
//     else {
//       return super.getGreeting();
//     }
//   }
// }
// //Programmer -> extends from Person
// //name, age, preferredLanguage defaulty tp 'assembly'
// //Override getGreeting
// //Hi! I am Andrew. I am assembly developer.
// let me = new Programmer();
// console.log(me.getGreeting());
});

// let user = {
//
//   name:'Andrew',
//   lacotion:'Ankara'
// };
// let person = {
//   ...user,
//   age:25
// };
//
// console.log(person);
