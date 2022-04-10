<template>
  <div>
    <b-container class="bv-example-row" style="text-align: left;">
      <h1 class="mt-5">Incia Sesión</h1>
      <p>¡Qué bueno tenerte de vuelta!</p>

      <b-row class="mt-4">
        <b-col>
          <b-input-group class="b-input" prepend="Correo electrónico">
            <b-form-input placeholder="Ingresa tu correo electrónico"></b-form-input>
          </b-input-group>
          <b-input-group class="b-input" prepend="Constraseña">
            <b-form-input type="password" placeholder="Ingresa una contraseña"></b-form-input>
          </b-input-group>
          <b-button class="mt-3 b-input" variant="info">Ingresar</b-button></b-col>
          <p>¿Aún no tienes cuenta? <a>Regístrate</a> </p>
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