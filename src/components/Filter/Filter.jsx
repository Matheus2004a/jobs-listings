import iconClose from "../../../images/icon-remove.svg"
import "./Filter.css"

const Filter = (props) => {
    return (
        <section className="filter-box">
            <div className="container-tool">
                {props.name.map((item, index) => (
                    <div className="filter-tool">
                        <>
                            <span key={index}>{item}</span>
                            <button>
                                <figure>
                                    <img src={iconClose} alt="" />
                                </figure>
                            </button>
                        </>
                    </div>
                ))}
            </div>
            <button className="button-filter" onClick={props.deleteFilter}>Clear</button>
        </section>
    )
}

export default Filter