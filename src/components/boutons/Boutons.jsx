import './Boutons.sass'
import cart from '../../assets/shopping-cart.png'
import euro from '../../assets/euro.png'


function Boutons() {
    return(
        <div className='flex justify-center items-start gap-15'>
            <p className='uppercase text-3xl m-0 cursor-pointer'>home</p>
            <p className='uppercase text-3xl m-0 cursor-pointer'>eshop</p>
            <img src={cart} alt="" className='w-7 cursor-pointer'/>
            <img src={euro} alt="" className='w-7 cursor-pointer'/>
        </div>
    )
}

export default Boutons

