<template >
 <div class="container">
    <div>
        <label>Email</label>
        <input 
            v-model="form.email"
            placeholder="Email"/>
        <label>Password</label>
        <input 
            v-model="form.password"
            type="password" placeholder="Password"/>
        <button @click="signIn">Confirm</button>
    </div>

 </div>

</template>


<script setup lang="ts">

    import useAuthWS from '../composables/useAuthWS'

    const { form, signIn } = useAuthWS()

</script>

<style scoped>

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

@media screen and ( max-width: 770px){
    .container {
        width: 100%;
    }

    .container > div{
        width: 100%;
    }
}

</style>