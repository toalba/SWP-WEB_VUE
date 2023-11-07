<script>
import words from '../assets/wordlist.json'
export default{
    name: 'wordlist',
    Words: words,
    data(){
        return{
            WordList: words,
            image: 'https://raw.githubusercontent.com/jlbooker/hangman/master/img/hang0.gif',
            letters : Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65)),
            word: ''
        }
    },
    methods: {
        getWord(){
            // pick a word
            this.word = this.WordList[Math.floor(Math.random() * this.WordList.length)];
            console.log(this.word)
            return this.word;
        },
        showBlanks(word){
            return word.replace(/\S/g, '_ ');
        },
        usechar(e){
            let char = e.target.outerText.toLowerCase();
            //check if char exists in word
            var indexes = []
            while (this.word.indexOf(char,indexes[-1]) > -1) {
                indexes.push(this.word.indexOf(char,indexes[-1]))
            }
            // delete button
            this.word.indexOf(char)
            console.log(indexes);
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Word: {{ showBlanks(getWord()) }}</h2>
        <img :src="image" alt="hangman" />
        <div class="btn-group" role="group"></div>
        <button :id="letter" type="button" class="btn btn-primary" @click="usechar" v-for="letter in letters">{{ letter }}</button>
    </div>
</template>