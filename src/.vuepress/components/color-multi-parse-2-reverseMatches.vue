<template>
    <div class="color-parse">
        <div>code: 
            <pre style="color:white;">
const ret = Color.convertMatches('{{ colorText }}', ','))

console.log(Color.reverseMatches (ret.str, ret.matches))
            </pre>
        </div>
        <div>result: 
            <pre style="color:white;">{{parsedText}}</pre>
        </div>
    </div>
</template>

<script>
import Color from '@easylogic/color'
export default {
    props: {
        text: String,
    },
    data () {
        return {
            colorText: this.text
        }
    },
    computed: {
        parsedText () {
            const ret = Color.convertMatches(this.colorText, ',')

            return JSON.stringify(Color.reverseMatches(ret.str, ret.matches), null, 4);
        }
    }
}
</script>