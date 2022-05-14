<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list-item-group color="primary">
          <v-list elevation="12">
            <v-list-item v-for="item in todoList" :key="item.id">
              <v-list-item-icon>
                {{ item.id }}
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  <strong>{{ item.title }}</strong>
                </v-list-item-title>
              </v-list-item-content>
              <v-btn fab dark small color="yellow">
                <router-link
                  :to="{ name: 'ListView', params: { id: item.id } }"
                >
                  <v-icon dark> mdi-format-list-bulleted-square </v-icon>
                </router-link>
              </v-btn>
              <v-btn fab dark small color="orange" class="ml-2">
                <router-link
                  :to="{ name: 'EditEntry', params: { id: item.id } }"
                  ><v-icon dark> mdi-pencil </v-icon>
                </router-link>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "BookList",
  data: () => ({
    selected: [],
    todoList: [],
    todo: {},
  }),

  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios.get("http://localhost:8080/api/todo/").then((response) => {
        this.todoList = response.data;
      });
    },
  },
};
</script>
