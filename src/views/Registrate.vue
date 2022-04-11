<template>
  <div>
    <b-container class="bv-example-row" style="text-align: left;">
      <h1 class="mt-5">Regístrate</h1>
      <p>Ingresa tus datos personales y disfruta de una experiencia de compra más rápida.</p>

      <b-row class="mt-4">
        <b-col>
          <b-input-group class="b-input" prepend="Nombre">
            <b-form-input placeholder="Ingresa tu nombre"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Apellido">
            <b-form-input placeholder="Ingresa tu apellido"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Edad">
            <b-form-input type="number" min="1" placeholder="Ingresa tu edad"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Telefono">
            <b-form-input placeholder="Ingresa tu telefono"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Región">
            <b-form-input placeholder="Ingresa tu región"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Comuna">
            <b-form-input placeholder="Ingresa tu comuna"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Dirección">
            <b-form-input placeholder="Ingresa tu dirección"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Correo electrónico">
            <b-form-input placeholder="Ingresa tu correo electrónico"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Constraseña">
            <b-form-input type="password" placeholder="Ingresa una contraseña"></b-form-input>
          </b-input-group>
          <b-button class="mt-3 b-input" variant="info">Registrame</b-button></b-col>
          <p>¿Ya tienes cuenta? <a>Inicia sesión</a> </p>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.b-input{
  margin-bottom: 10px;
}
</style>