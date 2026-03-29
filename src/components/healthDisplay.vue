<script setup>
    /* Spies u25033931*/
    import {useHealthStore} from "../stores/healthStore"
    const store = useHealthStore()
</script>

<template>
    Health: {{ store.health }}
</template>

<style>
</style>