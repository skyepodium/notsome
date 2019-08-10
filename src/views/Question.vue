<template>
  <div id="wrapper">
    <div class="questionBox">
      <div class="questionTitle">
        첫번째 낯섬
      </div>
      <textarea
        id=""
        class="questionText"
        placeholder="알아보고 싶은 내용은?"
        name=""
        :class="{'questionError': !question.valid}"
        @value="question.text"
        @input="question.text = $event.target.value"
      />
      <input
        class="questionInput"
        type="text"
        placeholder="알아보고 싶은 내용은?"
        :class="{'questionError': !question.valid}"
        @value="question.text"
        @input="question.text = $event.target.value"
      >
    </div>

    <div class="answerBox">
      <div
        v-for="(item, idx) in answer"
        :key="idx"
      >
        <input
          class="answerInput"
          type="text"
          placeholder="# 태그"
          :value="item.text"
          @input="item.text = $event.target.value"
        >
        <!-- <input
          v-model="item.isAnswer"
          type="checkbox"
        > -->
      </div>
    </div>
    <div
      class="nextButton"
      @click="next"
    >
      다음
    </div>
  </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        index: {
            type: String,
            default: "0",
        }
    },
    data (){
        return {
            question: {
                text: '',
                valid: false
            },
            answer: [
                {
                    placeholder: '첫번째',
                    text: '',
                    isAnswer: false
                },
                {
                    placeholder: '두번째',
                    text: '',
                    isAnswer: false
                },
                {
                    placeholder: '세번째',
                    text: '',
                    isAnswer: false
                },
                {
                    placeholder: '네번째',
                    text: '',
                    isAnswer: false
                }
            ]
        }
    },
    watch: {
        'question.text' (val) {
            this.question.text=val
            console.log(val)
            if(val.length > 0) this.question.valid = true
            else this.question.valid = false
        }
    },
    created() {
        this.checkValid()
    },
    methods: {
        checkValid () {
            let curIndex = Number(this.index)
            console.log(curIndex)
            if (isNaN(curIndex) || curIndex < 1) {
                this.$router.replace({name: 'Main'})
            }
        },
        next(){
            let info = {
                question: this.question,
                answer: this.answer
            }
            this.$store.dispatch('FETCH_LIST', info)

            let nextIndex = Number(this.index) + 1
            nextIndex = String(nextIndex)
            this.$router.push({name: 'Question', params: {index: nextIndex}})
        }
    }
}
</script>

<style scoped>
#wrapper{
}

.questionBox{
    width: calc(100% - 40px);
    margin-left:auto;
    margin-right:auto;
    /* border: 1px solid black;
    box-sizing: border-box; */
    margin-top: 50px;
}

.questionTitle {
    font-size: 30px;
}

.questionInput {
    border: none;
    border-bottom: 3px dashed rgb(79, 44, 250);
    border-bottom: 3px dashed rgb(48, 117, 180);
    width: calc(100% - 60px);
    display: block;
    margin-left:auto;
    margin-right:auto;
    margin-top: 40px;
    height: 40px;
    font-size: 25px;
    line-height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    display: none;
}

.questionText {
    border: none;
    border-bottom: 3px dashed rgb(79, 44, 250);
    border: 1px solid rgb(48, 117, 180);
    width: calc(100% - 60px);
    display: block;
    margin-left:auto;
    margin-right:auto;
    margin-top: 50px;
    height: 200px;
    padding: 20px;
    font-size: 25px;
    line-height: 40px;
    padding-left: 15px;
    padding-right: 15px;
}

.questionInput::placeholder {
    /* color: rgb(240, 147, 196); */
}

.questionError {
    border-color: rgb(240, 147, 196);
}

.answerBox {
    width: calc(100% - 40px);
    margin-left:auto;
    margin-right:auto;
    margin-top: 30px;
}

.nextButton {
    background: linear-gradient(to right, rgb(33, 212, 253), rgb(183, 33, 255));
    position:absolute;
    bottom: 0;
    left:0;
    width: 100%;
    height: 55px;
    line-height: 55px;
    color: white;
    text-align: center;
    cursor: pointer;
}

.answerInput {
    display: block;
    width: calc(100% - 60px);
    height: 40px;
    line-height: 40px;
    margin-left:auto;
    margin-right:auto;
    border:none;
    border-bottom: 1px solid rgb(201, 202, 206);
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
