import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

//destructing the product from props 
const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media } image='' title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product
