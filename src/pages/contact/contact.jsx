import './contact.css'

export default function Contact (){
    return(
        <div className="rst-app__contact">
            <div className="rst-app__contact-container">
                <h1 style={{animation: 'slideUp 1s ease forwards'}}>Contact</h1>
                <h2 style={{animation: 'slideRight 1s ease forwards'}}>Email: </h2><p style={{animation: 'slideRight 1s ease forwards'}}>ABC@gmail.com</p> 
                <h2 style={{animation: 'slideRight 1s ease forwards'}}>Phone: </h2><p style={{animation: 'slideRight 1s ease forwards'}} >XXX-XXX-XXX</p>
                <h2 style={{animation: 'slideRight 1s ease forwards'}}>Where you can find us: </h2 > <p style={{animation: 'slideRight 1s ease forwards'}}>(localization)</p>
            </div>
        </div>
    )
}