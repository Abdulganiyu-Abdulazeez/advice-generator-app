<script>
import { defineComponent } from 'vue';
import store from './store'

export default defineComponent ({
    data() {
        return {
            condition: true,
            id:'#117',
            advice: "it is easy to sit up and take notice, what is difficult is to take action"
        }
    },
    methods: {
        open() {
            this.condition=false
            fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                const collectData = data
                store().$state.array = data
                this.advice=collectData.slip
                // console.log(this.advice)
            })
        }
    }
})
</script>

<template>
    <div class="bg-[#202632] w-full h-screen pt-[10rem]">
        <div class="p-[2rem] rounded-[20px] flex flex-col items-center text-center gap-[1rem] lg:w-[40%] md:w-[55%] w-[80%] h-fit mx-auto bg-[#313a49] relative">
            <div v-if="condition" class="font-bold tracking-[4px] text-[#4dda96] text-[12px]">ADVICE {{id}}</div>
            <div v-else class="font-bold tracking-[4px] text-[#4dda96] text-[12px]">ADVICE #{{ advice.id}}</div>
            <div v-if="condition" class="lg:text-[24px] md:text-[18px] text-[13px] text-white font-bold">"{{ advice }}"</div>
            <div v-else class="lg:text-[24px] md:text-[18px] text-[13px] text-white font-bold">"{{ advice.advice }}"</div>
            <img class="pb-[3rem]" src="./assets/images/pattern-divider-desktop.svg" alt="">
            <div class="absolute bottom-[-1.5rem] flex items-center justify-center rounded-[50%]">
                <div class="p-[1rem] flex items-center justify-center rounded-[50%] bg-[#4dda96] hover:cursor-pointer anime"  @click="open">
                    <img src="./assets/images/icon-dice.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .anime:hover {
        box-shadow: 3px 3px 25px #4dda96, -3px -3px 25px #4dda96;
    }
</style>