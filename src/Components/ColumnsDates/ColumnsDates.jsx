import './ColumnsDates.css'
export default function ColumnsDates ( { object, id } ) {
  return(
    <section className='columns-dates' id={id}>
      {
        object && object.map((x, i) => <div key={i}>
          <h1>{x.valor}{x.type==='%'?'%':''}</h1>
          <h3>{x.title}</h3>
          <div>
            <div style={{ backgroundColor: x.color, width: x.type==='%'?`${x.valor}%`:`${x.valor/1000*100}%`}}></div>
          </div>
        </div>)
      }
    </section>

  )
}