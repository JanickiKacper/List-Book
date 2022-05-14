<template>
  <div class="container">
    <v-row>
      <v-col cols="12" sm="6">
        <div class="box indigo lighten-5">
          <h2 class="text-center">Personal Information</h2>
          <p class="text-center">
            <strong>First Name: </strong>{{ todo.firstName }}
          </p>
          <p class="text-center">
            <strong>LastName: </strong>{{ todo.secondName }}
          </p>
          <p class="text-center">
            <v-icon color="indigo"> mdi-message-text </v-icon>
            <strong class="ml-2">emailAddress: </strong>{{ todo.emailAddress }}
            <strong class="ml-2"> Type: </strong> {{ todo.contactTypeOne }}
          </p>
          <p class="text-center">
            <v-icon color="indigo"> mdi-phone </v-icon>
            <strong class="ml-2">PhoneNumber: </strong
            >{{ todo.phoneNumberOne }} <strong class="ml-2"> Type: </strong>
            {{ todo.contactTypeTwo }}
          </p>
          <p class="text-center">
            <v-icon color="indigo"> mdi-phone </v-icon>
            <strong class="ml-2">PhoneNumber: </strong
            >{{ todo.phoneNumberTwo }} <strong class="ml-2"> Type: </strong>
            {{ todo.contactTypeThree }}
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" ma-5>
        <div class="box indigo lighten-5">
          <h2 class="text-center">Details</h2>
          <p class="text-center"><strong>Title: </strong>{{ todo.title }}</p>
          <p class="text-center">
            <strong>Description: </strong>{{ todo.description }}
          </p>
          <small class="text-center">
            <strong class="ml-2">Created_at: </strong>{{ todo.created_at }}
          </small>
          <v-spacer></v-spacer>
          <small class="text-center">
            <strong class="ml-2">Updated_at: </strong>{{ todo.updated_at }}
          </small>
        </div>
      </v-col>
    </v-row>
    <v-btn @click="deleteTodo" color="red" class="mr-4"> Delete </v-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ListView",
  data() {
    return {
      todo: {},
    };
  },
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
    async deleteTodo() {
      const TodoID = this.$route.params.id;
      await axios
        .delete(`http://localhost:8080/api/todo/${TodoID}`, this.todo)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "BookList" });
        });
    },
  },
};
</script>
