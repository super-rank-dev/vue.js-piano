import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return { count, doubleCount, increment }
})

export const useKeyEventStore = defineStore('key-event', {
    state: () => {
        return { keyEvent: [], pianoEvent: [] };
    },
    actions: {
        pushKeyEvent(code) {
            this.keyEvent.push(code);
        },
        popKeyEvent(code) {
            this.keyEvent.splice(this.keyEvent.findIndex(e => e !== code), 1);
        },
        pushMusicCode(code) {
            this.pianoEvent.push(code);
        },
        popMusicCode(code) {
            this.pianoEvent.splice(this.pianoEvent.findIndex(e => e !== code), 1);
        }
    }
})