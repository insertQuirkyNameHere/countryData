import './css/countryCard.css'

const CountryCard = ({country}) =>{
    return(
        <div className="country-card">
            <div className="img-container">
                <img src={country.flags.png} alt={`${country.name.common}'s flag`} />
            </div>

            <div className="txt-container">
                <h3>{country.name.common}</h3>

                <div className="continent-info">
                    <div className="continent">Continent: {country.continents.map( (continent, index) => <span key={index}>{`${continent} `}</span>)}</div>
                    <div className="region">Region: {country.subregion}</div>
                </div>

                <div className="country-info">
                    <div className="capital">Capital: {country.capital}</div>
                    <div className="capital">Area: {country.area} km<sup>2</sup></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default CountryCard;