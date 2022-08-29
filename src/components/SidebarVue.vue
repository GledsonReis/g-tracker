<template>
  <header>
    <!-- Adicionar imagem "G-tracker" -->
    <h1>G-tracker</h1>


    <div class="dark-mode-switch">
      <div class='toggle-switch'>
        <label>
          <input type='checkbox' @click="changeMode" :checked="!darkMode">
          <span class='slider'></span>
        </label>
      </div>
      <a href='https://codepen.io/fydsa/pen/abwdpep'>
        Adapted from the design from Saba
      </a>
    </div>

    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fa fa-tasks"></i>
            Terefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fa fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  emits: ["onChangeMode"],
  data() {
    return {
      darkMode: false
    }
  },
  computed: {
    darkModeSwitch() {
      if (this.darkMode == true) {
        return "dark-mode"
      }
      return ""
    }
  },
  methods: {
    changeMode() {
      this.darkMode = !this.darkMode
      this.$emit("onChangeMode", this.darkMode)
    }
  }
})
</script>

<style>
header {
  background: dodgerblue;
  width: 100%;
  height: 100vh;
}

header>h1 {
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
  color: white;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5em;
    height: auto;
  }
}

:root {
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
}

.dark-mode-switch {
  width: 100%;
  height: 100px;
}

.toggle-switch {
  margin: 10px auto;
  position: relative;
  width: 100px;
  height: 50px;
}

label {
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: var(--dark);
  border-radius: 50px;
  cursor: pointer;
}

input {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
}

input:checked~.slider {
  background-color: var(--light);
}

.slider::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 9px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: inset 14px -4px 0px 0px var(--light);
  background-color: var(--dark);
  transition: 0.3s;
}

input:checked~.slider::before {
  transform: translateX(47px);
  background-color: var(--dark);
  box-shadow: none;
}

.dark-mode-switch a {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 10px;
  text-decoration: none;
  color: var(--link);
  font-weight: bold;
  margin: auto;
}

.dark-mode-switch a:hover {
  color: var(--link-hover);
}

ul {
  list-style-type: none;
}

.panel li {
  margin: 8px 12px;
  padding: 4px 8px;
}

.link {
  color: #fff;
}

.link:hover {
  color: #FAF0CA;
  margin-left: 18px;
  background-color: rgb(25, 110, 195);
}

.link.router-link-active {
  color: #FAF0CA;
  margin-left: 18px;
}
</style>