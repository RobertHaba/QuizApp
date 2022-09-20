import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged, type User } from "@firebase/auth";
import { useRouter } from "vue-router";
import { RouterNameEnum } from "@/enums/Index";
import { ref } from "vue";
import { useUserStore } from "./user";

export const useAuthStore = defineStore("auth", () => {
  const auth = ref(getAuth());
  const router = useRouter();

  const fetchUser = () => [
    onAuthStateChanged(auth.value, async (user: User | null) => {
      useUserStore().setUser(user);
      if (user === null) {
      } else if (!router.currentRoute.value.meta.requiresAuth) {
        router.push({ name: RouterNameEnum.Home });
      }
    }),
  ];
  return { fetchUser };
});
