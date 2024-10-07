const app = Vue.createApp({
    data() {
        return {
            url:"https://www.google.com", 
            showBooks: true,
            books:[
                {title:'title 1', author:'author1'},
                {title:'title 1', author:'author1'},
                {title:'title 1', author:'author1'},
                {title:'title 1', author:'author1'},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
            console.log('hide and show')
        },
        handleEvent(e, data) {
            console.log(e, e.type )
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')