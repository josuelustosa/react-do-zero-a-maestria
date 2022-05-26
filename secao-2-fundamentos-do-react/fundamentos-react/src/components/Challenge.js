const Challenge = () => {
    const num1 = 90
    const num2 = 120

    return (
        <div>
            <h2>Desafio da Seção</h2>
            <p>Valor 1: {num1}</p>
            <p>Valor 2: {num2}</p>
            <button onClick={() => console.log(`A soma dos valores é: ${num1 + num2}`)}>Calcular</button>
            <p>O resultado da soma está sendo exibido no <code>console</code>.</p>
        </div>
    )
};

export default Challenge;