// Função que irá formatar os valores monetários dos produtos

const formatCurrency = value => {
    return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

export default formatCurrency