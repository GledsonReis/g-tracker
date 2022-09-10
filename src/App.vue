<template>
  <main class="columns is-gapless is-multline" :class="{'dark-mode': darkMode}">
    <div class="column is-one-quarter">
      <SidebarVue @onChangeMode="changeMode"/>
    </div>
    <div class="column is-three-quarter content">
      <Notification />
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SidebarVue from './components/SidebarVue.vue';
import Notification from './components/Notification.vue';

export default defineComponent({
  name: "App",
  components: {
    SidebarVue,
    Notification
},
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    changeMode(darkMode: boolean) {
      this.darkMode = darkMode;
    }
  }
});
</script>

<style>
.lista {
  padding: 1.5rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
  --bg-input-text: unset;
  --input-border-color: inherit;
  --bg-task:  rgb(200, 208, 240);
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
  --bg-input-text: #434360;
  --input-border-color: dodgerblue;
  --bg-task: #5daeff;
}

.content {
  background: var(--bg-primary)
}

.dark-mode input[type="text"] {
  background: var(--bg-input-text);
  border-color: var(--input-border-color);
  color: var(--text-primary);
}

.dark-mode input[type="text"]::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--text-primary);
  opacity: 1;
}

.dark-mode input[type="text"]::-ms-input-placeholder { /* Microsoft Edge */
  color: var(--text-primary);
}

</style>
