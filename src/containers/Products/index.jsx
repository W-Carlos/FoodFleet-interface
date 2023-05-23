import React, { useEffect, useState } from "react";
import api from '../../services/api'
import {
    Container,
    HeaderMenu,
    ContainerProducts,
    ButtonNavigate,
    Button
} from './styles'

function Products() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0) // Estado que vai assumir o valor da categoria selecionada

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            // Criando um novo item no array de categorias com todos os produtos
            const newCategory = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategory)

        }

        loadCategories()
    }, [])
    return (
        <Container>
            <HeaderMenu>
                <h2>Menu</h2>
            </HeaderMenu>
            <ContainerProducts>
                <ButtonNavigate>
                    {categories && categories.map(category => (
                        <Button 
                            type='button' 
                            key={category.id} 
                            isActiveMenu={activeCategory === category.id}
                            onClick={() => {
                                setActiveCategory(category.id)
                            }}
                            >
                            {category.name}
                        </Button>
                    ))}
                </ButtonNavigate>
            </ContainerProducts>
        </Container>
    )
}

export default Products