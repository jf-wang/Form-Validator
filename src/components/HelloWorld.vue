<template>
  <div class="hello">
    <ul>
      <li><v-text></v-text></li>
      <li><v-time></v-time></li>
      <li><v-checkbox></v-checkbox></li>
      <li><v-radio></v-radio></li>
      <li><v-select></v-select></li>
      <li><v-email></v-email></li>
      <li><v-posswork></v-posswork></li>
      <li><v-number></v-number></li>
      <li><v-phone></v-phone></li>
      <li><v-image></v-image></li>
    </ul>
  </div>
</template>

<script>
import Text from './Text'
import Time from './Time'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Select from './Select'
import Email from './Email'
import Posswork from './Posswork'
import Number from './Number'
import Phone from './Phone'
import Image from './Image'
  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    },
    created: function () { //实例被创建之后执行代码

    },
    computed: { //计算属性

    },
    components: { //组件的引用
      'v-text':Text,
      'v-time':Time,
      'v-checkbox':Checkbox,
      'v-radio':Radio,
      'v-select':Select,
      'v-email':Email,
      'v-posswork':Posswork,
      'v-number':Number,
      'v-phone':Phone,
      'v-image':Image,
    },
    methods: { //方法

    },
    mounted() { // 页面进入时加载内容

    },
    watch: { //监测变化

    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin: 0 auto;
  }
  ul{
    width: 100%;
  }
  ul li{
    display: block;
    height: 250px;
    float: left;
    border: 1px dashed green;
    margin: 10px;
    padding: 10px;
  }
  ul li:hover{
     box-shadow:0px 1px 2px 2px green;
  }

</style>
