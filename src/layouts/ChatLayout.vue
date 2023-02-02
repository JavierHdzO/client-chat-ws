<template>
    
    <config-options
        @menu-status="menuToogle"
    ></config-options>
    <div class="container-panel">
        <users-list
            :menu="menu"
        ></users-list> 
        <message-panel
            :menu="menu"
        ></message-panel>

    </div>
</template>

<script setup lang="ts">
import ConfigOptions from '../components/ConfigOptions.vue'
import UsersList from '../components/UsersList.vue'
import MessagePanel from '../components/MessagePanel.vue'
import { ref } from 'vue';

const menu = ref(false)

const menuToogle = ( status:boolean ) => {
    console.log('user-list-emit', menu.value);
    menu.value = status
}

</script>

<style scoped>

.container-panel{
    display: flex;
    justify-content: space-between;
    height: 80vh;
    width: 100%;
}
</style>