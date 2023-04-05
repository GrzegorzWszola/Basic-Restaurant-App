import './special-menu.css'
import image from '../../assets/special-offer.png'

export default function SpecialMenu (){
    return (
        <div className="rst-app__special-menu">
            <div className="rst-app__special-menu_container">
                <div className="rst-app__special-menu-header">
                    <h1 style={{animation: 'slideUp 1s ease forwards'}}>Special Offer</h1>
                    <h2 style={{animation: 'slideUp 1s ease forwards'}}>Hot Jalapeno Special</h2>
                    <div className='rst-app__special-menu-header_content' style={{animation: 'slideDown 1s ease forwards'}}>
                        <img src={image} alt="burgir" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit iure quos doloribus necessitatibus laboriosam beatae reprehenderit, temporibus molestiae explicabo, reiciendis hic corporis et consectetur numquam consequuntur fuga, suscipit aut.</p>
                    </div>
                </div>
            </div>
        </div>
)
}