import './css/banner.css'

const Banner = _ => {
    return(
        <section className="banner" id="banner">
            <h1>Countries App</h1>
            <div className="banner-flags-container">
                <img src="https://flagcdn.com/w320/in.png" alt="random flag displayed for enhancing design"/>
                <img src="https://flagcdn.com/w320/ch.png" alt="random flag displayed for enhancing design"/>
                <img src="https://flagcdn.com/w320/fr.png" alt="random flag displayed for enhancing design"/>
                <img src="https://flagcdn.com/w320/au.png" alt="random flag displayed for enhancing design"/>
                <img src="https://flagcdn.com/w320/us.png" alt="random flag displayed for enhancing design"/>
            </div>
            <p className="bannerText">
            Filter and display country details fetched from <a href="https://restcountries.com/" target="_blank">REST Countries</a>
            </p>

            <a href="#filter-countries" className="btn">Get Searching!</a>
        </section>
    )
}

export default Banner;