<template>
  <div class="skf-demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
      <div class="skf-demo-component">
        <component :is="component"></component>
      </div>
      <div class="skf-demo-actions">
        <Button @click="showcode" v-if="codeVisible">查看代码</Button>
        <Button @click="showcode" v-else>隐藏代码</Button>
      </div>
      <div class="skf-demo-code" v-if="codeVisible">
         <pre class="language-html" v-html="html"/>
      </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs"
import "prismjs/themes/prism-okaidia.css"
const Prism = (window as any).Prism 
import { computed, ref } from "vue";
export default {
   props:{
    component:Object
   }, 
  components: { Button},
  setup(props,context){
    const html  = computed(()=>{
       return  Prism.highlight(props.component.__sourceCode,Prism.languages.html,'html')
    })
    const codeVisible = ref(false);
    const showcode = ()=>{
      codeVisible.value = !codeVisible.value
    }
    return {html, codeVisible ,showcode,Prism};
  }
};
</script>

<style lang="scss">
.skf-demo {
  max-width: 700px;
  border: 1px solid #d9d9d9;
  margin:16px 0 32px;
    >h2{
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid #d9d9d9;  
    }
  &-component{
    padding: 16px;
  }
  &-actions{
    padding:8px 16px;
    border-top:1px dashed #d9d9d9;
  }
  &-code{
     padding: 8px 16px;
     border-bottom: 1px dashed #d9d9d9;
    >pre{
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
