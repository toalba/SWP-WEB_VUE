<script>
import VueDrawingCanvas from 'vue-drawing-canvas';
export default {
  name: 'Drawingboard',
  data: function() {
    return {
        connection: null,
    }
  },
  methods: {
    sendMessage: function(e) {
        console.log(e);
        this.connection.send(e);
    }
  },
  created() {
    this.connection = new WebSocket('ws://127.0.0.1:5000/echo');
    this.connection.onopen = function (e) {
      console.log("Connection established!");
    };
    this.connection.onmessage = function (e) {
      processevents(e.data);
    };
  },
}

function processevents(evt) {
    console.log(evt);
}


</script>

<template>
    <vue-drawing-canvas
        ref="VueCanvasDrawing"
        v-model:image="image"
        :width="600"
        :height="400"
        :stroke-type="strokeType"
        :line-cap="lineCap"
        :line-join="lineJoin"
        :fill-shape="fillShape"
        :eraser="eraser"
        :lineWidth="line"
        :color="color"
        :background-color="backgroundColor"
        :background-image="backgroundImage"
        :watermark="watermark"
        :initial-image="initialImage"
        saveAs="png"
        :output-width="300"
        :output-height="200"
        :styles="{
        'border': 'solid 1px #000'
        }"
        :lock="disabled"
        :additional-images="additionalImages"
    />
    <button v-on:click="sendMessage('hello')">Send Message</button>
</template>