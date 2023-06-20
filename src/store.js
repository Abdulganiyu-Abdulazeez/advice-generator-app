import { defineStore } from 'pinia'

export default function quote() {
    return defineStore('elements', {
        state: () => ({
            array: [],
        })
    })()
}