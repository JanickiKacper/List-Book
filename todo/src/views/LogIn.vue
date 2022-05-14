<template>
  <v-container>
    <v-card class="mx-auto" style="max-width: 500px" elevation="12">
      <v-col cols="12">
        <h1 class="title text-center mb-4">Login</h1>
        <v-form @submit.prevent="submitForm" id="check-submit-form">
          <v-text-field
            filled
            color="deep-purple"
            :counter="24"
            label="Name"
            style="min-height: 96px"
            v-model="username"
          ></v-text-field>

          <v-text-field
            filled
            color="deep-purple"
            :counter="24"
            label="Email"
            style="min-height: 96px"
            v-model="email"
          ></v-text-field>

          <v-text-field
            filled
            color="deep-purple"
            :counter="24"
            label="Password"
            style="min-height: 96px"
            v-model="password"
          ></v-text-field>

          <div class="control">
            <v-btn type="submit" color="green" form="check-submit-form"
              >Login</v-btn
            >
          </div>
        </v-form>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        username: this.username,
        password: this.password,
        email: this.email,
      };

      axios
        .post("http://localhost:8080/api/v1/token/login/", formData)
        .then((response) => {
          console.log(response);
          const token = response.data.auth_token;

          this.$store.commit("setToken", token);

          axios.defaults.headers.common["Authorization"] = "Token " + token;

          localStorage.setItem("token", token);

          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
