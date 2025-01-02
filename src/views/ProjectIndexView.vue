<template>
  <div>
    <h2>My projects</h2>
<!-- TODO quasar carousel for projects, and drop down list-->
    <router-link to="/projects/bsky-event-handlers"> Bluesky event handlers</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectIndex',
})
</script>

<style scoped lang="scss">

</style>
