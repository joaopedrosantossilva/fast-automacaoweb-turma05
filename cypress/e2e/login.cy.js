import loginPage from "../support/pageObjects/LoginPage";

describe('Login', () => {

  it('Com sucesso - Usuario Admin', () => {
    //ARRANGE
    loginPage.visitar()

    //ACT
    loginPage.realizarLogin("admin@qabank.com","admin123")

    //ASSERT
    loginPage.validarNomeUsuarioLogado("Admin do Sistema")
    
  })

    it('Com credenciais invalidas - Usuario Admin', () => {
    //ARRANGE
    loginPage.visitar()

    //ACT
    loginPage.realizarLogin("admin@qabank.com","admin12345")

    //ASSERT
    loginPage.validarMsgCredenciaisInvalidas()

  })  
})