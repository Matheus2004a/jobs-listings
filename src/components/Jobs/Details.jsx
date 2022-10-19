const Details = (props) => {
    const { id, company, logo, featured,
        level, location, position, postedAt,
        role, tools, contract, languages
    } = props.data

    function applyFilter(e) {
        props.filters(e)
    }

    return (
        <div className={`card-jobs ${featured && "card-jobs-featured"}`} key={id}>
            <figure>
                <img src={logo} alt={company} />
                <figcaption>
                    <div className="details-job">
                        <h4 className="name-company">{company}</h4>
                        {props.data.new ? (
                            <span className='alerts'>New!</span>
                        ) : (
                            null
                        )}
                        {featured ? (
                            <span className="alerts">Featured</span>
                        ) : (
                            null
                        )}
                    </div>
                    <h3 className='names-jobs'>{position}</h3>

                    <ul className="details-job">
                        <li>{postedAt}</li>
                        &#183;
                        <li>{contract}</li>
                        &#183;
                        <li>{location}</li>
                    </ul>
                </figcaption>
            </figure>

            <div className="tools-languages">
                <span onClick={(e) => applyFilter(e)}>{role}</span>
                <span onClick={(e) => applyFilter(e)}>{level}</span>
                {languages.map((language, index) => (
                    <span onClick={(e) => applyFilter(e)} key={index}>{language}</span>
                )
                )}
                {tools.map((tool, index) => (
                    <span onClick={(e) => applyFilter(e)} key={index}>{tool}</span>
                )
                )}
            </div>
        </div>
    )
}

export default Details