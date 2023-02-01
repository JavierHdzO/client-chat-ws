<template>
    <div v-if="!isUserSelected"> </div>

    <div
        v-else 
        class="container-message-panel">
        
        <div class="container-message-ul">
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
import { storeToRefs } from 'pinia'
import { useChatStore } from '../store/chat'
import useChat from '../composables/useChat'

const chatStore = useChatStore()
const { isUserSelected } = storeToRefs(chatStore)

const { emitMessageToServer, message, getMessages, isMainUser } = useChat()




</script>

<style scoped>
.container-message-panel{
    width: 70%;
}

.container-message-ul{
    height: 90%;
    overflow-y: hidden;
    padding-bottom: 40px;
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
    background-color: black;
    
    
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
</style>