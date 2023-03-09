<script setup lang="ts">
    
</script>
<template>
    <button >
        <slot></slot>
    </button>
</template>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.3rem 1.5rem;
  font: inherit;  
  font-size: 1.7rem;
  background-color: transparent;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  cursor: pointer;
  border-radius: 3px;
  margin-right: 0.5rem;
  display: inline-block;
}
a:hover,
a:active,
button:hover,
button:active {
  background-color: hsla(160, 100%, 37%, 1);
  border-color: hsla(160, 100%, 37%, 1);
}
</style>