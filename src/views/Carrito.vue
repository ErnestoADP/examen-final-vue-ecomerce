<template>
  <div class="cuerpo">
    <div>
      <div class="nose">
        <h1 style="margin: 20px 0">Tu Carrito</h1>
      </div>
    </div>
    <!--------------------------------------------------------TABLA CON LOS DATOS------------------------------------------------------------------------------->
    <section>
      <table class="tabla">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div class="m-2">
                <h5>One Piece Tomo 12</h5>
                <b-img
                  src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2020/08/One-Piece-0.jpg?resize=640%2C1024&ssl=1"
                  width="100em"
                  fluid
                  alt="Responsive image"
                ></b-img>
              </div>
            </td>
            <td>
              <div>
                <b-form-spinbutton
                  id="sb-inline"
                  v-model="value"
                  inline
                ></b-form-spinbutton>
              </div>
            </td>

            <td>
              <div>
                <h5>$7.990</h5>
              </div>
            </td>
            <td></td>

            <td>
              <!----ELIMINAR------>
              <b-button class="buttons-table" squared variant="danger"
                ><b-icon icon="trash" scale="1" variant="light"></b-icon
              ></b-button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div class="total"></div>
    </section>
    <div class="mt-5">
      <b-container class="bv-example-row">
        <b-row>
          <b-col></b-col>
          <b-col></b-col>
          <b-col><h3 class="total">Total Compra:</h3></b-col>
          <b-col class="me-5"
            ><h3>$7.990</h3>
            <b-button variant="danger">Comprar</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carrito",

  data() {
    return {
      curso: {
        nombreCurso: "",
        urlImg: "",
        cuposDelCurso: "",
        inscritosEnElCurso: "",
        duracionDelCurso: "",
        codigoDelCurso: "",
        descripcion: "",
      },
      cursoSeleccionado: {
        id: "",
        data: {
          nombreCurso: "",
          urlImg: "",
          cuposDelCurso: "",
          inscritosEnElCurso: "",
          duracionDelCurso: "",
          codigoDelCurso: "",
          descripcion: "",
        },
      },
    };
  },
};
</script>




<style scoped>
p {
  border-radius: 0.3rem;
  padding: 0.2rem;
  border: 0.1rem solid;
  margin: 0.4rem;
  width: 100%;
  box-shadow: 1px 2px 1px #aaaaaa;
  text-align: left;
}
.total {
  color: rgba(255, 0, 0, 0.773);
  font-size: 2.3em;
  font-weight: 700;
}

.nose {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cuerpo {
  width: 70%;
  margin: auto;
}
.tabla {
  width: 100%;
}
.texto {
  text-align: center;
}
.buttons-table {
  margin: 0.1rem;
}
table {
  border: 2px solid rgb(0, 0, 0);
  box-shadow: 0px 5px 10px #aaaaaa;
  margin: 0.4rem;
}
th,
td {
  padding: 4px 1px 3px 1px;
  border-bottom: 1px solid;
  box-shadow: 0px 1px 0px #000000;
}
</style>