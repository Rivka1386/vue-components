import { play } from 'vue-play'
import usjRadio from './index.js'
import Vue from 'vue'

Vue.use(usjRadio)

play('USJ Radio')
  .add('basic', {
    data () {
      return { radioValue: 'a' }
    },
    template: `
      <div>
        <usj-radio name="radio-choose" usj-value="a" v-model="radioValue">Radio A</usj-radio>
        <usj-radio name="radio-choose" usj-value="b" v-model="radioValue">Radio B</usj-radio>
      </div>
    `
  })
