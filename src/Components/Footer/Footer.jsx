import './Footer.css'

export default function Footer ( { object } ) {
  return(
    <footer>
      <div>
        <div>
          <img alt='phone' src='https://digitalmarketing.pe/wp-content/uploads/2019/12/img_box_29_violet.png' />
          <div>
            <div>{object.phone}</div>
            <div>{object.email}</div>
          </div>
          
        </div>
        
        <div>
          <img alt='address' src='https://digitalmarketing.pe/wp-content/uploads/2019/12/img_box_30_violet.png' />
          {object.address}
        </div>
      </div>
    <div>
      {object.description}
    </div>
    </footer>
    
  )
}