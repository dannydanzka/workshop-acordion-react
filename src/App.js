import React from 'react';

import Acordion from './components/acordion';

function App() {
    return (
        <div>
            <Acordion
                title="Ejemplo de acordion"
                content="Lorem ipsum..."
                bgColor="#000"
            />
            <Acordion
                title="Porque universidad React"
                content="El curso mas completo y actualizado de React, aprenderas desde nivel cero hasta conocer y dominar no solo React si no su core y podras crear componentes de calidad de produccion"
            />
            <Acordion
                title="Ejemplo de acordion 3"
                content="Lorem ipsum... 3"
                bgColor="orangered"
            />
        </div>
    );
}

export default App;
