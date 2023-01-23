<template>
    <div class="container-message-panel">
        <ul>
            <li class="item-align-end">
                <div class="message-contant">
                    <span>User</span>
                    <span>Message</span>
                </div>
            </li>
            <li class="item-align-start">
                <div class="message-contant">
                    <span>User</span>
                    <span>Message</span>
                </div>
            </li>
            <li>message</li>
            <li>message</li>
            <li>message</li>
            <li>message</li>
            <li>message</li>
            <li>message</li>
        </ul>
        <div class="container-input">
            <input type="text">
            <button>Send</button>
        </div>
    </div>
</template>

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
    background-color: blue;
}


</style>