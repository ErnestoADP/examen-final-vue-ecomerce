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
            style="max-width: 20rem"
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
            <b-button href="#" variant="primary" @click="mangaDetalle(item.id)"
              >Ver tomos disponibles</b-button>
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
  methods: {
    mangaDetalle(id){
              this.$router.push({path:'/manga/'+ id})
    }
      
  },
  mounted() {
   // console.log(this.coleccion.sagas);
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
    transition: transform .2s;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin:20px;
    
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);}
.card-interior:hover{ 
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  
}
</style>
