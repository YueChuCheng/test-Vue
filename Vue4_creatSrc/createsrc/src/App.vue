<!--vue檔案的名稱必需⼤大寫開頭，因為是 class宣告-->

<template>
    <div>
        <InputBar></InputBar>
    </div>
</template>

<script>
import InputBar from './components/InputBar';
export default {
    name:'App',
    components: {
        InputBar
    }
}
</script>

