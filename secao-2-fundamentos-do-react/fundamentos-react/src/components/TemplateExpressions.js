const TemplateExpressions = () => {
    
    const name = 'Josué Lustosa';
    const data = {
        age: 21,
        job: 'Frontend Developer'
    };
    
    return (
        <div>
            <h2>Olá, {name}. Seja bem-vindo!</h2>
            <p>Você tem {data.age} anos de idade e atua como {data.job}.</p>
        </div>
    )
}

export default TemplateExpressions;