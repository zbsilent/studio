<template>
  <div>
    <h2>roRef的使用</h2>
    <!-- <h2>name:{{state.name}}</h2>
     <h2>age:{{state.age}}</h2> -->
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
  </div>
  <div>
    <h2>ref的另一个作用:可以获取页面中的元素</h2>
    <input type="text"  ref="inputRef"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  nanme: "App",
  setup() {
    const inputRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      console.log(inputRef.value)
      inputRef.value && inputRef.value.focus()
    })
    const state = reactive({
      name: "sss",
      age: 12,
    });
    const { name, age } = toRefs(state);
    setInterval(() => {
      //state2中的每一个属性都是ref对象
      name.value += "=";
    }, 1000);
    return {
      // ...state //不是响应数据
      //...state2
      inputRef,
      name,
      age,
    };
  },
});
</script>

<style scoped></style>
