class SaquePage {

    get valorInput(){
        return cy.get('[data-cy="input-saque-valor"]')
    }

    get realizarSaqueButton(){
        return cy.get('[data-cy="btn-sacar"]')
    }

    get mensagemDeRetornoDaTransacao(){
        return cy.get('[data-cy="saque-message"]')
    }

    preencherValor(valor){
        this.valorInput.type(valor)
    }

    clicarEmRealizarSaque(){
        this.realizarSaqueButton.click()
    }

    validarMsgSaqueRealizadoComSucesso(valor){
        const valorFormatado = parseFloat(valor).toFixed(2).replace('.',',');
        this.mensagemDeRetornoDaTransacao.should('have.text', `Saque de R$ ${valorFormatado} realizado com sucesso.`)
    }

}

export default new SaquePage()