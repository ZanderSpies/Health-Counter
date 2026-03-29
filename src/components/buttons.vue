<script setup>
    /* Spies u25033931*/
    import {useHealthStore} from "../stores/healthStore"
    const store = useHealthStore()
</script>

<template>
    <button @click="store.increment" :disabled="store.isMax" id="increment">+1</button>
    
    <button @click="store.decrement" :disabled="store.isDead" id="decrement">-1</button>
    <p v-if="store.isMax">Health is full</p>
</template>

<style scoped>
    #increment:active
    {
        background-color: green;
    }

    #decrement:active
    {
        background-color: red;
    }

    #decrement:active:disabled
    {
        background-color: initial;
    }

    #increment:active:disabled
    {
        background-color: initial;
    }

    button
    {
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        width: 100px;
    }
</style>