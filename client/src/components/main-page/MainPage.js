import React, {Component} from 'react'
import Header from '../header/Header'
import Categories from '../categories/Categories'
import BelowCategoriesContent from '../below-categories/BelowCategoriesContent'
import UnderTopNavbarMenu from '../categories/under-top-navbar-menu/UnderTopNavbarMenu';
import Footer from '../footer/Footer';
import OverFooterText from '../over-footer-text/OverFooterText'

class MainPage extends Component {
    render() {
        return (
            <div className="main-page-container">
                <Header />
                <UnderTopNavbarMenu mainpage={true} />
                <Categories />
                <BelowCategoriesContent />
                <OverFooterText />
                <Footer />
            </div>
        )
    }
}

export default MainPage