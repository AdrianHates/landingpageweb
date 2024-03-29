import "./PostSecond.css"
export default function PostSecond ( { object, id } ) {
  return(
    <section className='post-second' id={id} style={{backgroundImage:`url(${object.url})`}}>
      <div>
      <div>{object.h1}</div>
      <p>{object.p}</p>
      <p>{object.email}</p>
      <a>{object.phone}</a>
      <a href={`https://wa.me/+${object.href}`} className='button-design-01'>
        {object.button}
      </a>
      </div>
      <img alt='post' src={object.img} />
    </section>
  )
}