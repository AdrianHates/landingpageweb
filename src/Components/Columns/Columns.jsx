import './Columns.css'

export default function Columns ( { object } ) {
  return(
    <section className='columns' id='servicios' style={{ }}>
      {
        object && object.map((x, i) => <div key={i}>
          <div>
            <img alt={i} src={x.src} />
            <div>{`.0${i + 1}`}</div>
          </div>
          <h3>{x.h3}</h3>
          <p>{x.p}</p>
          <a href={`https://wa.me/+${x.href}`} target='_blank' rel='noreferrer'>
            Cotizar
          </a>
        </div>)
      }
    </section>
  )
}