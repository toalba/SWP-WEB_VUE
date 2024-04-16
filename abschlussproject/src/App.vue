<script setup>
import VueDrawingCanvas from "vue-drawing-canvas";
import Drawingboard from "./components/Drawingboard.vue";
//document.body.addEventListener('mousemove', (e) => console.log(e))
</script>


<template>
  <header>
    <h1>Vue Abschlussproject</h1>
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <Drawingboard />
        </div>
      </div>
    </div>
  </main>
</template>
