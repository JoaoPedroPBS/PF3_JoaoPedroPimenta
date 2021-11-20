const calcular = document.getElementById('calcular');


function fomata(valor)
{
    let formatador = new Intl.NumberFormat('pt-BR',
    { minimumFractionDigits: 0, maximumFractionDigits: 2 });

    return  formatador.format(valor)
}


function aplicar () {
    const nome = document.getElementById('nome').value;
    const dinheiro = document.getElementById('dinheiro').value;
    const tempo = document.getElementById('tempo').value;
    const taxa = document.getElementById('taxa').value/100;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && dinheiro !== '' && tempo !== '' && taxa !== '') {

        const valorFpoupa = fomata( (dinheiro*((((1+taxa)**tempo)-1)/taxa)).toFixed(2));

        resultado.textContent = `Bem vindo(a), ${nome}! caso você invista ${dinheiro}, a taxa de juros será de ${taxa}% ao mês, durante ${tempo} meses.
         Você terá R$ ${valorFpoupa}.`;

    }
   
    else 
    {
        resultado.textContent = 'Para calcular o sua renda , preencha todos os campos por favor.';
    }

}
calcular.addEventListener('click', aplicar);
