<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  buttonText: {
    type: [String, Number],
    default: "App2 button",
  },
});

const { emit } = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <button onClick="{handleClick}">{props.buttonText}</button>
</template>
