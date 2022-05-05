const dragdrop = Vue.createApp({

        data() {
            return {
                items: [{
                        id: 0,
                        title: 'Item A',
                        list: 1
                    },
                    {
                        id: 1,
                        title: 'Item B',
                        list: 1
                    },
                    {
                        id: 2,
                        title: 'Item C',
                        list: 2
                    }
                ]
            }
        },

        computed: {
            maniqui() {
                return this.items.filter(item => item.list === 1)
            },
            cataleg() {
                return this.items.filter(item => item.list === 2)
            }
        },

        methods: {
            startDrag(evt, item) {
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                evt.dataTransfer.setData('itemID', item.id)
            },
            onDrop(evt, list) {
                const itemID = evt.dataTransfer.getData('itemID')
                const item = this.items.find(item => item.id == itemID)
                item.list = list
            }
        }
    }



);

dragdrop.mount("#dragdrop");