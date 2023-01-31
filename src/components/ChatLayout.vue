<script setup lang="ts">
import useSocketChat from '../composables/useSocket'

const { isOnSocketClient, onlineUsers, submitForm, message } = useSocketChat( )

</script>

<template>
  <div>
    <h1>Chischat</h1>
    <span>{{isOnSocketClient}}</span>

    <div class="chat-container">
      <h6>Chat</h6>
      <div>
        <ul class="chat-messages-content">
          <li class="chat-message align-left"></li>
          <li class="chat-message align-right"></li>
        </ul>
      </div>
    </div>
    <div class="message-container">
      <form @submit.prevent="submitForm()">
        <input 
          v-model="message"
          placeholer="type a message.."/>
          
          <button>Send</button>
      </form>
    </div>

    <aside>
      <h6>User online</h6>
      <ul class="clients-ul">
        <li v-for="client in onlineUsers" :key="client.userId">
          <p>ID:{{client}}</p>
        </li>
      </ul>
    </aside>
    
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

h6{
  color: #000;
  font-size: 1.5rem;
  margin: 5px;
}

aside {
  position: fixed;
  left: 0px;
  width: 280px;
  background-color: #FFFFFF;
}

ul {
  padding: 0;
  width: auto;
}

li {
  cursor: pointer;
  border: 1px solid black;
  color: black;
  font-size: 1rem;
  list-style-type: none;
  width: auto;
  z-index: 999;
}

li:hover{
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.7);
}

.chat-container {
  position:fixed;

}

.message-container {
  position: fixed;
  right: 10px;
  bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

form > input {

  border-radius: 5px;
  height: 30px;
  width: 300px;

}


form > button {
  border-radius: 10px;
}


</style>
