<template>
  <v-app>
    <v-app-bar app color="deep-purple" dark>
      <div class="d-flec align-center">
        <v-toolbar-title>List Book</v-toolbar-title>
      </div>
      <v-btn
        class="mx-2"
        v-for="item in items"
        :key="item.text"
        router
        :to="item.rout"
        color="primary"
        >HomePage</v-btn
      >

      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
        color="primary"
        >Create</v-btn
      >
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on" class="ma-2">
            Menu
          </v-btn>
        </template>
        <v-list elevation="12">
          <v-list-item
            class="ma-2"
            v-for="nav in navs"
            :key="nav.text"
            router
            :to="nav.rou"
            color="primary"
            ><v-list-item-title>SignUp</v-list-item-title></v-list-item
          >
          <v-list-item
            class="ma-2"
            v-for="navs in navs2"
            :key="navs.text"
            router
            :to="navs.rou"
            color="primary"
            ><v-list-item-title>Login</v-list-item-title></v-list-item
          >
          <v-list-item class="ma-2" @click="logout()" color="primary"
            ><v-list-item-title>Logout</v-list-item-title></v-list-item
          >
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  data: () => {
    return {
      links: [{ text: "Create", route: "/Add" }],
      items: [{ text: "HomePage", rout: "/" }],
      navs: [{ text: "SignUp", rou: "/SignUp" }],
      navs2: [{ text: "LogIn", rou: "/LogIn" }],
    };
  },

  beforeCreate() {
    this.$store.commit("initializeStore");

    if (this.$store.state.token) {
      axios.defaults.headers.common["Autorization"] =
        "Token " + this.$store.state.token;
    } else {
      axios.defaults.headers.common["Autorization"] = "";
    }
  },

  methods: {
    async logout() {
      await axios.post("http://localhost:8080/api/v1/token/logout/");
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      this.$store.commit("removeToken");
      this.$router.push("/LogIn");
    },
  },
};
</script>
