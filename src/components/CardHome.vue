<template>
  <!-- Cards Container -->
  <b-container class="bv-example-row mt-4 card-home">
    <b-row>
      <b-col>
        <div class="card-parent">
          <b-card
            v-for="item in this.coleccion.sagas"
            :key="item.id"
            title=""
            :img-src="item.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mb-2 card-interior"
          >
            <b-card-text>
              <h3>{{ item.nombre }}</h3>
            </b-card-text>
            <hr />
            <b-card-text> <b>Autor:</b> {{ item.autor }} </b-card-text>
            <hr />
            <b-card-text> <b>Editorial:</b> {{ item.editorial }} </b-card-text>
            <hr />
            <b-card-text> <b>Genero:</b> {{ item.genero }} </b-card-text>
            <hr />
            <b-card-text>
              <b>Descripción:</b> {{ item.descripcion }}
            </b-card-text>
            <hr />
            <b-button href="#" variant="primary"
              >Ver tomos disponibles</b-button
            >
          </b-card>
        </div></b-col
      >
    </b-row>
  </b-container>
  <!-- End Container -->
</template>

<script lang="ts">
import sagasData from "../assets/api/database.json";
export default {
  data() {
    return {
      coleccion: sagasData,
    };
  },
  mounted() {
    console.log(this.coleccion.sagas);
  },
};
</script>

<style>
.card-home {
  padding-bottom: 100px;
  

}
.card-parent{
     display: flex;
       flex-direction: row; 
       flex-wrap: wrap;
       justify-content: space-around;
       align-content:space-around;
}
.card-interior{
    margin:20px
  
}
</style>
