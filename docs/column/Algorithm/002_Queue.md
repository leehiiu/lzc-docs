<!--
 * @Description: 
 * @Author: 李泽诚
 * @Date: 2024-03-28 16:28:27
 * @LastEditors: 李泽诚
 * @LastEditTime: 2024-05-07 11:06:41
-->
# Vapor实现原理

> 
``` javascript
<script setup>
import { ref, getCurrentInstance,reactive } from 'vue'

const msg = ref('Hello World!')
const content = ref('1')
const isVapor = getCurrentInstance().vapor


</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <b>VAPOR {{ isVapor ? 'ON' : 'OFF' }}</b>
</template>


import { vModelText as _vModelText, withDirectives as _withDirectives, on as _on, renderEffect as _renderEffect, setText as _setText, template as _template } from 'vue/vapor';
// ssr render渲染函数 Vapor实现真实DOM响应式原理  在render函数中没有调用生成虚拟dom的函数：createElementVNode
function ssrRender(_ctx) {
  const n0 = t0() // <h1>元素DOM
  const n1 = t1() // <input>元素DOM
  const n2 = t2() // <b>元素DOM
  // _withDirectives函数 vue3中给虚拟DOM增加自定义指令，这里是给真是DOM增加自定义指令，即（给n1 input元素增加v-model指令）
  _withDirectives(n1, [[_vModelText, () => _ctx.msg]])
  // _on函数，让n1 输入框监听一个为update:modelValue的事件，触发事件后将上下文中msg变量更新为输入框绑定的值
  _on(n1, "update:modelValue", () => $event => (_ctx.msg = $event))
  //_renderEffect函数 ，和watchEffect功能类似， 会立即执行一个函数，执行函数时会追踪函数中的依赖，在这里指msg变量，只要msg变量发生变化，就会运行这个函数。
  // _setText函数 实际执行了 n0.textContent = _ctx.msg，textContent属性代表一个节点及其后代的文本内容，这里重新给其重新赋值
  _renderEffect(() => _setText(n0, _ctx.msg))
  _renderEffect(() => _setText(n2, "VAPOR ", _ctx.isVapor ? 'ON' : 'OFF'))
  // 最后返回修改后的DOM元素
  return [n0, n1, n2, n3]
}
```