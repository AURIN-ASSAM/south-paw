import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';
import { ContextConsumer } from '../context';
const HomePage = (props) => {
    const [product, setProduct] = useState({
        items: [
            {
                _id: 12321,
                name: 'Broccoli',
                image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fd852987f86aeae8b65926f9e7a260c28285ea744',
                description: 'Broccoli is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head and stalk is eaten as a vegetable. ... Broccoli has large flower heads, usually dark green in color, arranged in a tree-like structure branching out from a thick stalk which is usually light green'
                , price: 39
            },
            {
                _id: 12322,
                name: 'Carrots',
                image: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/09/2048x1364/gallery-1519672422-carrots.jpg?resize=480:*',
                description: 'The carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds.'
                , price: 29
            },
            {
                _id: 12323,
                name: 'Potatos',
                image: 'https://www.syngenta.com.au/sites/g/files/zhg116/f/styles/syngenta_large/public/1024x650px_potatoes.jpg?itok=Twshu0hK',
                description: 'The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself, a perennial in the family Solanaceae. Wild potato species can be found throughout the Americas, from the United States to southern Chile.'
                , price: 24
            },
            {
                _id: 12324,
                name: 'Cabage',
                image: 'https://images.squarespace-cdn.com/content/v1/55674e06e4b0830d6f6d4322/1434728976083-2D4KNTX58DKV1562BT6G/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/spring-cabbages.jpg?format=2500w',
                description: 'Cabbage (comprising several cultivars of Brassica oleracea) is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage, B. oleracea var. ... It is a multi-layered vegetable.'
                , price: 49
            }
        ]
    })

    useEffect(() => {
        
    }, []);
    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                {
                    product.items.map(each => {
                        return (
                            <div key={each._id} className='col-md-3  col-sm-6'>
                                <div class="cards" >
                                    <ContextConsumer>
                                        {
                                            (v) => {
                                                return (
                                                    <React.Fragment>
                                                        <img class="card-img-top" src={each.image} alt="Card image" onClick={() => { v.setProduct(each) }} />
                                                        <div class="card-body">
                                                            <h4 class="card-title">{each.name}</h4>
                                                            <p class="card-text">{each.description.slice(0, 40)}...</p>
                                                            {/* <a href="#" class="btn btn-primary">Add to cart</a> */}
                                                            <Link to='/details'>
                                                                <a href="#" class="btn btn-primary" style={{ marginLeft: '0rem' }} onClick={() => { v.setProduct(each); scrollTop(); }}>Buy</a>
                                                            </Link>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            }
                                        }



                                    </ContextConsumer>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default HomePage;