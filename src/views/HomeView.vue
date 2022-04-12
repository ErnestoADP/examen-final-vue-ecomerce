<template>
  <div class="home">
  <div>

<!--Carrusel-->
<div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="Jujutsu Kaisen"
        text="Uno de los mejores vendidos el 2021"
      img-src="https://www.gamerfocus.co/wp-content/uploads/2022/02/Jujutsu-Kaisen-0.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Nana"
       text="Descubre este manga en el Rincón de los Virgenes"
      img-src="https://www.themoviedb.org/t/p/original/aWyL3mGDFPYJcy27tPQfTY2z1cP.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="HunterxHunter"
      text="Descubre este clásico en el Rincón de los Virgenes"
      img-src="https://9tailedkitsune.com/wp-content/uploads/2021/02/HunterxHunter-header.jpg"
    ></b-carousel-slide>
  </b-carousel>
</div>





   
    <h1 class="mt-4">Compra los favoritos de este mes:</h1>
    </div>

    







    <!-- Cards Container -->
    <b-container class="bv-example-row mt-4">
  <b-row>
    <b-col><div>
  <b-card
    title="One Piece"
    img-src="https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731593432477_main.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-card-text>
      Descripción del manga
    </b-card-text>

    <b-button href="#" variant="primary">Comprar</b-button>
  </b-card>
</div></b-col>

    <b-col><div>
  <b-card
    title="Jujutsu Kaisen"
    img-src="https://www.normaeditorial.com/upload/media/albumes/0001/21/91aecb71b175fb55ff33801a95493bf72f431cc3.jpeg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-card-text>
      Descripción del manga
    </b-card-text>

    <b-button href="#" variant="primary">Comprar</b-button>
  </b-card>
</div></b-col>

    <b-col><div>
  <b-card
    title="Nana"
    img-src="https://media.redadn.es/series/p/nana_2389.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-card-text>
      Descripción del manga
    </b-card-text>

    <b-button href="#" variant="primary">Comprar</b-button>
  </b-card>
</div></b-col>
  </b-row>
</b-container>
<!-- End Container -->


<h1 class="mt-4">Síguenos</h1>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
  <style scoped>
  .logo{
    background-color: rgb(31, 31, 31);

  }
  h1{
    font-size:4em;
  }
  
  </style>