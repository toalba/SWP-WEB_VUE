<script>
import words from '../assets/wordlist.json'
export default{
    name: 'wordlist',
    Words: words,
    data(){
        return{
            WordList: words,
            image: 'https://raw.githubusercontent.com/jlbooker/hangman/master/img/hang0.gif',
            letters : Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65))
        }
    },
    methods: {
        getWord(){
            return this.WordList[Math.floor(Math.random() * this.WordList.length)]
        },
        showBlanks(word){
            return word.replace(/\S/g, '_')
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Word: {{ showBlanks(getWord()) }}</h2>
        <img :src="image" alt="hangman" />
        <div class="btn-group" role="group"></div>
        <button type="button" class="btn btn-primary" v-for="letter in letters">{{ letter }}</button>
    </div>
</template>