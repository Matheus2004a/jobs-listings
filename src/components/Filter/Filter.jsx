import { useState } from "react"
import iconClose from "../../../images/icon-remove.svg"
import "./Filter.css"

const Filter = (props) => {
    const [filterTags, setFilterTags] = useState([])

    function removeFilterById(index) {
        const tagsRemoved = props.typesFilters.splice(index, 1)
        setFilterTags([...filterTags, tagsRemoved])
        if (props.typesFilters.length === 0) {
            props.deleteFilter()
        }
    }

    return (
        <section className="filter-box">
            <div className="container-tool">
                {filterTags && props.typesFilters.map((item, index) => (
                    <div className="filter-tool" key={index}>
                        <span>{item}</span>
                        <button onClick={() => removeFilterById(index)}>
                            <figure>
                                <img src={iconClose} alt="icon-close" />
                            </figure>
                        </button>
                    </div>
                ))}
            </div>
            <button className="button-filter" onClick={props.deleteFilter}>Clear</button>
        </section>
    )
}

export default Filter