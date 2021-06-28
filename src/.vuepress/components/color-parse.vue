<template>
    <div class="color-parse">
        <div>code: 
            <pre style="color:white;">Color.parse("{{ colorText }}")</pre>
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
            return JSON.stringify(Color.parse(this.colorText), null, 4);
        }
    }
}
</script>