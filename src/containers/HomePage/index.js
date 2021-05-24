import React, {useEffect} from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import HeaderImage from '../../images/newimg.png'
import SocialMediaSection from './socialMediaSection'
import './style.css'

import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);


  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <button className="header-button" key={category.name}>
          {
            category.parentId ? <a className="header-btn-link"
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a> :
            <span><a className="header-btn-link"
            href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
            {category.name}
          </a></span>
          }
          {/* {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null} */}
        </button>
      );
    }
    return myCategories;
  }
  return(
    <Layout>
      <div className=" Header-Container">
        <div className="button-container">
        {category.categories.length > 0 ? renderCategories(category.categories) : null}
          </div>
      </div>
      <div>

      <SocialMediaSection/>
      </div>
    </Layout>
   )

 }

export default HomePage