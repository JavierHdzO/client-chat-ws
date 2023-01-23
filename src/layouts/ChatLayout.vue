<template>
    <div class="container-panel">
        <users-list></users-list> 
        <message-panel></message-panel>

    </div>
</template>

<script setup lang="ts">
import UsersList from '../components/UsersList.vue'
import MessagePanel from '../components/MessagePanel.vue';

</script>

<style scoped>

.container-panel{
    display: flex;
    justify-content: space-between;
    height: 80vh;
    width: 100%;
}
</style>