<template>
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Descubre Tu Estilo</h1>
        <p class="hero-subtitle">
          Encuentra ropa, collares y aretes únicos que te harán brillar en cualquier ocasión.
        </p>
        <button class="hero-button" @click="explorarProductos">👇Explora nuestra colección</button>
      </div>
      <div class="categories">
        <div class="category" @click="irACategoria('Destacados')">
          <img src="../assets/chaqueta2.jpg" alt="Ropa" />
          <h2>Destacados</h2>
        </div>
        <div class="category" @click="irACategoria('Ropa')">
          <img src="../assets/collar2.jpg" alt="Collares" />
          <h2>Ropa</h2>
        </div>
        <div class="category" @click="irACategoria('Collares')">
          <img src="../assets/gorreon.jpg" alt="Aretes" />
          <h2>Collares</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ComponentePortada',
    methods: {
      explorarProductos() {
        // Navegar a la sección de productos
        this.$emit('navegar', '/productos');
      },
      irACategoria(categoria) {
        // Navegar a una categoría específica
        this.$emit('navegar', `/productos/${categoria}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(to bottom, #881243, #980dc2 );
    color: #fff;
    padding: 3rem 1rem;
  }
  
  .hero-content {
    margin-bottom: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-button {
    background: #fff;
    color: #ff758c;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .hero-button:hover {
    background: #ffe5ec;
  }
  
  .categories {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .category:hover {
    transform: scale(1.05);
  }
  
  .category img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    object-fit: cover;
  }
  
  .category h2 {
    font-size: 1rem;
    color: #fff;
  }
  </style>