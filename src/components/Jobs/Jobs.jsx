import { useState } from "react"
import jobs from "../../../data.json"
import Filter from "../../components/Filter/Filter"

const Jobs = () => {
    const [filters, setFilters] = useState([])
    const [showFilter, setShowFilter] = useState(false)

    function showFilterJobs(e) {
        const tag = e.target.textContent
        if (filters.indexOf(tag) === -1) {
            setFilters([...filters, tag])
        }
        setShowFilter(true)
    }

    function removeFilters() {
        setFilters([])
        setShowFilter(false)
    }

    return (
        <main className={showFilter ? "has-filter" : null}>
            {showFilter && <Filter typesFilters={filters} deleteFilter={removeFilters} />}

            {jobs.map(item => {
                return (
                    <div className={`card-jobs ${item.featured && "card-jobs-featured"}`} key={item.id}>
                        <figure>
                            <img src={item.logo} alt={item.company} />
                            <figcaption>
                                <div className="details-job">
                                    <h4 className="name-company">{item.company}</h4>
                                    {item.new ? (
                                        <span className='alerts'>New!</span>
                                    ) : (
                                        ""
                                    )}
                                    {item.featured ? (
                                        <span className="alerts">Featured</span>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <h3 className='names-jobs'>{item.position}</h3>

                                <ul className="details-job">
                                    <li>{item.postedAt}</li>
                                    &#183;
                                    <li>{item.contract}</li>
                                    &#183;
                                    <li>{item.location}</li>
                                </ul>
                            </figcaption>
                        </figure>

                        <div className="tools-languages">
                            <span onClick={(e) => showFilterJobs(e)}>{item.role}</span>
                            <span onClick={(e) => showFilterJobs(e)}>{item.level}</span>
                            {item.languages.map((language, index) => (
                                <span onClick={(e) => showFilterJobs(e)} key={index}>{language}</span>
                            )
                            )}
                            {item.tools.map((tool, index) => (
                                <span onClick={(e) => showFilterJobs(e)} key={index}>{tool}</span>
                            )
                            )}
                        </div>
                    </div>
                )
            })
            }
        </main>
    )
}

export default Jobs