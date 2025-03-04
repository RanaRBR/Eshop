import './Boutons.sass'
import cart from '../../assets/shopping-cart.png'
import euro from '../../assets/euro.png'


function Boutons() {
    return(
        <div className='flex justify-center items-center gap-15'>
            <p className='uppercase text-3xl m-0'>home</p>
            <p className='uppercase text-3xl m-0'>eshop</p>
            <a href="" className='cursor-pointer'><img src={cart} alt="" className='w-9'/>
            </a>
            <a href="" className='cursor-pointer'><img src={euro} alt="" className='w-9'/>
            </a>
        </div>
    )
}

export default Boutons

