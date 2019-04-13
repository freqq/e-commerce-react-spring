/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './Pagination.css'

class Pagination extends Component {
    render() {
        return (
            <div className="pagination-container">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item ">
                            <a class="page-link active" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i className="fas fa-chevron-right"/>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pagination