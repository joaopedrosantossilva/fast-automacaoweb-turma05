class PainelPage {

    get saqueOption(){
        return cy.get('[data-cy="nav-saque"]')
    }

    abrirPaginaDeSaque(){
        this.saqueOption.click()
    }
}

export default new PainelPage()