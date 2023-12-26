import './Post.css'

export default function Post ( { object } ) {
  return(
    <section className='post'>
      <div>
        <img alt='' src='https://digitalmarketing.pe/wp-content/uploads/2020/11/website_traffic.png' />
      </div>
      {
        object && <div>
          <h4>{object.h4}</h4>
          <h2>{object.h2}</h2>
          <h3>{object.h3}</h3>
          <p>{object.p}</p>
          <button>{object.button}</button>
        </div>
      }
      
    </section>
  )
}