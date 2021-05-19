import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import HeaderImage from '../../images/IMG-4563.PNG'
import './style.css'

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Layout>
      <div className=" Header-Container">
        <img src={HeaderImage} alt="headerImage" className="header-image" />
      </div>
    </Layout>
   )

 }

export default HomePage