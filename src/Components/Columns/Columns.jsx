import './Columns.css'

export default function Columns ( { object } ) {
  return(
    <section className='columns' style={{ }}>
      {
        object && object.map((x, i) => <div key={i}>
          <img alt={i} src={x.src} />
          <h3>{x.h3}</h3>
          <p>{x.p}</p>
          <a>Cotizar</a>
        </div>)
      }
    </section>
  )
}