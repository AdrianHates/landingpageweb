import "./PostSecond.css"
export default function PostSecond ( { object } ) {
  return(
    <section className='post-second' style={{backgroundImage:`url(${object.url})`}}>
      <div>
      <div>{object.h1}</div>
      <p>{object.p}</p>
      <p>{object.email}</p>
      <a>{object.phone}</a>
      <button className='button-design-01'>
        {object.button}
      </button>
      </div>
      <img alt='post' src={object.img} />
    </section>
  )
}