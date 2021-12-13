<template>
  <h2>reactive的使用</h2>
  <h2>name: {{ user.name }}</h2>
  <h2>age: {{ user.age }}</h2>
 <h2>sex: {{ user.gender }}</h2>
  <h2>wife: {{ user.wife }}</h2>
  <hr />
  <button @click="updateUser">更新</button>
</template>

// 这里可以使用ts代码
<script lang="ts">
//定义组件，内部可以传配置对象
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  beforeCreate(){
    console.log("创建")
  },
  //需求：显示用户的相关信息，点击按钮，可以更新用户信息数据
  setup(): any {
    class Wife {
      name: string;
      age: number;
      cars: string[];
      constructor(name: string, age: number, cars: string[]) {
        this.name = name;
        this.age = age;
        this.cars = cars;
      }
    }
    class User {
      name: string;
      age: number;
      wife: Wife;
      constructor(name: string, age: number, wife: Wife) {
        this.name = name;
        this.age = age;
        this.wife = wife;
      }
    }
    let wife = new Wife("小花", 27, ["奔驰", "宝马"]);
    const obj:any = new User("小明", 18, wife);
    const user: any = reactive(obj);
    console.log(user, typeof user);

    const updateUser = ():any => {
      // console.log(this);
      user.name = "李强";
      obj.gender="男" //奇怪了obj更新就行
      console.log(user, typeof user);

    };
    //console.log(typeof(updateUser));
    return {
      user,
      updateUser,
    };
  },
});
</script>
