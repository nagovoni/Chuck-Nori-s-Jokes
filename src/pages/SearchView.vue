<template>
  <v-container>
    <v-card>
      <v-card-title>Search a Joke</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="search"
          label="Search for term"
          placeholder="Search for term"
          clearable
          hint="e.g. computer, world"
        ></v-text-field>
        <v-btn style="background-color:#004D40;" :disabled="!search" @click="searchJoke">Search</v-btn>
        </v-card-text>
        <div class="text-center">
          <v-progress-circular :model-value="value" :rotate="360" :size="100" :width="15" color="black"
           v-if="loading" :indeterminate="true"></v-progress-circular>
        </div>

      <v-card-text v-if="jokes.length > 0">
        <v-list v-for="joke in jokes" :key="joke.id">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-list-item-subtitle v-if="joke.url">
                  <v-chip x-new href="joke.url" target="_blank" rel="noopener noreferrer">
                    {{ joke.value }}
                  </v-chip>
                </v-list-item-subtitle>
                <v-list-item-subtitle v-else>
                  {{ joke.value }}
                </v-list-item-subtitle>
                <v-spacer></v-spacer>
                <span>{{ joke.categories.join(', ') }}</span>
                <v-btn icon small color="red" @click="deleteJoke(joke.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-text v-else>
        <v-alert>No jokes here!</v-alert>
      </v-card-text>
    </v-card>
  </v-container>




</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      search: '',
      jokes: [],
      loading: false,
    };
  },
  methods: {
    async searchJoke() {
      this.loading = true;
      try {
        const res = await axios.get(`https://api.chucknorris.io/jokes/search?query=${this.search}`);
        this.jokes = res.data.result;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    deleteJoke(id) {
      this.jokes = this.jokes.filter(joke => joke.id !== id);
    },
  },
};
</script>

