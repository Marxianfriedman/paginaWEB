<template>
  <div id="app">
    <div class="header-styles">
      <HeadComponent/>
    </div>
    <ComponentePortada/>
    <ComponenteCarrusel1/>
    <ComponenteCarrusel2/>
    <ComponenteCarrusel3/>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li>Teléfono: (123) 456-7890</li>
            <li>Email: contacto@tusitio.com</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Dirección</h3>
          <p>
            Calle Falsa 123<br>
            Bogota D.C<br>
            Colombia
          </p>
        </div>
        <div class="footer-section">
          <h3>Redes Sociales</h3>
          <ul class="social-links">
            <li>
              <a href="#" target="_blank">
                <img src="./assets/Iconos de contacto/2021_Facebook_icon.svg.png" alt=""> Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="./assets/Iconos de contacto/Instagram_logo_2022.svg.png" alt=""> Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="./assets/Iconos de contacto/WhatsApp.svg.png" alt=""> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 KunaAmarte. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HeadComponent from './components/HeadComponent.vue';
import ComponenteCarrusel1 from './components/ComponenteCarrusel1.vue';
import ComponenteCarrusel2 from './components/ComponenteCarrusel2.vue';
import ComponenteCarrusel3 from './components/ComponenteCarrusel3.vue';
import ComponentePortada from './components/ComponentePortada.vue';
export default {
  name: 'App',
  components: {
    HeadComponent,
    ComponenteCarrusel1,
    ComponenteCarrusel2,
    ComponenteCarrusel3,
    ComponentePortada,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url('./assets/pexels-jarno-van-loon-1581197-3039150.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  min-width: 100%;
}
 * {
    font-family: "Merienda", cursive;
 }

.header-styles {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
} 

.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  margin: 10px 20px;
}

.footer-section h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li,
.footer-section p {
  margin: 5px 0;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid #444;
  font-size: 0.9em;
}


/* ====================================================== */

.social-links img {
  height: 25px;
  width: 25px;
}

li {
  margin-top: 40px 0;
}

</style>

