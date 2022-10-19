import { useState } from "react"
import jobs from "../../../data.json"
import Filter from "../../components/Filter/Filter"
import Details from "./Details"

const Jobs = () => {
    const [tags, setTags] = useState([])
    const [showFilter, setShowFilter] = useState(false)

    const filteredJobs = tags.length > 0 ? jobs.filter(job => tags.includes(job.level)) : []

    function showFilterJobs(e) {
        const tag = e.target.textContent
        if (tags.indexOf(tag) === -1) {
            setTags([...tags, tag])
        }
        setShowFilter(true)
    }

    function removeFilters() {
        setTags([])
        setShowFilter(false)
    }

    return (
        <main className={showFilter ? "has-filter" : null}>
            {showFilter &&
                <Filter
                    typesFilters={tags}
                    deleteFilter={removeFilters}
                />
            }

            {filteredJobs.length > 0 ?
                filteredJobs.map(item => (
                    <Details
                        data={item}
                        filters={showFilterJobs}
                    />
                )) : (
                    jobs.map(item => (
                        <Details
                            data={item}
                            filters={showFilterJobs}
                        />
                    ))
                )}
        </main>
    )
}

export default Jobs