import { SELECTORS } from '../../../src/services/constants';

describe('Constructor page test', function () {
    this.beforeEach(function() {
        cy.intercept('GET', 'api/ingredients', {fixture: 'ingredients.json'});
        cy.viewport(1300, 800);
        cy.visit('/');
    })
//тест добавления булки в конструктор при клике на кнопку
    it('Test of adding bun', function () {
        cy.get('[data-cy=bun_1_constructor]').contains('Ингредиент_1').should('not.exist');
        cy.get('[data-cy=bun_2_constructor]').contains('Ингредиент_1').should('not.exist');
        cy.get('[data-cy=bun_ingredients]').contains('Добавить').click();
        cy.get('[data-cy=bun_1_constructor]').contains('Ингредиент_1').should('exist');
        cy.get('[data-cy=bun_2_constructor]').contains('Ингредиент_1').should('exist');
    })

//тест добавления ингредиентов в конструктор при клике на кнопку
    it('Test of adding main ingredients', function () {
        cy.get(SELECTORS.INGREDIENT_CONSTRUCTOR).contains('Ингредиент_2').should('not.exist');
        cy.get(SELECTORS.INGREDIENT_CONSTRUCTOR).contains('Ингредиент_4').should('not.exist');
        cy.get('[data-cy=main_ingredients]').contains('Добавить').click();
        cy.get(SELECTORS.INGREDIENT_CONSTRUCTOR).contains('Ингредиент_2').should('exist');
        cy.get('[data-cy=souce_ingredients]').contains('Добавить').click();
        cy.get(SELECTORS.INGREDIENT_CONSTRUCTOR).contains('Ингридиент_4').should('exist');
    })
})
