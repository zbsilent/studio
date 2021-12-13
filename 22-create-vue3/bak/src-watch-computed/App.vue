<template>
  <h2>计算属性和监视属性</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏:<input
      type="text"
      placeholder="请输入姓"
      v-model="user.firstName"
    /><br />
    名字:<input type="text" placeholder="请输入名" v-model="user.lastName" />
  </fieldset>
  <fieldset>
    <legend>计算属性演示</legend>
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName" /><br />
    姓名:<input type="text" placeholder="请输入姓" v-model="fullName2" /><br />
    姓名:<input type="text" placeholder="请输入姓" v-model="fullName3" /><br />
  </fieldset>
</template>

<script lang="ts">
//定义组件，内部可以传配置对象
import {
  defineComponent,
  reactive,
  computed,
  watch,
  ref,
  watchEffect,
} from "vue";

export default defineComponent({
  name: "App",

  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });
    //通过计算属性的方式 显示第一个姓名
    //Vue3中的计算属性 计算属性的函数 只传入一个回调 表示的是get
    const fullName: any = computed(() => {
      return user.firstName + "-" + user.lastName;
    });
    //Vue3第二个执行
    const fullName2: any = computed({
      get() {
        return user.firstName + "-" + user.lastName;
      },
      set(val: string) {
        //console.log("===="+val);
        const names = val.split("-");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });
    //监视属性操作--监视制定的数据
    const fullName3 = ref("");
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "-" + lastName;
      },
      { immediate: true, deep: true }
    );
    //本身就会自动执行一次 不需要immediate
    // watchEffect(() => {
    //   fullName3.value = user.firstName+'-'+user.lastName
    // });
    //监视fullName3的数据，改变属性
    watchEffect(() => {
      const name = fullName3.value.split("-");
      user.firstName = name[0];
      user.lastName = name[1];
    });
    //如果监视的是非响应式数据，则需要用回调的方式,fullname3 本身就是响应式数据了 
    watch([() => user.firstName, () => user.lastName,fullName3], () => {
      console.log("===");
    });
    return {
      user,
      fullName,
      fullName2,
      fullName3,
    };
  },
});
</script>
