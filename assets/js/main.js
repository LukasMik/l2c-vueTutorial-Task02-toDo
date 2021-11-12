const app = {
    data() {
        return {
            typeTodo: "",
            todos: ["Welcome"]
        }
    },

    mounted() {
        this.focusInput()
    },

    methods: {
        add() {
            if (!this.typeTodo) return
            this.todos.push(
                this.typeTodo
            )
            this.typeTodo = ""
        },
        reset() {
            this.typeTodo = ""
        },

        remove(todos) {
            this.todos = this.todos.filter(item => item !== todos)
            console.log(todo)
        },

        focusInput() {
            this.$refs.focusInp.focus()
        },
    },
}


Vue.createApp(app).mount("#app")