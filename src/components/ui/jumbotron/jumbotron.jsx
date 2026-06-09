import "./jumbotron.css"

function Jumbotron ({ background, title, subtitle }) {

    return (
        <div className="jumbotron" style={{backgroundImage: `url(${background})`}}>
            <div className="container d-flex flex-column text-white text-center gap-2 justify-content-center h-100">
                {title && (<h1 className="m-0 fw-light titleStyle">{title}</h1>)}
                {subtitle && (<h5 className="m-0 fw-light subtitleStyle">{subtitle}</h5>)}
            </div>
        </div>
    )

}

export default Jumbotron;