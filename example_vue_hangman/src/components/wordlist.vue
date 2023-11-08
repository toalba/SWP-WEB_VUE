<script>
import { setTransitionHooks } from 'vue';
import words from '../assets/wordlist.json'
export default{
    name: 'wordlist',
    Words: words,
    data(){
        return{
            WordList: words,
            image: 'https://raw.githubusercontent.com/jlbooker/hangman/master/img/hang0.gif',
            letters : Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65)),
            word: '',
            hiddenword: '',
            highscorelist: [],
            timertxt: ''
        }
    },
    mounted(){
        this.starttime = Date.now()
        this.highscorelist = JSON.parse(localStorage.getItem('highscorelist'));
        this.start();
        this.showBlanks();
        this.redraw();
        setInterval(this.redraw, 1000);
    },
    watch:{
        highscorelist(newhighscore)
        {
            localStorage.setItem('highscorelist', JSON.stringify(newhighscore));
        },
    },
    methods: {
        start(){
            // pick a word
            this.word = this.WordList[Math.floor(Math.random() * this.WordList.length)];
            console.log(this.word)
        },
        showBlanks(){
            this.hiddenword = this.word.replace(/\S/g, '_ ');
        },
        usechar(e){
            let char = e.target.outerText.toLowerCase();
            //check if char exists in word
            var indexes = []
            function checkindex(solvingchar, lastindex, word) {
                let index = word.indexOf(solvingchar,lastindex);
                if (index > -1) {
                    indexes.push(index);
                    checkindex(solvingchar, index+1, word);
                }
            }
            checkindex(char,0,this.word);
            if (indexes.length > 0) {
                let str = this.hiddenword.split(' ');
                indexes.forEach(index => {
                    str.splice(index, 1, char);
                    //this.letters.splice(this.letters.indexOf(char),1)
                });
                str = str.join(' ');
                this.hiddenword = str;
                if (this.hiddenword.replace(/\s/g, '') == this.word) {
                    alert('You win!');
                    this.getWord();
                    this.showBlanks();
                    this.image = 'https://raw.githubusercontent.com/jlbooker/hangman/master/img/hang0.gif';
                    return;
                }
            }
            else
            {
                let counterposition = this.image.length - 5;
                let currentstage = parseInt(this.image.charAt(counterposition));
                if (currentstage >= 6)
                {
                    alert('You Lost');
                    this.getWord();
                    this.showBlanks();
                    this.image = 'https://raw.githubusercontent.com/jlbooker/hangman/master/img/hang0.gif';
                    return;
                }
                let str = this.image.split('');
                str.splice(counterposition, 1, currentstage + 1);
                str = str.join('');
                this.image = str;
            }

        },
        redraw()
        {
            let seconds=Math.floor((Date.now()-this.starttime)/1000);
            let minutes=Math.floor(seconds/60);
            seconds%=60;
            this.timertxt = minutes.toString().padStart(2,"0")+":"+seconds.toString().padStart(2,"0")
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Word: {{ this.hiddenword }}</h2>
        <h3>{{ this.timertxt }}</h3>
        <img :src="image" alt="hangman" />
        <div class="btn-group" role="group"></div>
        <button :id="letter" type="button" class="btn btn-primary" @click="usechar" v-for="letter in letters">{{ letter }}</button>
    </div>
</template>