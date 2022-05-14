<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form ref="form" lazy-validation class="text-center">
          <v-text-field
            v-model="newTodo.firstName"
            :counter="64"
            label="FirstName"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="newTodo.secondName"
            :counter="64"
            label="SecondName"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="newTodo.title"
            :counter="64"
            label="Title"
            outlined
            required
          ></v-text-field>

          <v-textarea
            v-model="newTodo.description"
            autocomplete="Description"
            outlined
            label="Description"
          >
          </v-textarea>
        </v-form>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newTodo.emailAddress"
          :counter="64"
          outlined
          label="E-mail"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newTodo.contactTypeOne"
          :counter="64"
          outlined
          label="Type"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newTodo.phoneNumberOne"
          :counter="64"
          outlined
          label="PhoneNumber"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newTodo.contactTypeTwo"
          :counter="64"
          outlined
          label="Type"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newTodo.phoneNumberTwo"
          :counter="64"
          outlined
          label="PhoneNumber"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newTodo.contactTypeThree"
          :counter="64"
          label="Type"
          outlined
          required
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-btn @click="add" color="success" class="mr-4"> Add </v-btn>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    newTodo: {
      firstName: "",
      secondName: "",
      title: "",
      description: "",
      emailAddress: "",
      pohoneNumberOne: "",
      pohoneNumberTwo: "",
      contactTypeOne: "",
      contactTypeTwo: "",
      contactTypeThree: "",
      is_complete: false,
      user: 1,
    },
    todoList: [],
    url: "http://localhost:8080/api/todo/",
  }),
  methods: {
    async add() {
      var data = this.newTodo;
      await axios.post(this.url, data).then((response) => {
        console.log(response);
        this.$router.push({ name: "BookList" });
      });
    },
  },
};
</script>
