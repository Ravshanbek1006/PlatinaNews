<template>
    <div>
      <HederCard/>
      <NavBar/>
      <HomePage></HomePage>
    </div>
</template>

<script>
import HomePage from "@/screen/HomePage.vue"
import HederCard from "@/components/HederCard.vue"
import NavBar from "@/components/NavBar.vue"

export default {
  components:{
    HomePage,
    HederCard,
    NavBar
  }

}
</script>

<style>

</style>