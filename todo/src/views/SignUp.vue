<template>
  <v-container>
    <v-card class="mx-auto" style="max-width: 500px" elevation="12">
      <v-col cols="12">
        <h1 class="title text-center mb-4">Sign Up</h1>
        <v-form @submit.prevent="submitForm" id="check-submit-form">
          <v-text-field
            v-model="username"
            filled
            color="deep-purple"
            :counter="24"
            label="Name"
            style="min-height: 96px"
            :rules="inputUsername"
          ></v-text-field>

          <v-text-field
            v-model="email"
            filled
            color="deep-purple"
            :counter="24"
            label="Email"
            style="min-height: 96px"
            :rules="inputEmail"
          ></v-text-field>

          <v-text-field
            v-model="password1"
            filled
            color="deep-purple"
            :counter="24"
            label="Password"
            style="min-height: 96px"
            :rules="inputPassword1"
          ></v-text-field>

          <v-text-field
            v-model="password2"
            filled
            color="deep-purple"
            :counter="24"
            label="Repeat password"
            style="min-height: 96px"
            :rules="inputPassword2"
          ></v-text-field>
          <div class="field">
            <div class="control">
              <v-btn type="submit" color="green" form="check-submit-form"
                >Submit</v-btn
              >
            </div>
          </div>
        </v-form>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      valid: false,
      username: "",
      email: "",
      password1: "",
      password2: "",
      inputUsername: [
        (value) => value.length >= 6 || "Minimum lenght is 5 chars",
      ],
      inputEmail: [(value) => /.+@.+/.test(value) || "E-mail is valid"],
      inputPassword1: [
        (value) =>
          value !== this.username || "Password and username cant be the same",
        (value) => value.length >= 6 || "Minimum lenght is 5 chars",
      ],
      inputPassword2: [
        (value) => value === this.password1 || "Password must match",
      ],
    };
  },

  methods: {
    submitForm() {
      const formData = {
        username: this.username,
        password: this.password1,
        email: this.email,
      };
      axios
        .post("http://localhost:8080/api/v1/users/", formData)
        .then((response) => {
          console.log(response);
          this.$router.push("/LogIn");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
