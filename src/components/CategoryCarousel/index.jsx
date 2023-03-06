import React, { useEffect } from "react";
import api from    '../../services/api.jsx'
import {Container} from './styles'

function CategoryCarousel() {
    useEffect(() => {
        async function loadCategories(){
            const response = await api.get('categories')
        }

        loadCategories()
    }, [])

    return(
        <Container>
            <p>Categorias</p>
        </Container>
    )
}

export default CategoryCarousel