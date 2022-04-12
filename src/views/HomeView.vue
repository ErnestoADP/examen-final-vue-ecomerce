<template>
  <div class="home">
    <div>
      <!--Carrusel-->
     <Carrusel/> 
      <h1 class="mt-4">Compra los favoritos de este mes:</h1>
    </div>

      <CardHome/> 

   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardHome from "@/components/CardHome";
import Carrusel from "@/components/Carrusel"

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CardHome,
    Carrusel,
  },
};
</script>
  <style scoped>
.logo {
  background-color: rgb(31, 31, 31);
}
h1 {
  font-size: 4em;
}
</style>