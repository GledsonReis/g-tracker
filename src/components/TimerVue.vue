<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <StopwatchVue :timeInSeconds="timeInSeconds" />
        <button class="button is-success" @click="startTimer" :disabled="timerActive">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button is-danger" @click="stopTimer" :disabled="!timerActive">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import StopwatchVue from './StopwatchVue.vue'

export default defineComponent({
    name: "TimerVue",
    emits: ['onStopTimer'],
    components: {
        StopwatchVue
    },
    data() {
        return {
            timeInSeconds: 0,
            timer: 0,
            timerActive: false
        }
    },
    methods: {
        startTimer() {
            this.timerActive = true
            this.timer = setInterval(() => {
                this.timeInSeconds += 1
            }, 1000);
        },
        stopTimer() {
            this.timerActive = false
            clearInterval(this.timer)
            this.$emit('onStopTimer', this.timeInSeconds)
            this.timeInSeconds = 0
        }
    }
})
</script>