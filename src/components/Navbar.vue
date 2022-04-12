<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img src="../assets/img/LogoPrueba.png" width="200px" alt="Kitten" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
         
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav style="margin-left: auto" class="ml-auto">
          <b-nav-item right  to="/Carrito">
            <b-icon
         
              style="margin-bottom: 10px"
              icon="basket"
            ></b-icon>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Hola, Inicia sesión</em>
            </template>
            <b-dropdown-item to="/Iniciar_sesion">Inicia sesión</b-dropdown-item>
            <b-dropdown-item to="/Registrate">Regístrate</b-dropdown-item>
            <b-dropdown-item to="/Cerrar_sesion">Cerrar sesión</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
