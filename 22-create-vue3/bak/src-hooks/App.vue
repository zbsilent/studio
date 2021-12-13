<template>
  <h2>自定义hook函数</h2>
  <h2>x:{{ x }},y:{{ y }}</h2>
  <hr />
  <h2 v-if="loading">正在加载中....</h2>
  <h2 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h2>
  <!-- <h2>{{loading}},{{data}},{{errorMsg}}</h2> -->

  <ul v-else-if="data.length === undefined">
    <li>url:{{ data.url }}</li>
    <li>name:{{ data.name }}</li>
    <li>position:{{ data.position }}</li>
  </ul>
  <div v-else>
    <ul v-for="item in data" :key="item.id">
      <li>url:{{ item.url }}</li>
      <li>name:{{ item.name }}</li>
      <li>position:{{ item.position }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

//定义接口
interface AddressDataResult {
  url: string;
  name: string;
  position: number;
}

export default defineComponent({
  name: "App",
  //点击页面收集横纵页面
  setup() {
    const { x, y } = useMousePosition();
    const { loading, data, errorMsg } =
      useRequest<AddressDataResult[]>("data/addressArry.json");

    watch(data, () => {
      console.log(data.value, data.value.length);
    });
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>

<style lang="scss" scoped></style>
