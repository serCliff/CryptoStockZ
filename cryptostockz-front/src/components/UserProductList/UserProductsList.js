import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import { withCookies } from 'react-cookie';

import { GetUserProducts } from  '../../services/BackendService';


class UserProductsList extends React.Component {

    constructor(props){
        super(props);
        const {cookies} = props;
        this.state = {
            user_products: [],
            token: cookies.get('x-access-token'),
            roles: cookies.get('roles'),
            username: cookies.get('username')
        };
    }

    componentDidMount() {
       GetUserProducts(this.state.token)
        .then(function(response){
            console.log(JSON.stringify(response));
            this.setState({
                user_products: response.data.products
            });
        }.bind(this));
    }

    render() {
        return (
            <React.Fragment>
                {this.state.user_products.length === 0 ? (
                    <Grid align="center" container spacing={5}>
                        <span>There are no products</span>
                    </Grid>
                ) : (
                        <Grid align="center" container spacing={5}>
                            {this.state.user_products.map((product) => {
                                return (
                                    <Grid item xs={6} key={product.id}>
                                        <ProductCard productInfo={product} digital={true} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )
                }
            </React.Fragment>
        )
    }
}

export default withCookies(UserProductsList);