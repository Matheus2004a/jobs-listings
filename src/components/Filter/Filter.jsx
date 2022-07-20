import iconClose from "../../../images/icon-remove.svg"
import "./Filter.css"

const Filter = (props) => {
    return (
        <section className="filter-box">
            <div className="filter-tool">
                <p>{props.name}</p>
                <span>
                    <figure>
                        <img src={iconClose} alt="" />
                    </figure>
                </span>
            </div>
            <button className="button-filter" onClick={props.deleteFilter}>Clear</button>
        </section>
    )
}

export default Filter