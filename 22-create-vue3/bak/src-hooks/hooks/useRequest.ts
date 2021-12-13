import { ref } from "vue";
import axios from "axios";
export default function <T>(url: string): any {
  const loading = ref(true);
  const data: any = ref<T | null>(null);
  const errorMsg = ref("");

  //   axios.get(url).then(
  //     (response) => {
  //       loading.value = false;
  //       data.value = response.data;
  //     },
  //     (error) => {
  //       debugger;
  //       loading.value = false;
  //       errorMsg.value = error.message || "未知错误";
  //     }
  //   );
  axios
    .get(url)
    .then((response) => {
      loading.value = false;
      data.value = response.data;
    })
    .catch((error) => {
      loading.value = false;
      errorMsg.value = error.message || "未知错误";
    });

  return {
    loading,
    data,
    errorMsg,
  };
}
