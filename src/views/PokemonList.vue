<script setup lang="ts">
import card from "../components/card.vue"

import { ref } from 'vue'
const pokemons = ref([])
function getPokemons() {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100 ')
        .then(response => response.json())
        .then(data => {
            pokemons.value = data
        }
        )
}
getPokemons();
// À l'étape suivante vous allez ajouter le code pour récupérer la liste des pokémons
</script>

<template>
    <h1>Pokémons Liste</h1>
    <div>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="(pokemon, index) in pokemons" :key="pokemon.name">
                <router-link :to="`/pokemon/${index + 1}`">
                    <card>
                        <div class="text-center">{{ pokemon.name }}</div>
                    </card>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
