import{_ as s,o as n,c as a,N as l}from"./chunks/framework.0173b754.js";const i=JSON.parse('{"title":"Vapor实现原理","description":"","frontmatter":{},"headers":[],"relativePath":"column/Algorithm/002_Queue.md"}'),p={name:"column/Algorithm/002_Queue.md"},o=l(`<h1 id="vapor实现原理" tabindex="-1">Vapor实现原理 <a class="header-anchor" href="#vapor实现原理" aria-label="Permalink to &quot;Vapor实现原理&quot;">​</a></h1><blockquote></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> getCurrentInstance</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reactive </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const msg = ref(&#39;Hello World!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const content = ref(&#39;1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const isVapor = getCurrentInstance().vapor</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">VAPOR </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> isVapor ? </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">ON</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OFF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vModelText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_vModelText</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">withDirectives</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_withDirectives</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">on</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_on</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">renderEffect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_renderEffect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_setText</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue/vapor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ssr render渲染函数 Vapor实现真实DOM响应式原理  在render函数中没有调用生成虚拟dom的函数：createElementVNode</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ssrRender</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">_ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">t0</span><span style="color:#F07178;">() </span><span style="color:#676E95;font-style:italic;">// &lt;h1&gt;元素DOM</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">t1</span><span style="color:#F07178;">() </span><span style="color:#676E95;font-style:italic;">// &lt;input&gt;元素DOM</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">t2</span><span style="color:#F07178;">() </span><span style="color:#676E95;font-style:italic;">// &lt;b&gt;元素DOM</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// _withDirectives函数 vue3中给虚拟DOM增加自定义指令，这里是给真是DOM增加自定义指令，即（给n1 input元素增加v-model指令）</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">_withDirectives</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [[</span><span style="color:#A6ACCD;">_vModelText</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;">]])</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// _on函数，让n1 输入框监听一个为update:modelValue的事件，触发事件后将上下文中msg变量更新为输入框绑定的值</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">_on</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">update:modelValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">$event</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">_ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$event</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//_renderEffect函数 ，和watchEffect功能类似， 会立即执行一个函数，执行函数时会追踪函数中的依赖，在这里指msg变量，只要msg变量发生变化，就会运行这个函数。</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// _setText函数 实际执行了 n0.textContent = _ctx.msg，textContent属性代表一个节点及其后代的文本内容，这里重新给其重新赋值</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">_renderEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_setText</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">_renderEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_setText</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">VAPOR </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">_ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isVapor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ON</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OFF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 最后返回修改后的DOM元素</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">n0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n3</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,3),t=[o];function e(c,r,F,y,D,A){return n(),a("div",null,t)}const _=s(p,[["render",e]]);export{i as __pageData,_ as default};
