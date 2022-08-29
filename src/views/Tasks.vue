<template>
    <FormVue @onSaveTask="saveTask" />
    <div class="lista">
    <TaskVue v-for="(task, index) in tasks " :key="index" :task="task" />
    <BoxVue v-if="taskListEmpty">Nenhuma tarefa registrada ainda :(</BoxVue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormVue from '../components/FormVue.vue';
import TaskVue from '../components/TaskVue.vue';
import ITask from '../interfaces/ITask';
import BoxVue from '../components/BoxVue.vue';

export default defineComponent({
  name: "App",
  components: {
    FormVue,
    TaskVue,
    BoxVue
  },
  data() {
    return {
      tasks: [] as ITask[]
    }
  },
  computed: {
    taskListEmpty () : boolean {
      return this.tasks.length === 0;
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    }   
  }
});
</script>
