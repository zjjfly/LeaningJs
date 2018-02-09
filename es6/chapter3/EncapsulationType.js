/**
 * Created by zjjfly on 16/9/12.
 */
const s='Hello';
console.log(s.toUpperCase());
//一开始s是一个原始类型的字符串，当它调用toUpperCase方法的时候
//js会临时产生一个String对象，然后调用相应的方法，调用结束得到返回值后，这个对象就会被销毁。
s.rating=3;//给s加一个属性
console.log(s.rating);//undefined，说明实际上这个属性没有加在s上
