<template>
  <div class="container">
    <div class="login-box">
      <div class="logo">Nuevas tecnologias 2</div>
      <form @click.prevent="login">
        <input
          type="text"
          placeholder="Teléfono, usuario o correo electrónico"
          required
          v-model="username"
        />
        <input
          type="password"
          placeholder="Contraseña"
          required
          v-model="password"
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const username = ref(null);
const password = ref(null);
const login = () => {
  if (username.value === "admin" && password.value === "admin") {
    router.push("/home");
  }
};
</script>
