<template>
  <AppLayoutSimple class="gap-8">
    <div class="w-full">
      <p>Dołącz do QuizApp</p>
      <h2 class="text-2xl font-semibold">Utwórz konto</h2>
    </div>
    <form class="flex flex-col w-full gap-8" @submit.prevent="submitForm">
      <div class="flex flex-col gap-2">
        <InputText
          v-model="userData.name"
          name="name"
          type="text"
          :max-length="UserConfigEnum.NameMaxLength"
          placeholder="np. Tomek"
          :has-error="v$.name.$error"
        >
          <template #label>Pseudonim</template>
          <template #errorMessage>Wprowadź pseudonim</template>
        </InputText>
        <InputText
          v-model="userData.email"
          name="email"
          type="email"
          placeholder="np. tomek@wp.pl"
          :has-error="v$.email.$error"
        >
          <template #label>E-mail</template>
          <template #errorMessage>Wprowadź poprawny adres email</template>
        </InputText>
        <InputText
          v-model="userData.password"
          name="password"
          type="password"
          placeholder="np. tomek@wp.pl"
          :has-error="v$.password.$error"
        >
          <template #label>Hasło</template>
          <template #errorMessage
            >Hasło musi składać się z co najmniej
            <span v-text="UserConfigEnum.PasswordMinLength" /> znaków</template
          >
        </InputText>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <base-button>Utwórz konto</base-button>
        <InputErrorText :has-error="errorFromFirebase.status">{{
          errorFromFirebase.message
        }}</InputErrorText>
      </div>
    </form>
    <DividerWithText> lub </DividerWithText>
    <div class="flex flex-col gap-4 w-full">
      <BaseButton class="gap-2" color="blue"
        ><BaseIcon icon="Google" />Użyj konta Google</BaseButton
      >
      <BaseButton type="secondary" color="blue">Użyj konta Gościa</BaseButton>
      <div class="flex gap-2">
        Masz już konto?
        <BaseButton type="link" :to-name="RouterNameEnum.Login"
          >Zaloguj się</BaseButton
        >
      </div>
    </div>
  </AppLayoutSimple>
</template>

<script setup lang="ts">
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { ref } from "vue";
//Enums
import { UserConfigEnum, RouterNameEnum } from "@/enums/Index";
// Composables
import { convertedMsgFromAuth } from "@/composables/firebase/FirebaseConvertMessage.js";
//Components
import InputText from "@/components/UI/inputs/InputText.vue";
import DividerWithText from "@/components/UI/dividers/DividerWithText.vue";
import InputErrorText from "../components/UI/inputs/InputErrorText.vue";
// Store
import { useUserStore } from "@/stores/user";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const userStore = useUserStore();

const userData = ref({
  name: "",
  email: "",
  password: "",
});
const rules = {
  name: { required, maxLength: maxLength(UserConfigEnum.NameMaxLength) },
  email: { required, email },
  password: {
    required,
    minLength: minLength(UserConfigEnum.PasswordMinLength),
  },
};
const v$ = useVuelidate(rules, userData);

const errorFromFirebase = ref<{
  status: boolean;
  message: string;
}>({
  status: false,
  message: "",
});

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect) {
    register();
  }
};
const register = () => {
  const auth = userStore.auth;
  createUserWithEmailAndPassword(
    auth,
    userData.value.email,
    userData.value.password
  )
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: userData.value.name,
      });
      useRouter().push({ name: RouterNameEnum.Login });
    })
    .catch((err) => {
      errorFromFirebase.value.status = true;
      errorFromFirebase.value.message = convertedMsgFromAuth(err.code);
    });
};
</script>

<style scoped></style>
