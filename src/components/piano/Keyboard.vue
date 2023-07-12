<script setup>
import { onMounted, watch, ref } from 'vue';
import { useKeyEventStore } from '../../stores/counter';

const { keyEvent } = useKeyEventStore();

const container = ref(null);
const mainpadRef = ref(null);
const numpadRef = ref(null);

onMounted(() => {
    watch(keyEvent, (event) => {
        const keyElements = container.value.getElementsByClassName('key');
        Array.from(keyElements).forEach(key => key.classList.remove('active'));
        let filterKey = '';
        event.forEach(code => {
            if (code.includes('Num')) {
                switch (code) {
                    case 'NumLock':
                        filterKey = 'lock';
                        break;
                    case 'NumpadDivide':
                        filterKey = '/';
                        break;
                    case 'NumpadMultiply':
                        filterKey = '*';
                        break;
                    case 'NumpadAdd':
                        filterKey = '+';
                        break;
                    case 'NumpadSubtract':
                        filterKey = '-';
                        break;
                    case 'NumpadDecimal':
                        filterKey = '.';
                        break;
                    case 'NumpadEnter':
                        filterKey = 'enter';
                        break;
                    default:
                        filterKey = code.slice(6, code.length);
                        break;
                }
                numpadRef.value.querySelectorAll('.key').forEach(key => {
                    if (key.textContent === filterKey) {
                        key.classList.add('active');
                    }
                });
            }
            else {
                if (code.includes('Key')) {
                    filterKey = code.slice(3, code.length);
                }
                else if (code.includes('Digit')) {
                    filterKey = code.slice(5, code.length);
                }
                else {
                    switch (code) {
                        case 'Backquote':
                            filterKey = '`';
                            break;
                        case 'Minus':
                            filterKey = '-';
                            break;
                        case 'Equal':
                            filterKey = '+';
                            break;
                        case 'Backspace':
                            filterKey = 'backspace';
                            break;
                        case 'Tab':
                            filterKey = 'tab';
                            break;
                        case 'BracketLeft':
                            filterKey = '[';
                            break;
                        case 'BracketRight':
                            filterKey = ']';
                            break;
                        case 'Backslash':
                            filterKey = '\\';
                            break;
                        case 'CapsLock':
                            filterKey = 'caps lock';
                            break;
                        case 'Semicolon':
                            filterKey = ';';
                            break;
                        case 'Quote':
                            filterKey = '\'';
                            break;
                        case 'Enter':
                            filterKey = 'enter';
                            break;
                        case 'ShiftRight':
                            filterKey = 'shift';
                            break;
                        case 'Comma':
                            filterKey = ',';
                            break;
                        case 'Period':
                            filterKey = '.';
                            break;
                        case 'Slash':
                            filterKey = '/';
                            break;
                        default:
                            break;
                    }
                }
                mainpadRef.value.querySelectorAll('.key').forEach(key => {
                    if (key.textContent === filterKey) {
                        key.classList.add('active');
                    }
                });
            }
        });
    });
});
</script>
<template>
    <div class="container" unselectable="on" onselectstart="return false;" onselectend="return false;" ref="container">
        <div class="keyboard">
            <div class="keyboard-mainpad" ref="mainpadRef">
                <div class="keyboard-row">
                    <div class="key key-backquote">`</div>
                    <div class="key">1</div>
                    <div class="key">2</div>
                    <div class="key">3</div>
                    <div class="key">4</div>
                    <div class="key">5</div>
                    <div class="key">6</div>
                    <div class="key">7</div>
                    <div class="key">8</div>
                    <div class="key">9</div>
                    <div class="key">0</div>
                    <div class="key">-</div>
                    <div class="key">+</div>
                    <div class="key key-backspace">backspace</div>
                </div>
                <div class="keyboard-row">
                    <div class="key key-tab">tab</div>
                    <div class="key">Q</div>
                    <div class="key">W</div>
                    <div class="key">E</div>
                    <div class="key">R</div>
                    <div class="key">T</div>
                    <div class="key">Y</div>
                    <div class="key">U</div>
                    <div class="key">I</div>
                    <div class="key">O</div>
                    <div class="key">P</div>
                    <div class="key">[</div>
                    <div class="key">]</div>
                    <div class="key">\</div>
                </div>
                <div class="keyboard-row">
                    <div class="key key-capslock">caps lock</div>
                    <div class="key">A</div>
                    <div class="key">S</div>
                    <div class="key">D</div>
                    <div class="key">F</div>
                    <div class="key">G</div>
                    <div class="key">H</div>
                    <div class="key">J</div>
                    <div class="key">K</div>
                    <div class="key">L</div>
                    <div class="key">;</div>
                    <div class="key">'</div>
                    <div class="key key-enter">enter</div>
                </div>
                <div class="keyboard-row">
                    <div class="key key-shift">shift</div>
                    <div class="key">Z</div>
                    <div class="key">X</div>
                    <div class="key">C</div>
                    <div class="key">V</div>
                    <div class="key">B</div>
                    <div class="key">N</div>
                    <div class="key">M</div>
                    <div class="key">,</div>
                    <div class="key">.</div>
                    <div class="key">/</div>
                    <div class="key key-shift">shift</div>
                </div>
                <div class="keyboard-row">
                    <div class="key">ctrl</div>
                    <div class="key">fn</div>
                    <div class="key">win</div>
                    <div class="key">alt</div>
                    <div class="key key-space">space</div>
                    <div class="key">alt</div>
                    <div class="key">ctrl</div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                </div>
            </div>
            <div class="keyboard-numpad" ref="numpadRef">
                <div class="numpad-col" style="flex-grow: 3;">
                    <div class="numpad-row">
                        <div class="key">lock</div>
                        <div class="key">/</div>
                        <div class="key">*</div>
                    </div>
                    <div class="numpad-row">
                        <div class="key">7</div>
                        <div class="key">8</div>
                        <div class="key">9</div>
                    </div>
                    <div class="numpad-row">
                        <div class="key">4</div>
                        <div class="key">5</div>
                        <div class="key">6</div>
                    </div>
                    <div class="numpad-row">
                        <div class="key">1</div>
                        <div class="key">2</div>
                        <div class="key">3</div>
                    </div>
                    <div class="numpad-row">
                        <div class="key key-0">0</div>
                        <div class="key">.</div>
                    </div>
                </div>
                <div class="numpad-col" style="flex-grow: 1;">
                    <div class="key">-</div>
                    <div class="key key-plus">+</div>
                    <div class="key key-enter">enter</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 40px 70px;
    display: flex;
}

.keyboard {
    display: flex;
    width: 100%;
}

.keyboard-numpad {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
}

.numpad-row {
    display: flex;
}

.numpad-col {
    display: flex;
    flex-direction: column;
    flex-basis: 0;
}

.keyboard-mainpad {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 3.6;
    flex-basis: 0;
}

.keyboard-row {
    display: flex;
    flex-direction: row;
}

.key {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    transition: 0.2s;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 2px 2px 2px;

    border: 1px solid grey;
    /* width: 50px; */
    flex-grow: 1;
    flex-basis: 0;
    min-width: 0;
    height: 50px;
}

.key:hover {
    background-color: darkgrey;
}

.key:active {
    /* background-color: orange; */
    background-color: rgb(70, 70, 70);
    margin: 4px 0 0 4px;
    box-shadow: none;
}

.key-backquote {
    /* width: 30px; */
    flex-grow: 0.8;
}

.key-backspace {
    /* width: 90px; */
    flex-grow: 1.8;
}

.key-tab {
    /* width: 70px; */
    flex-grow: 1.4;
}

.key-capslock {
    /* width: 85px; */
    flex-grow: 1.7;
}

.key-enter {
    /* width: 90px; */
    flex-grow: 1.8;
}

.key-shift {
    /* width: 114.5px; */
    flex-grow: 2.29;
}

.key-space {
    width: 287px;
    flex-grow: 5.74;
}

.key-0 {
    /* width: 104px; */
    flex-grow: 2.08;
}

.key-plus {
    flex-grow: 2.1;
}

.keyboard-numpad .key-enter {
    flex-grow: 2.1;
}

.active {
    background-color: rgb(70, 70, 70);
    margin: 4px 0 0 4px;
    box-shadow: none;
}
</style>