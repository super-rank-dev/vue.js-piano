<script setup>
import { onMounted, watch, ref } from 'vue';
import { useKeyEventStore } from '../../stores/counter';

const { pianoEvent } = useKeyEventStore();

const container = ref(null);

onMounted(() => {
    watch(pianoEvent, (code) => {
        const keyElements = container.value.getElementsByClassName('key');
        Array.from(keyElements).forEach(key => key.classList.remove('active'));
        Array.from(code).forEach(c => {
            const octave = container.value.getElementsByClassName('octave')[parseInt(c[c.length - 1])];
            const key = octave.getElementsByClassName(c.slice(0, c.length - 1) + '')[0];
            key.classList.add('active');
        });
    });
});
</script>
<template>
    <div class="container" ref="container">
        <div class="piano">
            <div class="octave">
                <div class="keyboard-main">
                    <div class="key C"></div>
                    <div class="key D"></div>
                    <div class="key E"></div>
                    <div class="key F"></div>
                    <div class="key G"></div>
                    <div class="key A"></div>
                    <div class="key B"></div>
                </div>
                <div class="keyboard-black">
                    <div class="key key-black C#"></div>
                    <div class="key key-black D#"></div>
                    <div class="key key-black F"></div>
                    <div class="key key-black F#"></div>
                    <div class="key key-black G#"></div>
                    <div class="key key-black A#"></div>
                </div>
            </div>
            <div class="octave">
                <div class="keyboard-main">
                    <div class="key C"></div>
                    <div class="key D"></div>
                    <div class="key E"></div>
                    <div class="key F"></div>
                    <div class="key G"></div>
                    <div class="key A"></div>
                    <div class="key B"></div>
                </div>
                <div class="keyboard-black">
                    <div class="key key-black C#"></div>
                    <div class="key key-black D#"></div>
                    <div class="key key-black F"></div>
                    <div class="key key-black F#"></div>
                    <div class="key key-black G#"></div>
                    <div class="key key-black A#"></div>
                </div>
            </div>
            <div class="octave">
                <div class="keyboard-main">
                    <div class="key C"></div>
                    <div class="key D"></div>
                    <div class="key E"></div>
                    <div class="key F"></div>
                    <div class="key G"></div>
                    <div class="key A"></div>
                    <div class="key B"></div>
                </div>
                <div class="keyboard-black">
                    <div class="key key-black C#"></div>
                    <div class="key key-black D#"></div>
                    <div class="key key-black F"></div>
                    <div class="key key-black F#"></div>
                    <div class="key key-black G#"></div>
                    <div class="key key-black A#"></div>
                </div>
            </div>
            <div class="octave">
                <div class="keyboard-main">
                    <div class="key C"></div>
                    <div class="key D"></div>
                    <div class="key E"></div>
                    <div class="key F"></div>
                    <div class="key G"></div>
                    <div class="key A"></div>
                    <div class="key B"></div>
                </div>
                <div class="keyboard-black">
                    <div class="key key-black C#"></div>
                    <div class="key key-black D#"></div>
                    <div class="key key-black F"></div>
                    <div class="key key-black F#"></div>
                    <div class="key key-black G#"></div>
                    <div class="key key-black A#"></div>
                </div>
            </div>
            <div class="octave">
                <div class="keyboard-main">
                    <div class="key C"></div>
                    <div class="key D"></div>
                    <div class="key E"></div>
                    <div class="key F"></div>
                    <div class="key G"></div>
                    <div class="key A"></div>
                    <div class="key B"></div>
                </div>
                <div class="keyboard-black">
                    <div class="key key-black C#"></div>
                    <div class="key key-black D#"></div>
                    <div class="key key-black F"></div>
                    <div class="key key-black F#"></div>
                    <div class="key key-black G#"></div>
                    <div class="key key-black A#"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    padding: 30px 70px;
}

.piano {
    display: flex;
    width: 100%;
}

.octave {
    flex-grow: 1;
    position: relative;
}

.keyboard-black div:nth-child(3) {
    visibility: hidden;
}

.keyboard-main {
    display: flex;
}

.keyboard-black {
    position: absolute;
    display: flex;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 7%;
}

.key {
    flex-grow: 1;
    height: 100px;
    background-color: lightgrey;
    margin: 2px;
    border-radius: 0 0 2px 2px;
    transition: 0.2s;
    box-shadow: 2px 2px 2px;
    cursor: pointer;
}

.key:hover {
    background-color: grey;
}

.key:active {
    /* background-color: orange; */
    margin: 4px 0 0 4px;
    background-color: grey;
    box-shadow: none;
}

.key-black {
    /* position: absolute; */
    width: 20px;
    height: 80px;
    background-color: black;
    transition: 0.2s;
    margin: 0 2%;
    box-shadow: 2px 2px 2px black;
}

.key-black:active {
    margin: 0 0 0 6px;
    box-shadow: 1px 1px 1px black;
}

.active {
    /* background-color: orange; */
    margin: 4px 0 0 4px;
    background-color: grey;
    box-shadow: none;
}
</style>