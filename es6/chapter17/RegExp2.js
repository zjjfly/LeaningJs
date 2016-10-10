/**
 * Created by zjjfly on 2016/10/8.
 */
"use strict";
//分组
//推荐使用非捕获分组,因为捕获分组有性能损失
console.log("ada acs bsb".match(/\w+(?=b)/ig));//正向前瞻(?=<exp>),exp会进行匹配校验,但不会出现在匹配结果中
console.log("11da 24cs ada1".match(/\b(\d+)(?!\d+)/ig));//逆向前瞻(?!<exp>),exp会进行匹配校验,但不会出现在匹配结果中
let text = "Visit oreilly.com today!";
console.log(text.match(/[a-z]+(?:\.com|\.org|\.edu)/i));//非捕获性分组(?:<exp>),exp会进行匹配校验,会出现在匹配结果中,但不作为子匹配返回
//分组的另一个优点是可以对它们应用重复
let html = "<link rel='stylesheet' href='http://insecure.com/stuff.css'>\n" + "<link rel='stylesheet' href='https://secure.com/securestuff.css'>\n" + "<link rel='stylesheet' href='//anything.com/flexible.css'>";
console.log(html.match(/(?:https?:)?\/\/[a-z][a-z0-9-./]+[a-z0-9]+/ig));

//惰性匹配 贪婪匹配
//正则默认是采用贪婪匹配,匹配尽量多的字符
let input = "Regex pros know the difference between\n" + "<i>greedy</i> and <i>lazy</i> matching.";
console.log(input.replace(/<i>(.*)<\/i>/ig, "<strong>$1</strong>"));//$1表示第一个子匹配
//在表示重复的表达式(+,?,*,{})后加?,可以使表达式变成惰性的
console.log(input.replace(/<i>(.*?)<\/i>/ig, "<strong>$1</strong>"));

//反向引用
//正则的每一个分组都对于一个数字,从1开始.反向引用\1就表示第一个分组组匹配到的字符
const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
console.log(promo.match(/([A-Z])([A-Z])\2\1/g));
//反向引用不是很少使用,唯一能想到的场景是匹配"`"
//当一个字符串中既有双引号又有单引号时,使用``把句子包括起来
html = `<img alt='A "simple" example.'>` +
    `<img alt="Don't abuse it!">`;
console.log(html.match(/<img alt=(['"]).*?\1/g));

//替换分组
//类似反向引用 $1表示第一个分组匹配的字符
html = `<a class="nope" href="/yep">Yep</a>`;
console.log(html.replace(/<a.*?(href=(["']).*?\2).*?>/g, "<a $1>"));
html = "one two three";
//匹配宏,有时候很有用
//$`,表示在匹配项之前的所有字符
console.log(html.replace(/two/, "($`)"));//One (One ) three
//$&表示匹配项本身
console.log(html.replace(/\w+/g, "($&)"));//(one) (two) (three)
//$'表示匹配项之后的所有字符
console.log(html.replace(/two/, "($')"));//One ( three) three
//$$表示$符本身
console.log(html.replace(/two/, "($$)"));//One ($) three

//替换函数
//需求:把标签a格式化,只包含class,id,href属性 a小写
//只写一个正则很难完成,可以使用多个正则,每个正则完成特定的功能
html =
    `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
    `<A href='/foo' Class="foo">Foo</a>\n` +
    `<a href="/foo">Foo</a>\n` +
    `<a onclick="javascript:alert('foo!')" href="/foo">Foo</a>`;
function sanitizeATag(aTag) {
    const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i); //
    const attributes = parts[1].split(/\s+/);
    return "<a " + attributes
            .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
            .join(" ")
        + ">"
        + parts[2]
        + "</a>";
}
//使用替换函数,第一个参数是匹配的字符串($&),第二个到第N个是参数是匹配的分组(具体多少个由实际的分组个数决定)
//倒数第二个参数是偏移量,最后一个参数是原字符串(很少使用)
html.replace(/(href|class|id)\s{0,}=(["'])(.*?)\2.*?>/ig, function (m, g1, g2, g3, offset, s) {
    console.log(`attribute found at ${offset}. name: ${g1} value:${g3}`);
});
//使用mechanics作为替换函数
console.log(html.replace(/<a.*?<\/a>/ig, sanitizeATag));
//无论什么时候,只要你面对的问题涉及到在一个大的字符串中匹配一个小的子串,并对这个子串做一些处理,你都可以使用替换函数来完成

//锚点,主要是^和$,表示一行的开始和结束
//如果是多行,需要在后面加参数m
input = "One line\nTwo lines\nThree lines\nFour";
console.log(input.match(/^\w+/mg));
console.log(input.match(/\w+$/mg));

//单词界定匹配,使用\b和它的相反\B,\b表示单词间的界限,它们不会消费输入字符串
const inputs = ["john@doe.com",
    "john@doe.com is my email",
    "my email is john@doe.com",
    "use john@doe.com, my email",
    "my email:john@doe.com.",
];
const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
console.log(inputs.map(s=>s.replace(emailMatcher, "<a href='mailto:$&'>$&</a>")));
//单词界定在找寻特定的单词时很有用
console.log("count countdown discount recount accountable".replace(/\bcount/ig, "哈哈"));//匹配count或count开头的
console.log("count countdown discount recount accountable".replace(/\bcount\B/ig, "哈哈"));//匹配count开头但不是count的单词
console.log("count countdown discount recount accountable".replace(/\Bcount\b/ig, "哈哈"));//匹配以count结尾但不是count的单词
console.log("count countdown discount recount accountable".replace(/\Bcount\B/ig, "哈哈"));//匹配含有count的单词,但count既不是在开头也不是在结尾

//前瞻
//校验密码 要有至少一个大写数字,一个数字,一个小写字母,不能有非数字非字母的字符
function validPassword(p) {
    return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}
console.log(validPassword("adaq1fA"));

//动态拼装正则
const users = ["mary", "nick", "arthur", "sam", "yvette"];
text = "User @arthur started the backup and 15:15, " +
    "and @nick and @yvette restored it at 18:35.";
const userRegex=new RegExp(`@(?:${users.join("|")})\\b`,"g");
console.log(text.match(userRegex));