<template>
  <div>
    <h1>host</h1>
    <button @click="setModule('none')">没有组件</button>
    <button @click="setModule('app1')">app1</button>
    <button @click="setModule('app2')">app2</button>
    <div>
      <h2>选择组件: {{ module }}</h2>
      <Suspense>
        <template #default>
          <component :is="Module" />
        </template>
        <template #fallback> 加载组件中... </template>
      </Suspense>
    </div>
    <div>
      <h2>其他组件:</h2>
      <Suspense>
        <template #default>
          <component :is="ComponentsMap.App2Button" @click="app1Method" />
        </template>
        <template #fallback> 加载组件中... </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Suspense, onMounted } from "vue";
import modules from "../modules.json";
import app1Method from "app1/method";

const ModuleMap = {
  none: () => null,
  app1: import("app1/index"),
  app2: import("app2/Button"),
};

const ComponentsMap = {
  App2Button: import("app2/Button"),
};
console.log("Component=", ComponentsMap);
export default defineComponent({
  setup() {
    const module = ref<string>("none");
    const Module = ref<any>(null);

    const setModule = (moduleName: string) => {
      module.value = moduleName;
    };

    onMounted(async () => {
      if (Object.keys(modules).length !== Object.keys(ModuleMap).length - 1) {
        throw new Error("ModuleMap and modules.json are out of sync");
      }

      Module.value = (await ModuleMap[module.value]).default;
    });

    return {
      module,
      setModule,
      Module,
      ComponentsMap,
      app1Method,
    };
  },
});
</script>
