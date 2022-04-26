<template>
  <article v-html="content" class="markdown-body"></article>
</template>
<script lang="ts" >
import { ref } from "vue";
export default {
  props: {
    path: {
      type: String,
      require: true,
    },
  },
  setup(props, context) {
    const content = ref<string>(null);
    import(props.path).then((result) => {
        content.value = result.default;
    });
    return { content };
  },
};
</script> 