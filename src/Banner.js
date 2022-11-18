import './css/banner.css'

const Banner = _ => {
    return(
        <section id="banner">
            <h1>Countries App</h1>
            <div className="banner-flags-container"></div>
            <p className="bannerText">
            Filter and display country details fetched from <a href="https://restcountries.com/">REST Countries</a>
            </p>
        </section>
    )
}

export default Banner;