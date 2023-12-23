import './Navbar.css'
export default function Navbar ( { object } ) {
  return(
    <nav>
      {
        object && <img alt='logo' src={object.logo} />

      }
      <div>
        {
          object && object.list.map((x,i)=> <div key={i}>
            {x}
          </div>
            )
        }
      </div>
      {
        object && <a>{object.contact}</a>
      }
    </nav>
  )
}