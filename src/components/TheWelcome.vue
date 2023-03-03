<script setup lang="ts">
import ListItem from './ListItem.vue'
</script>

<template>
  <ListItem>
   
    <template #heading>Docusadadsadadentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </ListItem>

  <ListItem>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </ListItem>
</template>
