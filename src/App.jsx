import './App.css'
import Navbar from './Components/Navbar/Navbar'
import WS from './Components/WS/WS'
import Inicio from './Components/Inicio/Inicio'
import Columns from './Components/Columns/Columns'
import BubbleWrap from './Components/BubbleWrap/BubbleWrap'
import Post from './Components/Post/Post'
import PostSecond from './Components/PostSecond/PostSecond'
import ColumnsDates from './Components/ColumnsDates/ColumnsDates'
import Form from './Components/Form/Form'
import Footer from './Components/Footer/Footer'

const navbar = {
  logo:'https://dewey.tailorbrands.com/production/brand_version_mockup_image/527/8762209527_6915d43b-bf1a-47ba-a930-12a0c3357705.png?cb=1703753565',
  list: [
    {
      element: 'Inicio',
      href: 'inicio'
    },
    //'Nosotros',   
    {
      element:    'Servicios',   
      href: 'servicios'
    },
    //'Proyectos',   
    //'Testimonios',   
    {
      element: 'Contactanos',
      href:'contactanos'
    }
  ],
  contact: 'Llámanos: 987445450'
}

const inicio = {
  textoTipificado: ['Página Web', 'Campaña', 'Camino al Éxito', 'Tienda Online'],
  p: '¿Deseas contar con la página web, tienda online y campañas que te ayuden a Incrementar tus Ventas?',
  button: 'CONTÁCTANOS AQUI',
}

const columns = [
  {
    src: 'https://digitalmarketing.pe/wp-content/uploads/2020/11/SEO-Consultancy.png',
    h3: 'Diseño de Páginas Web',
    href: '51914315964',
    p:'Diseñamos Páginas Web integrales con enfoque comercial para diferenciarte en el mercado.'
  },
  {
    src: 'https://digitalmarketing.pe/wp-content/uploads/2020/11/Competitor-Analysis.png',
    h3: 'Diseño de Tiendas Online',
    href: '51914315964',
    p: 'Nos enfocamos en brindarte el mejor servicio de creación de tiendas online, virtuales o ecommerce.'
  },
  {
    src: 'https://digitalmarketing.pe/wp-content/uploads/2020/11/Social-Media-Marketing.png',
    h3: 'Campañas Digitales',
    href: '51914315964',
    p: 'Conocemos tu mercado y buscamos mejorar tu presencia con tus futuros clientes.'
  }
]

const post = {
  h4: 'CREAMOS TU CAMINO AL ÉXITO',
  h2:'Más de 10 Años y 200 Clientes',
  h3:'Diseñamos el Sitio Web que necesitas',
  p: 'Contamos con la experiencia y los profesionales más capacitados para brindarte un servicio integral de Marketing Digital y Diseño Web que te permita diferenciarte en el mercado.',
  button: 'NOSOTROS'
}
const postSecond = {
  url: 'https://digitalmarketing.pe/wp-content/uploads/2022/06/agencia-digital-marketing-diseno-de-paginas-web.png',
  img: 'https://digitalmarketing.pe/wp-content/uploads/2020/11/work-together.png',
  h1: 'Trabajemos juntos',
  p: 'Deseas saber lo necesario para potenciar tu negocio en el menor tiempo posible con tu web?',
  email: 'kurono1807@gmail.com',
  phone: '914 315 964',
  button: 'CONTÁCTANOS'
  
}

const columnsDates = [
  {
    valor: 215,
    title: 'Clientes',
    type: 'number',
    color: 'blue'
  },
  {
    valor: 100,
    title: 'Satisfacción',
    type: '%',
    color: 'gold'
  },
  {
    valor: 99,
    type: '%',
    title: 'Experiencia',
    color: 'green'
  },
  {
    valor: 98,
    type: '%',
    title: 'Metas',
    color: 'red'
  }
]

const form = {
  url: 'https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/11/home9_bottom_vawe.png',
  question: 'Solicitanos una Asesoría?',
  text: 'Deseamos ser parte de tu éxito y apoyarte a crecer tu negocio. Esperamos tu contacto para poder escucharte.'
}
const footer = {
  phone: '914 315 964',
  email: 'kurono1807@gmail.com',
  address: 'Lima, Perú',
  description: '© 2023 — Developer Freelance - Perú - Herless Ramos'
}
const wS = '51914315964'
const bubbleWrap = true

function App() {

  return (
    <>
      <Navbar object={navbar} />
      <main>
        <Inicio object={inicio} />
        <Columns object={columns} />
        <Post object={post} />
        <PostSecond object={postSecond} />
        <ColumnsDates object={columnsDates} />
        <Form object={form} />
      </main>
      <WS object={wS} />
      <BubbleWrap object={bubbleWrap} />
      <Footer object={footer} />

    </>
  )
}

export default App
