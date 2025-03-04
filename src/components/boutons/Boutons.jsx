import './Boutons.sass'
import cart from '../../assets/shopping-cart.png'
import euroIcon from '../../assets/euro.png'

function Boutons({ euro, panierCount }) {
    return (
        <div className='flex justify-center items-center gap-15'>
            <p className='uppercase text-3xl m-0'>home</p>
            <p className='uppercase text-3xl m-0'>eshop</p>

            <div className='relative cursor-pointer'>
                <img src={cart} alt="Panier" className='w-9' />
                {panierCount > 0 && (
                    <span className='absolute top-0 right-0 bg-red-600 text-white text-xs px-2 rounded-full'>
                        {panierCount}
                    </span>
                )}
            </div>

            <div className='flex items-center gap-2'>
                <img src={euroIcon} alt="Euro" className='w-9' />
                <span className='text-2xl font-semibold'>{Math.round(euro)}€</span>
            </div>
        </div>
    )
}

export default Boutons
