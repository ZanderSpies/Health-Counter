<script setup>
/* Spies u25033931*/
    import {useHealthStore} from "../stores/healthStore"
    const store = useHealthStore()
</script>

<template>
    <button @click="store.resetValues" :disabled="store.isDefault">Reset</button>
</template>

<style>
</style>