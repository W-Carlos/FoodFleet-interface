import React from "react";
import Button from '../../components/Button'
import { 
    Container, 
    SectionHome, 
    ContainerItem,
    TextHome
} from './styles'

import CategoryCarousel from "../../components/CategoryCarousel";

function Home(){
    return (
        <Container>
                <SectionHome>
                    <ContainerItem>
                        <TextHome>
                            <h1>Comida <span>deliciosa</span> a <br></br> um clique de distância</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                                Varius sed pharetra dictum neque massa congue
                            </p>
                            <Button style={{fontSize: '15px', height: '40px'}}>Veja o menu</Button>
                        </TextHome>
                    </ContainerItem>
                </SectionHome>
                <CategoryCarousel />
                
        </Container>
    )
}

export default Home