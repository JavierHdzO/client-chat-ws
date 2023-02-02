<template>
    <div class="container-config">
        <div class="container-setting-left">
            <span 
                @click="menuToggle"
                class="material-symbols-outlined">menu</span>
        </div>

        <div class="container-setting-right">
            <span class="material-symbols-outlined">Settings</span>
            <div>
                <button class="btn-logout" @click="logout">Log out</button>
            </div>
        </div>
        
    </div>

</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import useAuthWS from '../composables/useAuthWS'

    const emit = defineEmits(['menu-status'])

    const { logout } = useAuthWS()

    const status = ref(false)

    const menuToggle = () => {
        console.log('config-optin-emit');
        status.value = !status.value
        
        emit('menu-status', status.value)
    }

</script>

<style scoped>

.container-config{
    position:  fixed;
    top: 40px;
    right: 40px;
    display: flex;
    justify-content: space-between;
}

.container-setting-right{
    height: 100%;
    display: flex;
}

.container-setting-left{
    position: fixed;
    left: 30px;
}

.btn-logout{
    background-color: #4c514f5b;
    border-color: #1DA072;
}

.btn-logout:hover{
    box-shadow: 3px 2px 3px #1DA072;
}

.text-white{
    color: #FFF;
}


.material-symbols-outlined {
    color: #FFF;
    margin-right: 10px;
    font-size: 2rem;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}



</style>