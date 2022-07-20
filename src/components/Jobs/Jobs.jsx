import { useState } from "react"
import jobs from "../../../data.json"
import Filter from "../../components/Filter/Filter"

const Jobs = () => {
    const [filters, setFilters] = useState([])
    const [showFilter, setShowFilter] = useState(false)

    function showFilterJobs(e) {
        const tool = e.target.textContent
        setFilters(tool)
        setShowFilter(true)
    }

    function removeFilters() {
        setFilters("")
        setShowFilter(false)
    }

    return (
        <main>
            {showFilter && <Filter name={filters} deleteFilter={removeFilters} />}

            {
                jobs.map((item, index) => {
                    return (
                        <div className="card-jobs" key={index}>
                            <figure>
                                <img src={item.logo} alt="" />
                                <figcaption>
                                    <div className="details-job">
                                        <small className="name-company">{item.company}</small>
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

                                    <div className="details-job">
                                        <span>{item.postedAt}</span>
                                        &middot;
                                        <span>{item.contract}</span>
                                        &middot;
                                        <span>{item.location}</span>
                                    </div>
                                </figcaption>
                            </figure>

                            <div className="tools-languages">
                                <span onClick={(e) => showFilterJobs(e)}>{item.role}</span>
                                <span onClick={(e) => showFilterJobs(e)}>{item.level}</span>
                                {item.languages.map((language, index) => {
                                    return (
                                        <span onClick={(e) => showFilterJobs(e)} key={index}>{language}</span>
                                    )
                                })}
                                {item.tools.map((tool, index) => {
                                    return (
                                        <span onClick={(e) => showFilterJobs(e)} key={index}>{tool}</span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default Jobs