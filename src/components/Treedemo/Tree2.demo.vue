<demo>
默认展开
</demo>
<template>
  <div>
      <Tree :options="options" :expand="true"></Tree>
 </div> 
</template>

<script lang="ts">
import Tree from "../../lib/Tree.vue"
export default {
  components:{Tree},
   setup(){
    const options=[ 
        {
            key:'11',
            val:11,
            children:[
                {
                    key:'12',
                    val:12,
                    children:[
                        {
                            key:'13',
                            val:13,
                            children:[
                                {
                                    key:'14',
                                    val:14,
                                    children:[
                                        {
                                            key:'15',
                                            val:15,
                                        },
                                         {
                                            key:'25',
                                            val:25,
                                        },
                                         {
                                            key:'35',
                                            val:35,
                                        },
                                         {
                                            key:'45',
                                            val:45,
                                        },
                                    ]                                        
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            key:'21',
            val:21,
            children:[
                {
                    key:'22',
                    val:'22'
                }
            ]
        }
            ]
    return {Tree,options}
 },
}
</script>

<style>

</style>