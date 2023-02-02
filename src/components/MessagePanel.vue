<template>
    <div v-if="!isUserSelected"> </div>

    <div
        v-show="isUserSelected" 
        class="container-message-panel menu-hidden"
        
        >
        
        <div 
            class="container-message-ul"
            :class="{'show':props.menu}"
            >
            <ul >
            <!-- <li class="item-align-end">
                <div class="message-contant">
                    <div class="text-align-start ml5">User</div>
                    <div class="message-text  text-align-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, cum.</div>
                </div>
            </li>
            <li class="item-align-start">
                <div class="message-contant">
                    <div class="text-align-end item-align-start mr5">User</div>
                    <div class="message-text  text-align-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, cum.</div>
                </div>
            </li> -->

            <li 
                v-for="(message, index) in getMessages" :key="index"
                :class="{'item-align-start':isMainUser(message.name), 'item-align-end':!isMainUser(message.name)}">
                <div 
                    class="message-contant">
                    <div 
                    :class="{
                        'text-align-end':isMainUser(message.name) , 'item-align-start':isMainUser(message.name), 'mr5':isMainUser(message.name),
                        'text-align-start':!isMainUser(message.name), 'ml5':!isMainUser(message.name)}"
                        >{{message.name}}</div>
                    <div 
                    class="message-text  text-align-start"
                    :class="{'user-color':isMainUser(message.name), 'friend-color':!isMainUser(message.name)}"
                    >{{message.message}}</div>
                </div>
            </li>
            <div ref="ul"></div>
        </ul>
        </div>
        <div class="container-input">
            <input
                v-model="message"
                type="text">
            <button @click="emitMessageToServer" >Send</button>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { ref, watch, defineProps } from 'vue'
import { storeToRefs } from 'pinia'
import { useChatStore } from '../store/chat'
import useChat from '../composables/useChat'

const props = defineProps({
    menu:{
        type: Boolean,
        default:false
    }
})
const chatStore = useChatStore()
const { isUserSelected } = storeToRefs(chatStore)
const ul = ref<any>(null)


const { emitMessageToServer, message, getMessages, isMainUser } = useChat()


watch( getMessages  , () => {
    setTimeout(()=>{
        ul.value?.scrollIntoView({behavior: "smooth", block: "center"})
        
      }, 1)
    
}, { deep: true })

</script>

<style scoped>
.container-message-panel{
    width: 70%;
}

.container-message-ul{
    height: 85%;
    overflow-y: hidden;
    padding-bottom: 40px;
    margin-bottom: 40px;
    overflow: scroll;
    overflow-x: hidden;
}

ul {
    height: 100%;
    padding: 0;
    margin-right: 15px;

}

li {
    list-style: none;
    margin: 20px 0 ;
    max-height: 100px;
    
}

input {
    width: 50%;
}

button {
    background-color: rgba(29, 160, 114, 0.9);
    border-radius: 0;
    margin-left: 5px;
}

.container-input {
    display: inline-flex;
    justify-content: end;
    width: 100%;
}

.item-align-end {

    display: flex;
    justify-content: start;
}

.item-align-start{
    display: flex;
    justify-content: end;
}

.message-contant{
    width: 400px;
    max-width: 500px;
    
    
}

.message-text{
    padding: 15px;
    border-radius: 16px;
    background-color: #1DA072;
}

.text-align-start{
    text-align: start;
}

.text-align-end {
    text-align: end;
}

.ml5 {
    margin-left: 15px;
}

.mr5{
    margin-right: 15px;
}

.user-color{
    background-color: #149366;
}
.friend-color{
    background-color: #04BF8A;
}





@media screen and (max-width:768px) {
    .menu-hidden{
        width: 100%;
    }

    .show {
        position: relative;
        left: 30%;
        overflow-x: hidden;
    }

    .container-message-ul{
        padding: 0px;
        margin-bottom: 20px;
    }
}

@media screen and (max-width:768px) {
    .menu-hidden{
        width: 100%;
    }

    .show {
        position: relative;
        left: 30%;
        overflow-x: hidden;
    }

    .container-message-ul{
        padding: 0px;
        margin-bottom: 20px;
    }
}




</style>