import React, {Component} from 'react'
import './Breadcrumbs.css'

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="breadcrumb-container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">morele.net</a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">Laptopy</li>
                        <li className="breadcrumb-item" aria-current="page">Laptopy</li>
                        <li className="breadcrumb-item active" aria-current="page">Netbooki, Laptopy, ultrabooki</li>
                    </ol>
                </nav>
                <h3>Netbooki, laptopy, ultrabooki <small>(8001)</small></h3>
            </div>
        )
    }
}

export default Breadcrumbs