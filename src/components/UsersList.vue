<template>
    <div class="container-user-list">
        <aside>
            <ul>
                <li>
                    Yoursevel
                    <span><StatusIcon /> Disconnected</span>
                </li>
                <li>
                    Users online
                    <span><StatusIcon :connected="true" /> Connected</span>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script setup lang="ts">
    import StatusIcon from '../components/StatusIcon.vue'

</script>

<style scoped>

    aside {
        height: 100%;
    }

    ul{
        padding: 0;
    }

    li{
        display: flex;
        flex-direction: column;
        list-style: none;
        height: 70px;
        padding: 0;
        text-align: start;
        width: 100%;

    }

    
    .container-user-list{
        width: 30%;
    }

    
</style>