import './home.css'

export default function Home (){
    return(
        <div className="rst-app__home">
            <div className="rst-app__home-txt sectionMargin" style={{animation: 'slideRight 1s ease forwards'}}>
                <h2>Welcome to</h2>
                <h1>Burger <br/> Bungalow</h1>
            </div>
        </div>
    )
}