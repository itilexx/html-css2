// truthy and falsy - выражения
// falsy - выражения; false, 0 ,"",'',``,undefined,null,NaN,-0,0n
var element = !!""
console.log(element === true ? 'true' : 'false');

//метод массива - join 
var arr = [1,2,3,4,5]
var newArr = arr.join(' ')                                                     //превращает в строку 
console.log(newArr)


for(var i = 0; i < 10; i++){
    console.log(Array(i).fill("*").join(' ')) //join убрал лишние знаки //fill заполнил //array(что то) превращает в строку
}


// Filter МЕТОДЫ
var users = [
    {name:'Adam,age=34'},
    {name:'Jho,age=12'},
    {name:'Oliver,age=23'},
    {name:'Alian,age=17'},
    {name:'William,age=18'},
    {name:'Jack,age=26'},
]

var result = users.filter(user => user.name.includes('l')) //он вернет те элементы которые есть в условии
console.log(result)
var result2 = users.filter(user => user.age >= 20);
console.log(result2)

//map - МЕТОД возвархает все элементы изменненными             передается стрелочная функция
var  soms = [3000,56000,53000,700]
var dollars = soms.map(som => som / 87)
console.log(dollars)

//округлим

var result3 = dollars.map(i => i.toFixed());
console.log(result3);

//forEach
var names = ['John','Like','Me','Youy']
for(var i=0;i<names.length; i++){
    console.log (names[i])
}

names.forEach((i)=>{
    console.log(i)
})

var numbers = [1,2,3,4,5,6,7]
numbers.forEach(function(i){
    var result = i ** 2
    console.log(`${1} - ${result}`)
})
 //ЦИКЛЫ  for..of
 
 var array = [2,2,2,2,2,2,22,3,4,4,5,5,6,2,2,11,1,1,4,4,5,6,7,7,88,9,9,0,67,0,9,6]               //УДАЛЕНИЕ ДУБЛИКАТОВ
var newArray =[]
for(var number of array){
    if (newArray.includes(number)) 
    newArray.push(number)
}
console.log(array);
console.log(newArray);

var fruits =['apple','cherry','banana',]
for (var i of fruits){
    console.log(i.toUpperCase())
}
//for in