import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
function Cards({ list }) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{list.plan}</h5>
                    <h6 className="card-price text-center">{list.usd}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        {list.features.map((items) =>
                            <li className={`${items.txtpro ? "text-muted" : ""}`}>
                                <span className="fa-li">
                                    < FontAwesomeIcon icon={items.txtpro ? faTimes : faCheck} />
                                </span>
                                {items.title}
                            </li>
                        )}
                    </ul>
                    <div className="d-grid">
                        <a href="/" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;