import{_ as l,r as i,c as d,b as n,d as s,e as c,w as t,a as e,o as p}from"./app-CWLOqyUd.js";const r={},v=e(`<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>javascript</span></a></h2><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h3><ul><li>ts 是强类型,他的变量和方法都有类型的限制.但是当一个方法可能会有多个类型的返回值的时候,我们可以自己定义一个类型来表示他的返回值的类型,通常我们自己定义的这个类型,就是泛型;</li></ul><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h3><ul><li>函数及其周围状态的应用捆绑在一起构成闭包,闭包可以让内部函数访问外部函数作用域</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// 最基础的闭包</span>
<span class="line"></span>
<span class="line">function consoleName (){</span>
<span class="line">    let name = &quot;王二小&quot;;</span>
<span class="line">    return function(){</span>
<span class="line">        console.log(name);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">var outputName = consoleName();</span>
<span class="line">outputName();   // &quot;王二小&quot;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 基础闭包</span>
<span class="line"></span>
<span class="line">function addFnFactory(x){</span>
<span class="line">    return function(y){</span>
<span class="line">        return x+y;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">var addBaseOn5 = addFnFactory(5);</span>
<span class="line">var addBaseOn10 = addFnFactory(10);</span>
<span class="line">addBaseOn5(2);    // 7</span>
<span class="line">addBaseOn10(2);   // 12</span>
<span class="line"></span>
<span class="line">// 闭包使用</span>
<span class="line"></span>
<span class="line">var Counter = function(){</span>
<span class="line">    var initNumber = 0;</span>
<span class="line">    var numberChange = function(var){</span>
<span class="line">        initNumber += var;</span>
<span class="line">    }</span>
<span class="line">    return {</span>
<span class="line">        increment(){</span>
<span class="line">            numberChange(1);</span>
<span class="line">        }</span>
<span class="line">        decrement(){</span>
<span class="line">            numberChange(-1);</span>
<span class="line">        }</span>
<span class="line">        getValue(){</span>
<span class="line">            return initNumber;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">var counter1 = Counter();</span>
<span class="line">var counter2 = Counter();</span>
<span class="line">counter1.increment();</span>
<span class="line">counter1.increment();</span>
<span class="line">counter1.decrement();</span>
<span class="line">counter1.getValue();</span>
<span class="line">counter2.getValue();</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this-的指向问题" tabindex="-1"><a class="header-anchor" href="#this-的指向问题"><span>this 的指向问题</span></a></h3><h4 id="全局环境下" tabindex="-1"><a class="header-anchor" href="#全局环境下"><span>全局环境下</span></a></h4><ul><li>this 指向全局对象，即浏览器中指向 window，node 中指向 global</li></ul><h4 id="函数环境下" tabindex="-1"><a class="header-anchor" href="#函数环境下"><span>函数环境下</span></a></h4>`,10),u=n("li",null,[n("p",null,"函数内部，this 的取值范围取决于函数被调用的方式")],-1),m=n("li",null,[n("p",null,"简单调用，如果 this 值不是由调用设置的，则指向全局对象，严格模式下为 undefined；")],-1),o=n("li",null,[n("p",null,"在箭头函数中，this 与封闭词法环境的 this 保持一致。在全局代码中，它将被设置为全局对象。")],-1),b=n("li",null,[n("p",null,"当函数作为对象里的方法被调用时，它们的 this 是调用该函数的对象。")],-1),h=e(`<h3 id="let、var、const-的区别" tabindex="-1"><a class="header-anchor" href="#let、var、const-的区别"><span>let、var、const 的区别</span></a></h3><ul><li>var 没有块级作用域，支持变量提升。</li><li>let 有块级作用域，不支持变量提升。不允许重复声明，暂存性死区。不能通过 window.变量名进行访问.</li><li>const 有块级作用域，不支持变量提升，不允许重复声明，暂存性死区。声明一个变量一旦声明就不能改变，改变报错。</li></ul><h3 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升"><span>变量提升</span></a></h3><p><em><strong><span style="color:#F56C6C;">作用域就是程序中定义变量的区域，该位置决定了变量的生命周期。通俗理解，作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期。</span></strong></em></p><ul><li>变量提升是指在 JavaScript 代码执行过程中，JavaScript 引擎把变量的声明部分和函数的声明部分提升到代码开头的行为。变量被提升后，会给变量设置默认值为 undefined。</li><li>使用 var 声明变量,不管变量写在哪里,都会被提前到作用域的顶端,全局变量会被提升到全局作用域的顶端,函数内部的变量会被提升到函数作用域的顶端;</li><li>使用变量形式声明函数时，和普通的变量一样会存在提升的现象，而函数声明式会提升到作用域最前边，并且将声明内容一起提升到最上边。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">fn()</span>
<span class="line">var fn = function () {</span>
<span class="line"> console.log(1)</span>
<span class="line">}</span>
<span class="line">// 输出结果：Uncaught TypeError: fn is not a function</span>
<span class="line"></span>
<span class="line">foo()</span>
<span class="line">function foo () {</span>
<span class="line"> console.log(2)</span>
<span class="line">}</span>
<span class="line">// 输出结果：2</span>
<span class="line"></span>
<span class="line">// 使用变量形式声明fn并在其前面执行时，会报错fn不是一个函数，因为此时fn只是一个变量，还没有赋值为一个函数，所以是不能执行fn方法的。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://zhuanlan.zhihu.com/p/438563024" target="_blank" rel="noopener noreferrer">参考文章</a></li></ul><h3 id="js-的基本数据类型" tabindex="-1"><a class="header-anchor" href="#js-的基本数据类型"><span>js 的基本数据类型</span></a></h3><ul><li>ECMAScript 标准定义了八种数据类型，分别是 String，Number，Boolean，Null，Undefined，Bigint，Symbol 和 Object. 前七个是原始类型,Object 是引用类型.</li><li>Symbol 类型是全局唯一的并且是不可修改的, 并且也可以用来作为 Object 的 key 的值</li></ul><h3 id="fetch-api" tabindex="-1"><a class="header-anchor" href="#fetch-api"><span>Fetch Api</span></a></h3><h4 id="fetch-包含了-fetch-方法-用于获取资源。" tabindex="-1"><a class="header-anchor" href="#fetch-包含了-fetch-方法-用于获取资源。"><span><code>fetch()</code> 包含了 fetch() 方法，用于获取资源。</span></a></h4><h4 id="headers-表示响应-请求的标头信息-允许你查询它们-或者针对不同的结果做不同的操作。" tabindex="-1"><a class="header-anchor" href="#headers-表示响应-请求的标头信息-允许你查询它们-或者针对不同的结果做不同的操作。"><span><code>Headers</code> 表示响应/请求的标头信息，允许你查询它们，或者针对不同的结果做不同的操作。</span></a></h4><h4 id="request-相当于一个资源请求。" tabindex="-1"><a class="header-anchor" href="#request-相当于一个资源请求。"><span><code>Request</code> 相当于一个资源请求。</span></a></h4><h4 id="response-相当于请求的响应" tabindex="-1"><a class="header-anchor" href="#response-相当于请求的响应"><span><code>Response</code> 相当于请求的响应</span></a></h4><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">fetch(input, init)</span>
<span class="line">// input: 一个字符串或一个Request对象</span>
<span class="line">// init: 一个对象,包含的配置项有 method / headers / body / mode / credentials 等</span>
<span class="line"></span>
<span class="line">// 返回值: 一个 Promise，resolve 时回传 Response 对象。</span>
<span class="line"></span>
<span class="line">// Request 和 Response 也有很多配置项和方法,使用时直接new就可以</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特点-基于-promise-不需要依赖第三方库-就可以优雅地使用-ajax" tabindex="-1"><a class="header-anchor" href="#特点-基于-promise-不需要依赖第三方库-就可以优雅地使用-ajax"><span>特点: 基于 Promise,不需要依赖第三方库，就可以优雅地使用 AJAX</span></a></h4><h3 id="立即执行函数" tabindex="-1"><a class="header-anchor" href="#立即执行函数"><span>立即执行函数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">(function(){alert(‘21’)})()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用:</span></a></h4><ul><li>创建一个独立的作用域。</li><li>这个作用域里面的变量，外面访问不到（即避免「变量污染」）</li></ul><h3 id="堆和栈" tabindex="-1"><a class="header-anchor" href="#堆和栈"><span>堆和栈</span></a></h3><ul><li>基本类型：基本类型在内存中分别占有固定大小的空间，他们的值保存在栈中，我们通过按值来访问的</li><li>引用类型: 引用类型指的是那些保存在堆内存中的对象，值的大小不固定。栈内存中存放地址，地址指向堆内存中的对象，是按引用访问的</li><li>栈(stack): 用于存放临时变量的一片内存块,后进先出;一般用于存储基本数据类型(string,boolean,number,undefined,null,bigint,symbol),特点是:</li></ul><ol><li>基本数据类型占用空间小，操作简单，直接存储值本身。</li><li>线性有序存储，容量小，系统分配效率高。</li><li>当前执行环境结束就会被销毁被垃圾回收制回收。</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">let a = 20;</span>
<span class="line">let b = a;</span>
<span class="line">b = 30;</span>
<span class="line">console.log(a); // 20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>堆(heap): 一种经过排序的树形数据结构，每个结点都有一个值。堆的存取是随意。一般用于存储 Object,Array,Function 等出了基本数据类型的引用类型数据,特点是:</li></ul><ol><li>引用数据类型占据空间大、大小不固定。</li><li>引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体，因此效率较低。</li><li>只有当指向堆内存的所有指针都被销毁后才能被回收机制回收。</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">let m = { a: 10, b: 20 };</span>
<span class="line">let n = m;</span>
<span class="line">n.a = 16;</span>
<span class="line">console.log(m.a) // 16</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>深浅拷贝问题:</li><li>浅拷贝: 浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。</li><li>深拷贝: 深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。 深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// 数组深拷贝,使用多层嵌套循环复制值</span>
<span class="line">function typeIs(obj){</span>
<span class="line">  let typeString = typeof obj;</span>
<span class="line">  if(typeof obj !== &#39;object&#39;){</span>
<span class="line">    return typeof obj;</span>
<span class="line">  }else{</span>
<span class="line">    if(obj === null){</span>
<span class="line">      return &#39;null&#39;;</span>
<span class="line">    } else if(obj instanceof Date){// 时间类型</span>
<span class="line">      return &#39;date&#39;;</span>
<span class="line">    }else if(obj instanceof RegExp){</span>
<span class="line">      return &#39;regexp&#39;;</span>
<span class="line">    }else if(Array.isArray(obj)){</span>
<span class="line">      return &#39;array&#39;;</span>
<span class="line">    }else{</span>
<span class="line">      return &#39;object&#39;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">functon clone(obj){</span>
<span class="line">  // 判断类型</span>
<span class="line">  if(typeIs(obj) === &#39;array&#39;){</span>
<span class="line">    let result = []</span>
<span class="line">    obj.forEach(item=&gt;{</span>
<span class="line">      if((typeIs(obj) === &#39;object&#39; || typeIs(obj) === &#39;array&#39;)){</span>
<span class="line">        result.push(clone(item))</span>
<span class="line">      }else{</span>
<span class="line">        result.push(item)</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">    return result</span>
<span class="line">  } else if (typeIs(obj) === &#39;object&#39;){</span>
<span class="line">    let result = {}</span>
<span class="line">    Object.keys(obj).forEach(item=&gt;{</span>
<span class="line">      if((typeIs(obj) === &#39;object&#39; || typeIs(obj) === &#39;array&#39;)){</span>
<span class="line">        result[item] = clone(obj[item])</span>
<span class="line">      }else{</span>
<span class="line">        result[item] = obj[item]</span>
<span class="line">      }</span>
<span class="line">    })</span>
<span class="line">    return result</span>
<span class="line">  } else{</span>
<span class="line">    return obj;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 独享深拷贝,可以直接使用JSON.parse(JSON.stringify()),但是这种方法处理不了RegExp,Date,null</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行机制-事件循环-任务-队列" tabindex="-1"><a class="header-anchor" href="#执行机制-事件循环-任务-队列"><span>执行机制/事件循环/任务/队列</span></a></h3><ul><li>执行机制: javascript 是单线程语言,从前到后一行一行一次执行,报错则停止执行,先执行同步代码在执行异步代码;首先任务分为同步任务和异步任务,同步任务直接进入主线程进行排队,异步任务进入任务队列进行排队;同步任务是在主线程的执行栈中执行的,只有主线程的执行栈被清空的时候,才会执行任务队列中的任务;</li><li>任务队列: 是一个先进先出的数据结构，排在前面的事件，优先被主线程读取。是一个事件的队列（也可以理解成消息的队列），IO 设备完成一项任务，就在&quot;任务队列&quot;中添加一个事件，表示相关的异步任务可以进入&quot;执行栈&quot;了。除了 IO 设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入&quot;任务队列”，等待主线程读取。</li><li>宏任务微任务和事件循环: 异步任务分为宏任务和微任务;宏任务进入宏任务队列进行排队,微任务进入微任务队列进行排队;宏任务队列可以有多个,微任务队列只有一个;当一个宏任务队列执行完后,会检查微任务队列中是否有可执行的微任务,如有则先依次执行所有微任务,如无则继续执行下一个宏任务队列;</li><li>常见宏任务（宿主发起）: setTimeout、setInterval、script、UI 交互、I/O、postMessage</li><li>常见微任务(JS 引擎发起)：Promise().then(), Promise.nextTick()</li></ul><h3 id="简易版的-vue-双向绑定" tabindex="-1"><a class="header-anchor" href="#简易版的-vue-双向绑定"><span>简易版的 VUE 双向绑定</span></a></h3><ul><li>html 代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en-US&quot;&gt;</span>
<span class="line"></span>
<span class="line">&lt;head&gt;</span>
<span class="line">  &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;&gt;</span>
<span class="line">  &lt;title&gt;VUE2 Demo&lt;/title&gt;</span>
<span class="line">  &lt;meta name=&quot;generator&quot; content=&quot;VuePress 1.8.2&quot;&gt;</span>
<span class="line"></span>
<span class="line">  &lt;meta name=&quot;description&quot; content=&quot;notes of jeffrey&quot;&gt;</span>
<span class="line"></span>
<span class="line">&lt;/head&gt;</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;div id=&quot;app&quot;&gt;&lt;input type=&quot;text&quot; v-model=&quot;text&quot; /&gt;{{text}}&lt;/div&gt;</span>
<span class="line">  &lt;script src=&quot;./vue.js&quot; defer&gt;&lt;/script&gt;</span>
<span class="line">  &lt;script src=&quot;./index.js&quot; defer&gt;&lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>index.js 代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">var instance = new Vue({</span>
<span class="line">  el: &quot;app&quot;,</span>
<span class="line">  data: {</span>
<span class="line">    text: &quot;123&quot;</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>vue 代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">function Dep(){</span>
<span class="line">  this.subs = []</span>
<span class="line">}</span>
<span class="line">Dep.prototype = {</span>
<span class="line">  addSubs(sub){</span>
<span class="line">    this.subs.push(sub)</span>
<span class="line">  },</span>
<span class="line">  notify(){</span>
<span class="line">    this.subs.forEach(item=&gt;{</span>
<span class="line">      item.update()</span>
<span class="line">    })</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">function Watcher(instance, node, name){</span>
<span class="line">  Dep.target  = this</span>
<span class="line">  this.vm = instance</span>
<span class="line">  this.node = node</span>
<span class="line">  this.name = name</span>
<span class="line">  this.update()</span>
<span class="line">  Dep.target = null</span>
<span class="line">}</span>
<span class="line">Watcher.prototype = {</span>
<span class="line">  update(){</span>
<span class="line">    this.get()</span>
<span class="line">    if (this.node.nodeType === 1) {</span>
<span class="line">      this.node.value = this.value</span>
<span class="line">    }</span>
<span class="line">    if (this.node.nodeType === 3) {</span>
<span class="line">      this.node.nodeValue = this.value</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  get(){</span>
<span class="line">    this.value = this.vm[this.name]</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">function defineReactive(instance, key, value){</span>
<span class="line">  let dep = new Dep()</span>
<span class="line">  Object.defineProperty(instance, key, {</span>
<span class="line">    get: function(){</span>
<span class="line">      if (Dep.target) {</span>
<span class="line">        dep.addSubs(Dep.target)</span>
<span class="line">      }</span>
<span class="line">      return value</span>
<span class="line">    },</span>
<span class="line">    set: function(val){</span>
<span class="line">      if (val === value) {</span>
<span class="line">        return</span>
<span class="line">      }</span>
<span class="line">      value = val</span>
<span class="line">      dep.notify()</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">function observe(obj, instance){</span>
<span class="line">  for (let key of Object.keys(obj)) {</span>
<span class="line">    defineReactive(instance, key, obj[key])</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">function compile(dom, instance){</span>
<span class="line">  let reg = /\\{\\{(.*)\\}\\}/</span>
<span class="line">  if (dom.nodeType === 1) {</span>
<span class="line">    let attr = dom.attributes;</span>
<span class="line">    for (let i = 0; i &lt; attr.length; i++) {</span>
<span class="line">      if (attr[i].nodeName === &#39;v-model&#39;) {</span>
<span class="line">        let name = attr[i].nodeValue</span>
<span class="line">        dom.addEventListener(&quot;input&quot;, function(e){</span>
<span class="line">          instance[name] = e.target.value</span>
<span class="line">        })</span>
<span class="line">        dom.value = instance[name]</span>
<span class="line">        new Watcher(instance, dom, name)</span>
<span class="line">        dom.removeAttribute(&#39;v-model&#39;)</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  if (dom.nodeType === 3) {</span>
<span class="line">    if (reg.test(dom.nodeValue)) {</span>
<span class="line">      let name = RegExp.$1</span>
<span class="line">      name = name.trim()</span>
<span class="line">      dom.nodeValue = instance[name]</span>
<span class="line">      new Watcher(instance, dom, name)</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">function nodeToFragment(dom, instance){</span>
<span class="line">  let fragment = document.createDocumentFragment()</span>
<span class="line">  let child;</span>
<span class="line">  while(child = dom.firstChild){</span>
<span class="line">    compile(child, instance)</span>
<span class="line">    fragment.appendChild(child)</span>
<span class="line">  }</span>
<span class="line">  return fragment</span>
<span class="line">}</span>
<span class="line">function Vue(options){</span>
<span class="line">  this.data = options.data</span>
<span class="line">  this.el = options.el</span>
<span class="line">  observe(this.data, this)</span>
<span class="line">  let dom = nodeToFragment(document.getElementById(this.el),this)</span>
<span class="line">  document.getElementById(this.el).appendChild(dom)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>git</span></a></h2><h3 id="常见工作流的形式" tabindex="-1"><a class="header-anchor" href="#常见工作流的形式"><span>常见工作流的形式</span></a></h3><p>集中式工作流：只有 master 分支</p><p>功能分支工作流：master 和功能分支，代码直接 push 进 master</p><p>Git Flow 工作流：大型项目必备</p><ul><li>master 储存正式发布版本历史，dev 是功能集成分支，方便 master 分支每个提交都打 TAG</li><li>功能分支以 dev 为父分支，代码 push 到 dev，不直接推到 master</li></ul><p>Forking 工作流: Forking 工作流要先有一个公开的正式仓库存储在服务器上。但一个新的开发者想要在项目上工作时，不是直接从正式仓库克隆，而是 fork 正式项目在服务器上创建一个拷贝</p><p>Pull Requests 工作流: 先创建分支 branch，在此分支上完成功能之后，经过严格测试，再 pull request，审核代码人员 merged，同意之后再将分支代码合并入 master</p><p>Github Flow 工作流和 Gitlab Flow 工作流本质上也是 Pull Request 工作流</p><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>css</span></a></h2><h3 id="css-的重绘和回流" tabindex="-1"><a class="header-anchor" href="#css-的重绘和回流"><span>css 的重绘和回流</span></a></h3><ul><li>重绘：当节点需要更改外观而不会影响布局。不影响元素周围或内部布局的属性，将只会引起浏览器的重绘;</li><li>回流：DOM 结构的修改引发或 DOM 几何尺寸变化的时候，发生回流。需重新计算渲染树，重新渲染;</li><li>常见的几何属性有 width、height、padding、margin、left、top、border 或者是 DOM 节点发生增减移动。</li><li>减少重绘和回流的办法:</li></ul><ol><li>使用 css3 新增属性：translate 替代 top 等方向值。</li><li>避免频繁使用 style，而是采用 class。</li></ol><h3 id="为什么不建议将-font-size-设置为-12px-以下" tabindex="-1"><a class="header-anchor" href="#为什么不建议将-font-size-设置为-12px-以下"><span>为什么不建议将 font-size 设置为 12px 以下？</span></a></h3><h4 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h4><ol><li>font-size 有一个最小值 12px（不同操作系统、不同语言可能限制不一样），低于 12px 的，一律按 12px 显示。理由是 Chrome 认为低于 12px 对人类是不友好的。</li><li>但是允许你把 font-size 设置为 0.</li><li>这个 12px 的限制用户是可以自行调整的，进入 chrome://settings/fonts 设置，滚动到最下方你就可以调整 12px 为其他值。</li></ol><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h4><ol><li>Chrome 29 版本之前，你可以使用 <code>-webkit-text-size-adjust: none;</code> 来解除这个限制。29 版本后，就不能这样做了。</li><li>你可以先设置 12px，然后使用 transform: scale(0.833333) 将元素缩小，效果跟 10px 很接近。不过要注意的是，transform: scale 出了缩小 font-size，也会缩小其他一些属性，需要多测试。</li></ol><h3 id="水平垂直同时居中的方式" tabindex="-1"><a class="header-anchor" href="#水平垂直同时居中的方式"><span>水平垂直同时居中的方式</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// 方式一: 绝对定位</span>
<span class="line">&lt;div class=&quot;father&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;son&quot;&gt;</span>
<span class="line">    123123</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">.father {</span>
<span class="line">  position: relative;</span>
<span class="line">}</span>
<span class="line">.son {</span>
<span class="line">  position: absolute;</span>
<span class="line">  left: 50%;</span>
<span class="line">  top: 50%;</span>
<span class="line">  transform: translate(-50%, -50%);</span>
<span class="line">}</span>
<span class="line">// 方式二: flex/gird</span>
<span class="line">&lt;div class=&quot;father&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;son&quot;&gt;</span>
<span class="line">    123123</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">.father {</span>
<span class="line">  display: flex;</span>
<span class="line">  justify-content: center;</span>
<span class="line">  align-items: center;</span>
<span class="line">}</span>
<span class="line">// 方式三: table-cell + text-align</span>
<span class="line">&lt;div class=&quot;father&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;son&quot;&gt;</span>
<span class="line">    123123</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">.father {</span>
<span class="line">  display: table-cell;</span>
<span class="line">  vertical-align: middle;</span>
<span class="line">  text-align: center;</span>
<span class="line">}</span>
<span class="line">.son {</span>
<span class="line">  display: inline-block;</span>
<span class="line">}</span>
<span class="line">// 方式四: line-height + text-align</span>
<span class="line">&lt;div class=&quot;father&quot;&gt;</span>
<span class="line">  &lt;div class=&quot;son&quot;&gt;</span>
<span class="line">    123123</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">.father {</span>
<span class="line">  height: 200px;</span>
<span class="line">  line-height: 200px;</span>
<span class="line">  text-align: center;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合问题" tabindex="-1"><a class="header-anchor" href="#综合问题"><span>综合问题</span></a></h2><h3 id="https-的加密方式" tabindex="-1"><a class="header-anchor" href="#https-的加密方式"><span>https 的加密方式</span></a></h3><h4 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密"><span>对称加密</span></a></h4><ul><li>对称加密: 一个密匙既可以加密又可以解密为对称加密,安全性差效率高</li><li>非对称加密: 两个密匙,一个公匙一个私匙,公匙加密只有私匙能解,私匙加密只有公匙能解,安全性高效率差</li><li>数字证书: 含有证书持有者信息、公钥信息,数字签名等</li><li>数字签名: CA 机构对证书明文数据 T 金行 hash,用私匙对 hash 进行加密,得到数字签名</li></ul><ul><li><a href="https://zhuanlan.zhihu.com/p/43789231" target="_blank" rel="noopener noreferrer">https 的加密方式原理文章</a></li></ul><h3 id="性能优化的方式" tabindex="-1"><a class="header-anchor" href="#性能优化的方式"><span>性能优化的方式</span></a></h3><h4 id="vue-按需加载" tabindex="-1"><a class="header-anchor" href="#vue-按需加载"><span>VUE 按需加载</span></a></h4><ul><li>vue 中的懒加载是通过 webpack 的代码分割来实现的;</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// 将</span>
<span class="line">// import UserDetails from &#39;./views/UserDetails.vue&#39;</span>
<span class="line">// 替换成</span>
<span class="line">const UserDetails = () =&gt; import(&#39;./views/UserDetails.vue&#39;)</span>
<span class="line"></span>
<span class="line">const router = createRouter({</span>
<span class="line">  // ...</span>
<span class="line">  routes: [{ path: &#39;/users/:id&#39;, component: UserDetails }],</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码结构的优化" tabindex="-1"><a class="header-anchor" href="#代码结构的优化"><span>代码结构的优化</span></a></h4><ul><li>设置 Viewport：HTML 的 viewport 可加快页面的渲染。</li><li>减少 DOM 结点和 DOM 的层级,最多六层：DOM 结点太多会影响页面的渲染。层级太深一旦回流就可能需要大规模的重新渲染。可以提前把图片的宽高边距设置好，可以避免图片加载完成后引起尺寸变化导致回流；</li><li>优化高频事件: scroll/touchmove 等高频事件,尽可能的使用函数防抖节流</li></ul><h4 id="加载优化-减少-http-请求数" tabindex="-1"><a class="header-anchor" href="#加载优化-减少-http-请求数"><span>加载优化(减少 http 请求数)</span></a></h4><ul><li>合并图片,一些不需要经常改变的可以试用精灵图雪碧图,来减少请求数</li><li>合并压缩样式表和脚本</li><li>首屏加载,先考虑首屏需要的加载,其余的可延后处理</li><li>静态资源存放在服务器并设置缓存</li><li>异步加载第三方资源</li></ul><h4 id="图片优化" tabindex="-1"><a class="header-anchor" href="#图片优化"><span>图片优化</span></a></h4><ul><li>尽量使用 png 格式并压缩,体积较小</li><li>懒加载: 先将 img 标签中的 src 链接设为同一张图片（空白图片），将其真正的图片地址存储再 img 标签的自定义属性中（比如 data-src）。当 js 监听到该图片元素进入可视窗口时，即将自定义属性中的地址存储到 src 属性中，达到懒加载的效果。这样做能防止页面一次性向服务器响应大量请求导致服务器响应慢，页面卡顿或崩溃等问题</li><li>尽量少使用 DataURL,没有图像压缩算法,文件会变大,并且要解码后渲染,加载较慢</li></ul><h4 id="使用-cdn" tabindex="-1"><a class="header-anchor" href="#使用-cdn"><span>使用 CDN</span></a></h4><p>CDN：实现把内容从中心媒体服务器分发到边缘服务器的网络体系即内容分发网络，CDN 具有更低的网络延迟和丢包率，能够分配负载，节省带宽提高网站的性能，可以使用户就近取得所需内容，解决网络拥挤的状况，提高用户访问网站的响应速度。</p><p>如果安全性对你的网站很重要，就不要使用公共的 CDN，因为当你远程从 CDN 请求文件时，你的访问来源信息也被发送过去，一些远程的 js 文件可能被修改用来搜集你的用户或者系统信息，而当你使用 https 协议时，能选择的 CDN 就更加有限。</p><h4 id="开启-gzip" tabindex="-1"><a class="header-anchor" href="#开启-gzip"><span>开启 Gzip</span></a></h4><ul><li>Gzip 即数据压缩，前端生产环境中将 js、css、图片等文件进行压缩，通过减少数据传输量减小传输时间，节省服务器网络带宽，提高前端性能。</li></ul><h4 id="样式表和-js-文件的优化" tabindex="-1"><a class="header-anchor" href="#样式表和-js-文件的优化"><span>样式表和 JS 文件的优化</span></a></h4><ul><li><p>头部内联的样式和脚本会阻塞页面的渲染，一般我们会把 css 样式表文件放到文件的头部使用 link 引入，这样可以让 CSS 样式表尽早地完成下载。</p></li><li><p>对应 js 脚本文件，一般我们把脚本放在尾部并使用异步方式加载，这样可以尽最大限度的减少样式和脚本对页面的阻塞。</p></li></ul><h4 id="减少不必要的-cookie" tabindex="-1"><a class="header-anchor" href="#减少不必要的-cookie"><span>减少不必要的 Cookie</span></a></h4><ul><li>Cookie 存储在客户端，伴随着 HTTP 请求在浏览器和服务器之间传递，由于 cookie 在访问对应域名下的资源时都会通过 HTTP 请求发送到服务器，从而会影响加载速度，所以尽量减少不必要的 Cookie。</li></ul><h3 id="从浏览器地址栏输入网址-到网页彻底打开-中间过程" tabindex="-1"><a class="header-anchor" href="#从浏览器地址栏输入网址-到网页彻底打开-中间过程"><span>从浏览器地址栏输入网址，到网页彻底打开，中间过程</span></a></h3><ul><li>URL输入</li><li>DNS解析: 域名到IP地址的解析，顺序：浏览器缓存--&gt; 操作系统缓存--&gt; 本地host文件 --&gt; 路由器缓存--&gt; ISP DNS缓存 --&gt; 顶级DNS服务器/根DNS服务器，这个.对应的就是根域名服务器，默认情况下所有的网址的最后一位都是.，既然是默认情况下，为了方便用户，通常都会省略，浏览器在请求DNS的时候会自动加上，所有网址真正的解析过程为: . -&gt; .com -&gt; google.com. -&gt; www.google.com.。</li><li>TCP连接: 三次握手四次挥手</li><li>发送HTTP请求</li><li>服务器处理请求</li><li>服务器响应请求</li><li>浏览器解析渲染页面</li><li>连接结束</li></ul>`,85);function g(f,x){const a=i("RouteLink");return p(),d("div",null,[v,n("ul",null,[u,m,n("li",null,[n("p",null,[s("call(),apply()和 bind() 函数内时， 参考 "),c(a,{to:"/javascript.html#call-apply-bind"},{default:t(()=>[s("call(),apply(),bind()")]),_:1})])]),o,b]),h])}const y=l(r,[["render",g],["__file","tests.html.vue"]]),q=JSON.parse('{"path":"/tests.html","title":"","lang":"en-US","frontmatter":{"prev":"./javascript","next":"./"},"headers":[{"level":2,"title":"javascript","slug":"javascript","link":"#javascript","children":[{"level":3,"title":"泛型","slug":"泛型","link":"#泛型","children":[]},{"level":3,"title":"闭包","slug":"闭包","link":"#闭包","children":[]},{"level":3,"title":"this 的指向问题","slug":"this-的指向问题","link":"#this-的指向问题","children":[]},{"level":3,"title":"let、var、const 的区别","slug":"let、var、const-的区别","link":"#let、var、const-的区别","children":[]},{"level":3,"title":"变量提升","slug":"变量提升","link":"#变量提升","children":[]},{"level":3,"title":"js 的基本数据类型","slug":"js-的基本数据类型","link":"#js-的基本数据类型","children":[]},{"level":3,"title":"Fetch Api","slug":"fetch-api","link":"#fetch-api","children":[]},{"level":3,"title":"立即执行函数","slug":"立即执行函数","link":"#立即执行函数","children":[]},{"level":3,"title":"堆和栈","slug":"堆和栈","link":"#堆和栈","children":[]},{"level":3,"title":"执行机制/事件循环/任务/队列","slug":"执行机制-事件循环-任务-队列","link":"#执行机制-事件循环-任务-队列","children":[]},{"level":3,"title":"简易版的 VUE 双向绑定","slug":"简易版的-vue-双向绑定","link":"#简易版的-vue-双向绑定","children":[]}]},{"level":2,"title":"git","slug":"git","link":"#git","children":[{"level":3,"title":"常见工作流的形式","slug":"常见工作流的形式","link":"#常见工作流的形式","children":[]}]},{"level":2,"title":"css","slug":"css","link":"#css","children":[{"level":3,"title":"css 的重绘和回流","slug":"css-的重绘和回流","link":"#css-的重绘和回流","children":[]},{"level":3,"title":"为什么不建议将 font-size 设置为 12px 以下？","slug":"为什么不建议将-font-size-设置为-12px-以下","link":"#为什么不建议将-font-size-设置为-12px-以下","children":[]},{"level":3,"title":"水平垂直同时居中的方式","slug":"水平垂直同时居中的方式","link":"#水平垂直同时居中的方式","children":[]}]},{"level":2,"title":"综合问题","slug":"综合问题","link":"#综合问题","children":[{"level":3,"title":"https 的加密方式","slug":"https-的加密方式","link":"#https-的加密方式","children":[]},{"level":3,"title":"性能优化的方式","slug":"性能优化的方式","link":"#性能优化的方式","children":[]},{"level":3,"title":"从浏览器地址栏输入网址，到网页彻底打开，中间过程","slug":"从浏览器地址栏输入网址-到网页彻底打开-中间过程","link":"#从浏览器地址栏输入网址-到网页彻底打开-中间过程","children":[]}]}],"git":{},"filePathRelative":"tests.md"}');export{y as comp,q as data};
