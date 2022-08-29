<template>
    <BoxVue>
        <div class="columns">
            <div class="column is-7">
                {{ task.description || 'Tarefa sem descrição'}}
            </div>
            <div class="column">    
                <StopwatchVue :timeInSeconds="task.timeInSeconds"/>
            </div>
        </div>
    </BoxVue>
</template>


<script lang="ts">

import { defineComponent, PropType } from "vue";
import StopwatchVue from "./StopwatchVue.vue";
import ITask from "@/interfaces/ITask";
import BoxVue from "./BoxVue.vue";

export default defineComponent({
    name: "TaskVue",
    components: {
    StopwatchVue,
    BoxVue
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>