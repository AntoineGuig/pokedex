<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemon = ref(null)

function fetchPokemon() {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${route.params.id}`)
        .then(response => response.json())
        .then(data => {
            pokemon.value = data
        })
}

// Si l'ID change, on appelle la fonction fetchPokemon
watch(route, () => fetchPokemon())
// Appel de la fonction fetchPokemon, pour récupérer les détails du pokémon
fetchPokemon()
</script>
<template>
    <div class="flex flex-col items-center" v-if="pokemon">
        <div class="flex flex-col items-center">
            <img :src="pokemon.image" class="w-32 h-32" />
            <h1 class="text-2xl font-bold">{{ pokemon.name }}</h1>
        </div>
        <div class="flex flex-col items-center">
            <h2 class="text-xl font-bold">Types</h2>
            <div class="flex flex-row">
                <span v-for="type in pokemon.apiTypes" :key="type.name">
                    <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{
                        type.name
                    }}</span>
                    <span><img :src="type.image" class="w-8 h-8" /></span>
                </span>

            </div>
        </div>
    </div>
</template>