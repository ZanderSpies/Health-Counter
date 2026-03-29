<script setup>
    /* Spies u25033931*/
    import {useHealthStore} from "../stores/healthStore"
    const store = useHealthStore()
    import { ref } from "vue";
    const newMaxHealth = ref(store.maxHealth);
</script>

<template>
    Current max health: {{ store.maxHealth }}
    <br/>
    <input type="number" v-model="newMaxHealth" />
    <button @click="store.setMaxHealth(newMaxHealth)" :disabled="!store.canEditMaxHealth">Set Max Health</button>
    
</template>

<style>
</style>