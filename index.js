"use strict";
// let numArray1:number[] = [1,2,3];
// let numArray2:Array<number> = [1,2,3];
// let strArray1:string[] = ['1','2','3'];
// let strArray2:Array<string> = ['1','2','3'];
// let boolArray1:boolean[] = [true, false];
// let boolArray2:Array<boolean> = [true, false];
// let array1:[number,number,string] = [1,2,'3'];
// let array2:[boolean,string,number] = [true,'2',3];
// const myName:string = 'Name';
// const myAge:number = 50;
// function getMyName():string {
//     return myName;
// }
// function getMyAge(prefix: string,age: number):string {
//     return prefix + age;
// }
// console.log(getMyName());
// console.log(getMyAge('My age is ',40));
// function consoleLog(str:string): void {
//     console.log(str);
// }
// let mysum: (num1:number,num2:number) => number;
// function sum(num1: number,num2: number):number {
//     return num1 + num2;
// }
// mysum = sum;
// console.log(mysum(3,2));
// consoleLog('hi');
// type User = {name: string, age:number, jobs:string[], getJobs: () => string[],logName?: () => void};
// let user: User = {
//     name: 'name',
//     age: 50,
//     jobs: ['1','2'],
//     getJobs() : string[] {
//         // console.log(this.jobs);
//         return this.jobs;
//     },
//     logName(): void {
//         console.log(this.name);
//     }
// };
// let user2: User = {
//     name: 'Max',
//     age: 30,
//     jobs: ['1'],
//     getJobs() : string[] {
//         return this.jobs;
//         // console.log(this.jobs);
//     },
// }
// user.logName();
// type User = {name:string,age:number}
// const user:User = {
//     name: 'name',
//     age: 50
// };
// function logUser(user:User): void {
//     console.log(user.name+' '+user.age);
// }
// logUser(user);
// let variable;
// variable = 1;
// variable='2';
// enum Job {
//     Frontend,
//     Backend = 50,
//     Designer,
// }
// const job: Job = Job.Backend;
// console.log(job);
// const job2: Job = Job.Frontend;
// console.log(job2);
// function throwNewError(err:string): never {
//     throw new Error(err);
// }
// let newVar;
// newVar = null;
// let myNumber: number | null = 20;
// myNumber = null;
// console.log(myNumber);
// class User {
//     // public name: string;
//     private isTeacher: boolean = true;
//     protected age: number = 30;
//     // public job: string;
//     constructor(public name: string,public job: string) {
//         // this.name = name;
//         // this.job = job;
//     }
//     public getAge():string {
//         return '' + this.age;
//     }
//     public getBool():boolean {
//         return this.isTeacher;
//     }
//     public getNameJob():string {
//         return this.name;
//     }
// public setTitle(title:boolean) {
//     console.log(this.isTeacher);
//     this.isTeacher = title;
//     console.log(this.isTeacher);
//     console.log(this.getAge());
// }
// }
// class Username extends User {
//     name: string = 'Artem';
//     constructor(job:string) {
//         super('Artem',job);
//         this.age=100;
//     } 
//     getAge(): string {
//         return 'Hello ' + this.age;
//     }
// }
// const user = new User('Artem', 'Frontend');
// const artem = new Username('Frontend');
// console.log(artem.getAge());
// // console.log(user.getBool());
// // console.log(user.getNameJob());
// // user.setTitle(false);
// abstract class Car {
//     model:string;
//     year:number=2010;
//     abstract logInfo(info:string):void
//     getCarYear(): number {
//         return this.year;
//     }
// }
// class Mercedes extends Car {
//     logInfo(info:string):void {
//         console.log(info);
//     }
// }
// const car = new Mercedes();
// console.log(car);
// car.logInfo('info');
// console.log(car.getCarYear());
// interface ILength {
//     length: number;
// }
// function getLength(variable: ILength): void {
//     console.log('Length = ', variable.length);   
// }
// getLength([1,2,3]);
// const box = {
//     name:'name',
//     length:20,
// };
// getLength(box);
// const user: IUser = {
//     name: 'Username',
//     age: 20,
//     logInfo(info) {
//         console.log(info);
//     }
// };
// interface IUser {
//     name: string;
//     age?: number;
//     logInfo(info:string):void;
// }
// interface iGetYear {
//     getYear():number;
// }
// class User implements IUser, iGetYear{
//     name:string='Username';
//     job:string='Backend';
//     newAge:number=100;
//     logInfo(info: string):void {
//         console.log(info);
//     }
//     getYear(){
//         return 1;
//     }
// }
// const newUser = new User();
// newUser.logInfo('test');
// newUser.getYear();
// console.log('\x1Bsfdf');
// function getter(data:any) {
//     return data;
// }
// console.log(getter(10).length);
// console.log(getter('dfghjk').length);
// function genericGetter<T>(data: T):T {
//     return data;
// }
// console.log(genericGetter<number>(10000).toFixed(2));
// console.log(genericGetter<string>('dfghjk').length);
// let newGenericFunction: <T>(data:T) => T = genericGetter;
// console.log(newGenericFunction<string>('wer').length);
// console.log(newGenericFunction<number>(123));
// class Multiply<T extends number | string> {
//     constructor(private a: T, private b: T) {}
//     public getResult(): number {
//         return +this.a * +this.b;
//     }
// }
// const mNum = new Multiply<number>(10,5);
// console.log('NUM is '+mNum.getResult());
// const mStr = new Multiply<string>('60','50');
// console.log('STR is '+mStr.getResult());
// function sum(obj) {
//     var max=0;
//     var resultkey;
//     for (var key in obj) {
//         if (max<obj[key]) {
//             max = obj[key];
//             resultkey = key;
//     }
// }
//     return resultkey;
// }
// function isEmpty(obj) {
//     var counter = 0;
// 	for (var key in obj) {
//   		counter++;
// 	};
//     if (counter = 0) {
//         return true;
//     } else {
//         return false;
//     }
//    	return counter;
// }
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
//   }
// function multiplyNumeric(obj) {
//     for (elem in obj) {
//         if (!isNaN(parseFloat(obj[elem])) && isFinite(obj[elem])) {
//             obj[elem] *= 2;
//         }
//     }
//     return obj;
// }
// function logger(constrFn: Function) {
//     console.log(constrFn);
// }
// function wrapper(flag:boolean):any {
//     return flag ? logger : null;
// }
// @wrapper(true)
// class User {
//     constructor(public name: string, public age:number) {
//         console.log('i am new user');   
//     }
// }
// function addShow(constrFn: Function) {
//     constrFn.prototype.showHtml = function() {
//         const pre = document.createElement('pre');
//         pre.innerHTML = JSON.stringify(this);
//         document.body.appendChild(pre);
//     }
// }
// @addShow
// class User {
//     constructor(public name: string, public age:number, public job:string) {}
// }
// let user = new User('Artem',22,'Frontend');
// console.log(user);
// (<any >user).showHtml();
// namespace Util {
//     export function isEmpty(data:any): boolean {
//         return !data;
//     }
//     export function isUndefined(data:any):boolean {
//         return typeof data === 'undefined';
//     }
//     export const PI = Math.PI;
//     export const EXP = Math.E;    
// }
// const EXP = 'test'
// console.log(Util.isEmpty(''));
// console.log(Util.isEmpty('dsfsd'));
// console.log(Util.isUndefined(undefined));
// console.log(Util.PI);
// console.log(Util.EXP);
// console.log(EXP);
//# sourceMappingURL=index.js.map