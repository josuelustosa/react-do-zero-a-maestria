const Events = () => {
    const handleMyEvent = (e) => {
        // console.log(e);
        console.log('Ativou o evento ao clicar!')
    }

    const renderSomenthing = (text) => {
        if (text) {
            return <h3>Renderizando uma função fora da expressão <code>.jsx</code>.</h3>
        } else {
            return <h3>Também renderizando uma função fora da expressão <code>.jsx</code>.</h3>
        }
    }

    return (
        <div>
            <div>
                {/*23. Eventos*/}
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                {/*24. Funções nos eventos*/}
                <button onClick={() => {console.log('Você clicou em uma função no própio evento direto no HTML!')}}>Clique aqui</button>
                <button onClick={() => {
                    if (true) {
                        console.log('Você clicou em uma função no própio evento direto no HTML!')}}
                    }
                    >
                    Clique aqui
                </button>
            
            
            
            </div>
                {/*25. Função de renderização*/}
            
            <div>{renderSomenthing(true)}</div>
            <div>{renderSomenthing(false)}</div>
        </div>
    )
};

export default Events;