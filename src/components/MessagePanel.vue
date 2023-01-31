<template>
    <div v-if="!isUserSelected"> </div>

    <div
        v-else 
        class="container-message-panel">
        <ul>
            <li class="item-align-end">
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
            </li>
        </ul>
        <div class="container-input">
            <input
                v-model="message"
                type="text">
            <button @click="emitMessageToServer" >Send</button>
        </div>
    </div>
</template>

<script setup lang="ts" >
import { storeToRefs } from 'pinia'
import { useChatStore } from '../store/chat';
import useSocketChat from '../composables/useSocket'

const chatStore = useChatStore()
const { emitMessageToServer, message } = useSocketChat()

const { isUserSelected } = storeToRefs(chatStore)



</script>

<style scoped>
.container-message-panel{
    width: 70%;
}

ul {
    height: 90%;
    padding: 0;

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
    background-color: black;
    
    
}

.message-text{
    padding: 15px;
    border-radius: 16px;
    background-color: rgba(29, 160, 114, 0.9);
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
    margin-right: 10px;
}
</style>