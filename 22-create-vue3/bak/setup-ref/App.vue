<template>
  <!-- vue2中标签必须成对 -->
  <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <div>hello 我又变帅了 </div>
  <hr/>
  <h3>{{count}}</h3>
  <button @click="updateCount">更新数据</button>
</template>

// 这里可以使用ts代码 
<script lang="ts">
//定义组件，内部可以传配置对象
import { defineComponent,ref } from "vue"
//引入子集组件
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  // data(){
  //   return {
  //     count:0
  //   }
  // },
  // methods: {
  //   updateCount(){
  //     this.count++
  //   }
  // },
   
 
  //组合api入口 
  setup():any {
    //定义一个数据的响应式 数据变化 就渲染
    const count:Ref = ref(0);
    //console.log(count);
    function updateCount():any{
      //count是ref的对象，对象不能++
      count.value++
    }
    
    //返回对象
    return{
      count,
      updateCount
    }
  }
});
</script>
