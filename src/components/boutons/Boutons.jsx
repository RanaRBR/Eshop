import './Boutons.sass'
import cart from '../../assets/shopping-cart.png'
import euroIcon from '../../assets/euro.png'

function Boutons({ euro, panierCount }) {
    return (
        <div className='flex justify-center items-center gap-15'>
            <p className='uppercase text-3xl m-0 cursor-pointer'>home</p>
            <p className='uppercase text-3xl m-0 cursor-pointer'>eshop</p>

            <div className='relative cursor-pointer'>
                <img src={cart} alt="Panier" className='w-7' />
                {panierCount > 0 && (
                    <span className='absolute top-0 right-0 bg-red-600 text-white text-xs px-2 rounded-full'>
                        {panierCount}
                    </span>
                )}
            </div>

            <div className='flex items-center gap-1'>
                <img src={euroIcon} alt="Euro" className='w-6' />
                <span className='text-2xl font-semibold'>{euro.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Boutons
