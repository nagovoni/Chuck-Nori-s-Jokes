<template>
  <v-app id="dream">

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Chuck Norris Jokes</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="(menu, index) in routes" :key="index" :to="menu.route" :title="menu.name"/>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-teal-darken-1">
      <v-container>
        <v-row>
          <router-view />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      routes: [
        { route: '/', name: 'Home'},
        { route: '/categories', name: 'Categorias'},
        { route: '/search', name: 'Busca'},
        { route: '/about', name: 'Sobre'}
      ]
     }),
  }
</script>

