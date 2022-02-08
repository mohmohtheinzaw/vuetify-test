<template>
  <div class="login d-flex justify-center align-center" style="height: 100%">
    <div style="width: 300px" align="center">
      <h3 class="green--text mb-10">Login</h3>
      <v-text-field
        label="Username"
        placeholder="Enter your username"
        outlined
        color="green"
        v-model="username"
      ></v-text-field>
      <v-text-field
        label="Password"
        placeholder="Enter your password"
        outlined
        type="password"
        color="green"
        v-model="password"
      ></v-text-field>
      <p class="error--text caption" v-if="error">
        * Username or password wrong
      </p>
      <v-btn :loading="loading" @click="login" color="green" dark block large>
        Login
      </v-btn>
    </div>
  </div>
</template>
<script>
import { loginUser } from "@/api";
export default {
  name: "Login",
  data: function () {
    return {
      username: null,
      password: null,
      loading: false,
      error: false,
    };
  },
  methods: {
    saveToken: function (token) {
      localStorage.setItem("token", token);
    },
    login: async function () {
      try {
        this.loading = true;
        let result = await loginUser(this.username, this.password);
        this.saveToken(result.token);
        
        this.loading = false;
        this.error = false;
        this.username = null;
        this.password = null
        this.$router.push("/")


      } catch (err) {
        console.log("err:", err);
        this.loading = false;
        this.error = true;
      }
    },
  },
};
</script>
<style>
.login {
  height: "100%" !important;
}
</style>
