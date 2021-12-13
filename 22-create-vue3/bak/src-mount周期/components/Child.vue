<template>
  <h2>Child组件</h2>
  <h4>msg:{{ msg }}</h4>
  <button @click="update">更新数据</button>
</template>

<script>
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "Child",
  beforeCreate() {
    console.log("vue2.x中的beforeCreate");
  },
  created() {
    console.log("vue2.x中的created");
  },
  beforeMount() {
    console.log("vue2.x中的beforeMount");
  },
  mounted() {
    console.log("vue2.x中的mounted");
  },
  beforeUpdate() {
    console.log("vue2.x中的beforeUpdate");
  },
  updated() {
    console.log("vue2.x中的 updated");
  },
  //Vue2.x中的 beforeDestroy/destroyed 在Vue3中改名了，所以不能在使用了
  beforeUnmount() {
    console.log("vue2.x中的 beforeDestroy");
  },
  unmounted() {
    console.log("vue2.x中的 destroyed");
  },
  setup() {
    console.log("vue3.x中的setup");
    const msg = ref("abc");
    const update = () => {
      msg.value += "=";
    };
    onBeforeMount(() => {
      console.log("vue3.x中的 onBeforeMount");
    });
    onMounted(() => {
      console.log("vue3.x中的 onMounted");
    });
    onBeforeUpdate(() => {
      console.log("vue3.x中的 onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("vue3.x中的 onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("vue3.x中的 onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("vue3.x中的 onUnmounted");
    });
    return {
      msg,
      update,
    };
  },
});
</script>
