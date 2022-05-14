<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form ref="form" lazy-validation class="text-center">
          <v-text-field
            v-model="todo.firstName"
            :counter="64"
            label="FirstName"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="todo.secondName"
            :counter="64"
            label="SecondName"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="todo.title"
            :counter="64"
            label="Title"
            outlined
            required
          ></v-text-field>

          <v-textarea
            v-model="todo.description"
            autocomplete="Description"
            outlined
            label="Description"
          >
          </v-textarea>
        </v-form>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="todo.emailAddress"
          :counter="64"
          outlined
          label="E-mail"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="todo.contactTypeOne"
          :counter="64"
          outlined
          label="Type"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="todo.phoneNumberOne"
          :counter="64"
          outlined
          label="PhoneNumber"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="todo.contactTypeTwo"
          :counter="64"
          outlined
          label="Type"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="todo.phoneNumberTwo"
          :counter="64"
          outlined
          label="PhoneNumber"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="todo.contactTypeThree"
          :counter="64"
          label="Type"
          outlined
          required
        ></v-text-field>
      </v-col>
      <v-btn @click="Update" color="success" class="mr-4"> Update </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      todo: {},
    };
  },
  components: {},
  mounted() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      const TodoID = this.$route.params.id;
      await axios
        .get(`http://localhost:8080/api/todo/${TodoID}/`)
        .then((response) => {
          this.todo = response.data;
        });
    },
    async Update() {
      const TodoID = this.$route.params.id;
      await axios
        .patch(`http://localhost:8080/api/todo/${TodoID}/`, this.todo)
        .then((response) => {
          this.todo = response.data;
          this.$router.push({ name: "BookList" });
        });
    },
  },
};
</script>
