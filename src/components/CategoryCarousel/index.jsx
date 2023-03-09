import React, { useEffect, useState } from "react";
import api from    '../../services/api.jsx'
import Carousel from 'react-elastic-carousel'

import {Container, ContainerItems, Image, Button} from './styles'

function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories(){
            const {data} = await api.get('categories')

            setCategories(data)

        }

        loadCategories()
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
            <h2>Categorias</h2>
            <Carousel itemsToShow={4} style={{width: '90%'}} breakPoints={breakPoints}>
                {
                   categories && categories.map( category => (
                        <ContainerItems>
                            <Image src={category.url} alt="foto da categoria" />
                            <Button>{category.name}</Button>
                        </ContainerItems>
                   ))
                }
            </Carousel>
        </Container>
    )
}

export default CategoryCarousel