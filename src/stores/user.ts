import { ref } from "vue";
import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged, type User } from "@firebase/auth";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>();
  const auth = ref(getAuth());

  const setUser = (userData: User | null) => {
    user.value = userData;
  };

  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (userRes) => {
          removeListener();
          console.log(userRes);

          resolve(userRes);
        },
        reject
      );
    });
  };

  return { user, auth, setUser, getCurrentUser };
});
