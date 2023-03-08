import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NoFound.vue'
import About from './views/About.vue'
import pokemons from './views/PokemonList.vue'
import PokemonDetails from './views/PokemonDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/pokemons',
    name: 'pokemons',
    component: pokemons
  }, {
    path: '/pokemon/:id',
    name: 'PokemonDetails',
    component: PokemonDetails
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});