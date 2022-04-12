<template>
  <b-container class="bv-example-row mt-4 card-home">
    <b-row>
      <b-col
        ><div class="card-parent">
          <b-card  v-for="tomo in this.manga.tomos"
            :key="tomo.id"
            
            :img-src="tomo.imagen"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 15rem"
            class="mb-2 card-interior"
          >
          
            <b-card-text>
              <h3>Numero: {{ tomo.numero }}</h3>
            </b-card-text>
            <hr />
            <b-card-text> <b>Precio:</b> {{ tomo.precio }} </b-card-text>
            <hr />
            <b-card-text> <b>Stock:</b> {{ tomo.stock }} </b-card-text>
            <hr />

            <b-button href="#" variant="dark">Agregar al Carrito</b-button>
          </b-card>
        </div></b-col
      >
    </b-row>
  </b-container>
  <!-- End Container -->
</template>

<script>
import sagasData from "../assets/api/database.json";
export default {
  name: "Manga",
  data() {
    return {
      manga: {}
    };
  },
  mounted() {

    // obtener id desde la ruta
    let id = this.$route.params.id;

    // poner coleccion de mangas en una variable 
    let coleccion = sagasData.sagas;

    // obtener solo un item de la coleccion por la id 
    this.manga = coleccion.find((item) => item.id == id);
  },
};
</script>

<style></style>
