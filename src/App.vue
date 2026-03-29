
<script setup>
  /* Spies u25033931*/
  import {useHealthStore} from "./stores/healthStore"
  const store = useHealthStore()
  import Buttons from "./components/buttons.vue";
  import HealthDisplay from "./components/healthDisplay.vue";
  import updateMaxHealth from "./components/updateMaxHealth.vue";
  import Reset from "./components/reset.vue";

</script>
  
<template>
  <div id="back-layer">
    <div id="front-layer">
      <p>
        <HealthDisplay/>
      </p>
      <p>
        <Buttons/>
      </p>
      
      <br/>
      <updateMaxHealth/>
      <p>
        <Reset/>
      </p>
    </div>
  </div>
  
  
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=B612:ital,wght@0,400;0,700;1,400;1,700&family=Orbitron:wght@400..900&family=Saira:ital,wght@0,100..900;1,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  body
  {
    text-align: center;
    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 30px;
  }

  button
  {
    text-align: center;
    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
  }

  body
  {
    margin-top: 100px;
  }

  #front-layer
  {
    background-color: #c0392b;
    padding: 50px;
    margin-left: 200px;
    margin-right: 200px;
    box-shadow: #c0392b 0px 0px 10px 20px;
  }

  html
  {
    width: 100%;
    height: 100%;
    background-color: #13161e;
  }
</style>
