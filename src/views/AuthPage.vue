<template >
 <div>
    <button 
        class="action-auth"
        :class="{ 'selected': selected }"
        @click="selected=true"
        >Register</button>
    <button 
        class="action-auth"
        :class="{'selected': selected? false:true}"
        @click="selected=false"
        >Sign In</button>
 </div>

 <div class="content">
    <div class="container">
    
    <div v-if="selected">
        <label>Name</label>
        <input
            v-model="form.fullName" 
            type="text" placeholder="Full Name">
        <label>Email</label>
        <input
            v-model="form.email" 
            type="email" placeholder="Email">
        <label>Password</label>
        <input
            v-model="form.password" 
            type="password" placeholder="Password">
        <label>Confirm Password</label>
        <input
            v-model="form.confirm_password" 
            type="password" placeholder="Confirm Password">
        <p>Already have an account? <a @click="selected =false">Sign in</a></p>
        <button @click="signUp">Save</button>
    </div>
    <div v-else >
        <label>Email</label>
        <input 
            v-model="form.email"
            placeholder="Email"/>
        <label>Password</label>
        <input 
            v-model="form.password"
            type="password" placeholder="Password"/>
        <p><a @click="selected = true">Create an account</a></p>
        <button @click="signIn">Confirm</button>
    </div>

 </div>
 </div>
 

</template>


<script setup lang="ts">
    import { ref } from 'vue'
    import { useAuthWS } from '../composables/useAuthWS'

    const selected = ref(true)

    const { form, signIn, signUp } = useAuthWS()


</script>

<style scoped>

a {
    cursor: pointer;
    margin-bottom: 0;
    padding-bottom: 0;
}

.content{
    display: flex;
    justify-content: center;
}

.container {

    background-color: rgba(0,0,0, 0.5);
    border-radius: 16px;
    height: 70vh;
    width: 30vw;

}

.container > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
}

input {
    width: 300px;
    height: 39px;
    border-radius: 16px;
    padding-left: 20px;
}

input::placeholder {
    font-weight: bold;
    color: #FFF;
    opacity: 0.5;
    padding-left: 5px;
}

input:focus {
    box-shadow: 3px 3px 2px white;
    outline: none;
}

label{
    width:300px;
    text-align: start;
    margin-top: 30px;
}

button {
    background-color: rgba( 16, 213,145,0.77);
    margin-top: 40px;
    width: 200px;
}

button:focus{
    box-shadow: 5px 5px 3px green;
    outline: none;
}

@media screen and ( max-width: 1200px){
    .container {
        width: 100%;
    }

    .container > div{
        width: 100%;
    }

    input {
        width: 250px;
    }

    label {
        margin-left: 20px;
    }

}

.action-auth{
    border-radius: 3px;
    padding: 4px;
    width: 100px;
    margin-left: 5px;
    background-color: rgba(0,0,0, 0.5); 
    border: 1px solid rgba( 16, 213,145,0.77);
}

.action-auth:focus {
    box-shadow: none;
}

.action-auth.selected {
    box-shadow: 3px 3px 3px rgba( 16, 213,145,0.77);
}



</style>