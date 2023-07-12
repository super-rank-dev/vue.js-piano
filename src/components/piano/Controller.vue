<script setup>
import { onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useKeyEventStore } from '@/stores/counter';

const keyMap = {
    'C0': ['KeyZ'],
    'D0': ['KeyX'],
    'E0': ['KeyC'],
    'F0': ['KeyV'],
    'G0': ['KeyB'],
    'A0': ['KeyN'],
    'B0': ['KeyM', 'CapsLock'],
    'C1': ['Comma', 'KeyA'],
    'D1': ['Period', 'KeyS'],
    'E1': ['Slash', 'KeyD'],
    'F1': ['ShiftRight', 'KeyF'],
    'G1': ['KeyG', 'Numpad0'],
    'A1': ['KeyH', 'NumpadDecimal'],
    'B1': ['Tab', 'KeyJ', 'NumpadEnter'],
    // 'A1': ['KeyH'],
    // 'B1': ['Tab', 'KeyJ'],
    // 'Ab1': ['Space'],
    // 'Gb2': ['NumpadDecimal'],
    // 'Ab2': ['NumpadEnter'],
    'C2': ['KeyK', 'KeyQ', 'Numpad1'],
    'D2': ['KeyL', 'KeyW', 'Numpad2'],
    'E2': ['Semicolon', 'KeyE', 'Numpad3'],
    'F2': ['Quote', 'KeyR', 'Numpad4'],
    'G2': ['Enter', 'KeyT', 'Numpad5'],
    'A2': ['KeyY', 'Numpad6'],
    'B2': ['KeyU', 'Backquote', 'Numpad7'],
    'C3': ['KeyI', 'Digit1', 'Numpad8'],
    'D3': ['KeyO', 'Digit2', 'Numpad9'],
    'E3': ['KeyP', 'Digit3', 'NumpadAdd'],
    'F3': ['BracketLeft', 'Digit4', 'NumLock'],
    'G3': ['BracketRight', 'Digit5', 'NumpadDivide'],
    'A3': ['Backslash', 'Digit6', 'NumpadMultiply'],
    'B3': ['Digit7', 'NumpadSubtract'],
    'C4': ['Digit8'],
    'D4': ['Digit9'],
    'E4': ['Digit0'],
    'F4': ['Minus'],
    'G4': ['Equal'],
    'A4': ['Backspace']
};

const sign = {};

const playAudio = (code) => {
    if (sign[code]) return false;
    const audio = document.getElementById(code);
    audio.currentTime = 0;
    audio.play();
    sign[code] = true;
    return true;
}

const {
    pushKeyEvent,
    popKeyEvent,
    pushMusicCode,
    popMusicCode
} = useKeyEventStore();

onMounted(() => {
    useEventListener(document, "keydown", (event) => {
        Object.keys(keyMap).forEach(key => {
            if (keyMap[key].findIndex(code => code === event.code) >= 0) {
                if (playAudio(key)) {
                    pushKeyEvent(event.code);
                    pushMusicCode(key);
                }
            }
        })
    });
    useEventListener(document, "keyup", (event) => {
        Object.keys(keyMap).forEach(key => {
            if (keyMap[key].findIndex(code => code === event.code) >= 0) {
                sign[key] = false;
                popKeyEvent(event.code);
                popMusicCode(key);
            }
        })
    });
});

</script>

<template>
    
    <audio id="C0" src="src/assets/audio/C2.mp3"></audio>
    <audio id="D0" src="src/assets/audio/D2.mp3"></audio>
    <audio id="E0" src="src/assets/audio/E2.mp3"></audio>
    <audio id="F0" src="src/assets/audio/F2.mp3"></audio>
    <audio id="G0" src="src/assets/audio/G2.mp3"></audio>
    <audio id="A0" src="src/assets/audio/A2.mp3"></audio>
    <audio id="B0" src="src/assets/audio/B2.mp3"></audio>

    <audio id="C1" src="src/assets/audio/C3.mp3"></audio>
    <audio id="D1" src="src/assets/audio/D3.mp3"></audio>
    <audio id="E1" src="src/assets/audio/E3.mp3"></audio>
    <audio id="F1" src="src/assets/audio/F3.mp3"></audio>
    <audio id="G1" src="src/assets/audio/G3.mp3"></audio>
    <audio id="A1" src="src/assets/audio/A3.mp3"></audio>
    <audio id="B1" src="src/assets/audio/B3.mp3"></audio>

    <audio id="Ab1" src="src/assets/audio/Ab3.mp3"></audio>
    <audio id="Gb2" src="src/assets/audio/Gb4.mp3"></audio>
    <audio id="Ab2" src="src/assets/audio/Ab4.mp3"></audio>

    <audio id="C2" src="src/assets/audio/C4.mp3"></audio>
    <audio id="D2" src="src/assets/audio/D4.mp3"></audio>
    <audio id="E2" src="src/assets/audio/E4.mp3"></audio>
    <audio id="F2" src="src/assets/audio/F4.mp3"></audio>
    <audio id="G2" src="src/assets/audio/G4.mp3"></audio>
    <audio id="A2" src="src/assets/audio/A4.mp3"></audio>
    <audio id="B2" src="src/assets/audio/B4.mp3"></audio>

    <audio id="C3" src="src/assets/audio/C5.mp3"></audio>
    <audio id="D3" src="src/assets/audio/D5.mp3"></audio>
    <audio id="E3" src="src/assets/audio/E5.mp3"></audio>
    <audio id="F3" src="src/assets/audio/F5.mp3"></audio>
    <audio id="G3" src="src/assets/audio/G5.mp3"></audio>
    <audio id="A3" src="src/assets/audio/A5.mp3"></audio>
    <audio id="B3" src="src/assets/audio/B5.mp3"></audio>

    <audio id="C4" src="src/assets/audio/C6.mp3"></audio>
    <audio id="D4" src="src/assets/audio/D6.mp3"></audio>
    <audio id="E4" src="src/assets/audio/E6.mp3"></audio>
    <audio id="F4" src="src/assets/audio/F6.mp3"></audio>
    <audio id="G4" src="src/assets/audio/G6.mp3"></audio>
    <audio id="A4" src="src/assets/audio/A6.mp3"></audio>
    <audio id="B4" src="src/assets/audio/B6.mp3"></audio>

</template>