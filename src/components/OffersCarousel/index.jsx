import React, { useEffect, useState } from "react";
import api from    '../../services/api.jsx'
import Carousel from 'react-elastic-carousel'

import {Container, ContainerItems, Image, ProductName, ProductPrice, Button} from './styles.jsx'

function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffers(){
            const {data} = await api.get('products')

            const onlyOffers = data.filter(product => product.offer)

            console.log(onlyOffers)
            setOffers(onlyOffers)

        }

        loadOffers()
    }, [])

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 400, itemsToShow: 2},
        {width: 600, itemsToShow: 3},
        {width: 900, itemsToShow: 4},
        {width: 1300, itemsToShow: 5}
    ]

    return(
        <Container>
            <h2>Ofertas</h2>
            <Carousel itemsToShow={4} style={{width: '90%'}} breakPoints={breakPoints}>
                {
                   offers && offers.map( product => (
                        <ContainerItems>
                            <Image src={product.url} alt="foto do produto" />
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>R$ {product.price}</ProductPrice>
                            <Button>Peça agora</Button>
                        </ContainerItems>
                   ))
                }
            </Carousel>
        </Container>
    )
}

export default OffersCarousel