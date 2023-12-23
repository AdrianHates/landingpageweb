import './App.css'
import Navbar from './Components/Navbar/Navbar'
import WS from './Components/WS/WS'
import Inicio from './Components/Inicio/Inicio'
import Columns from './Components/Columns/Columns'
import BubbleWrap from './Components/BubbleWrap/BubbleWrap'
import Post from './Components/Post/Post'

const navbar = {
  logo:'',
  list: [
    'Inicio',
    'Nosotros',   
    'Servicios',   
    'Proyectos',   
    'Testimonios',   
    'Contactanos'
  ],
  contact: 'Llámanos: 987445450'
}

const inicio = {
  textoTipificado: ['Página Web', 'Campaña', 'Camina al Éxito', 'Tienda Online'],
  p: '¿Deseas contar con la página web, tienda online y campañas que te ayuden a Incrementar tus Ventas?',
  button: 'CONTÁCTANOS AQUI',
}

const columns = [
  {
    src: 'https://digitalmarketing.pe/wp-content/uploads/2020/11/SEO-Consultancy.png',
    h3: 'Diseño de Páginas Web',
    p:'Diseñamos Páginas Web integrales con enfoque comercial para diferenciarte en el mercado.'
  },
  {
    src: 'https://digitalmarketing.pe/wp-content/uploads/2020/11/SEO-Consultancy.png',
    h3: 'Diseño de Tiendas Online',
    p: 'Nos enfocamos en brindarte el mejor servicio de creación de tiendas online, virtuales o ecommerce.'
  },
  {
    src: 'https://digitalmarketing.pe/wp-content/uploads/2020/11/SEO-Consultancy.png',
    h3: 'Campañas Digitales',
    p: 'Conocemos tu mercado y buscamos mejorar tu presencia con tus futuros clientes.'
  }
]

const bubbleWrap = true
function App() {

  return (
    <>
      <header>
        <Navbar object={navbar} />
      </header>
      <main>
        <Inicio object={inicio} />
        <Columns object={columns} />
        <Post />
      </main>
      <WS />
      <BubbleWrap object={bubbleWrap} />
    </>
  )
}

export default App
