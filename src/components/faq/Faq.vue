<template>
  <div>
    <div class="container">
      <div class="accordion">
        <div class="accordion-card" v-for="object in faqObjects" :key="object.id">
        <div class="accordion-card-head" @click="object.visible = !object.visible">
          <p class="question float-left">{{ object.question }}</p>
          <div class="arrow float-right" :class="{rotateArrow:object.visible}">
            <b-icon-arrow-bar-up />
          </div>
          <div class="clearfix"></div>
        </div>
      <div class="accordion-card-body" :class="{showAnswer:object.visible}">
        <p class="lead answer">{{ object.answer }}</p>
      </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { BIconArrowBarUp } from 'bootstrap-vue';

export default {
  name: 'Faq',
  components: {
    BIconArrowBarUp,
  },
  data() {
    return {
      faqObjects: [{
        id: 1,
        question: 'What is movibox?',
        answer: 'Lorem ipsum dolor sit ametconsectetur adipiscing elitInteger at laoreet eros.Nam vulputate a lectus eu ultrices.',
        visible: true,
      },
      {
        id: 2,
        question: 'Will my account work outside my country?',
        answer: 'Lorem ipsum dolor sit ametconsectetur adipiscing elitInteger at laoreet eros.Nam vulputate a lectus eu ultrices.',
        visible: false,
      },
      {
        id: 3,
        question: 'I am facing video playback issues. What do I do?',
        answer: 'Lorem ipsum dolor sit ametconsectetur adipiscing elitInteger at laoreet eros.Nam vulputate a lectus eu ultrices.',
        visible: false,
      },
      {
        id: 4,
        question: 'How can I manage notifications?',
        answer: 'Lorem ipsum dolor sit ametconsectetur adipiscing elitInteger at laoreet eros.Nam vulputate a lectus eu ultrices.',
        visible: false,
      },
      {
        id: 5,
        question: 'What benefits do I get with the packs?',
        answer: 'Lorem ipsum dolor sit ametconsectetur adipiscing elitInteger at laoreet eros.Nam vulputate a lectus eu ultrices.',
        visible: false,
      }],
    };
  },
};
</script>
