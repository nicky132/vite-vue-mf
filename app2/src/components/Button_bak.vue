<template>
  <button @click="handleClick">{{ buttonText }}</button>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    buttonText: {
      type: [String, Number],
      default: "App2 button",
    },
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("click");
    };

    return {
      handleClick,
    };
  },
};
</script>
