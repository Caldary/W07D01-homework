import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            items: [
                {todo: "Change the baby", isDone: true},
                {todo: "Feed the baby", isDone: false},
                {todo: "Put baby to sleep", isDone: false},
            ],
            newItem: ""
        },
        methods: {
            saveNewItem: function(){
                this.items.push({
                    todo: this.newItem,
                    isDone: false
                }),
                this.newItem = "";
            },
            itemDone: function(index){
                this.items[index].isDone = true;
            }
        }
    
    });
});