<template>
  <div>
    <h2>shallowReactive和shallowRef</h2>
    <h3>m1:{{ m1 }}</h3>
    <h3>m2:{{ m2 }}</h3>
    <h3>m3:{{ m3 }}</h3>
    <h3>m4:{{ m4 }}</h3>
    <h3>{{state}}</h3>
    <button @click="update">更新</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowRef,
  shallowReadonly,
} from "vue";

// import Name from '@/components/Name.vue';

export default defineComponent({
  name: "App",
  setup() {
    //深度响应式
    const state = reactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "green",
      },
    })

    // //浅监视 劫持
    // const m2 = shallowReactive({
    //   name: "鸣人",
    //   age: 20,
    //   car: {
    //     name: "奔驰",
    //     color: "green",
    //   },
    // });
    // const m3 = ref({
    //   name: "鸣人",
    //   age: 20,
    //   car: {
    //     name: "奔驰",
    //     color: "green",
    //   },
    // });
    // const m4 = shallowRef({
    //   name: "鸣人",
    //   age: 20,
    //   car: {
    //     name: "奔驰",
    //     color: "green",
    //   },
    // });
    //深度只读
    const state2 = readonly(state);
    //浅只读
    const state3 = shallowReadonly(state);
    const update = () => {
      // m1.car.name += "/";
      //m2.car.name += "/";
      // m3.value.car.name += "/";
       // m4.value.car.name += "/";
        state3.car.name += "/";
       //console.log(state2.name+='/');
    }
    return {
      update,
      state,
      state2,
      state3
     
    };
  },
});
</script>
