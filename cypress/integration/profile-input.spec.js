describe('Profile input', () => {
    before(() => {
        cy.visit('/')
    })

    it('accepts Name input', () => {
        const field = 'name';
        const value = 'Bach Ly';

        cy.get(`[data-cypress=${field}-display]`)
            .click();
        cy.get(`[data-cypress=${field}-input-form] input[name=${field}]`)
            .should('be.visible')
            .type(value);
        cy.get(`[data-cypress=${field}-input-form] button[type=submit]`)
            .click();
        cy.get(`[data-cypress=${field}-display]`)
            .should('include.text', value)
    })

    it('accepts Location input', () => {
        const field = 'location';
        const value = 'Sydney, Australia';
        const firstname = 'Bach';

        cy.get(`[data-cypress=${field}-display]`)
            .click();
        cy.get(`[data-cypress=map-title]`)
            .should('be.visible');
        cy.get(`[data-cypress=map-image]`)
            .should('not.exist');

        cy.get(`[data-cypress=${field}-input-form] input[name=${field}]`)
            .should('be.visible')
            .type(value);
        cy.get(`[data-cypress=${field}-input-form] button[type=submit]`)
            .click();
        cy.get(`[data-cypress=${field}-display]`)
            .should('include.text', value)

        cy.get(`[data-cypress=map-image]`)
            .should('be.visible')
            .should('have.attr', 'src')
            .should('include', encodeURIComponent(value));
        cy.get(`[data-cypress=map-title]`)
            .should('not.exist');

        cy.get(`[data-cypress=map-description]`)
            .should('be.visible')
            .should('include.text', `Bach lives in ${value}`);
    })

    it('accepts Language input', () => {
        const field = 'language';
        const value = 'French, German, English';

        cy.get(`[data-cypress=${field}-display]`)
            .click();
        cy.get(`[data-cypress=${field}-input-form] input[name=${field}]`)
            .should('be.visible')
            .type(value);
        cy.get(`[data-cypress=${field}-input-form] button[type=submit]`)
            .click();
        cy.get(`[data-cypress=${field}-display]`)
            .should('include.text', value)
    })

    it('should accept Skills input', () => {
        const values = [
            {
                skillName: 'CSS',
                skillStrength: 'Strong',
                bgColor: 'bg-gray-900'
            },
            {
                skillName: 'HTML',
                skillStrength: 'Strong',
                bgColor: 'bg-gray-900'
            },
            {
                skillName: 'Javascript',
                skillStrength: 'Intermediate',
                bgColor: 'bg-gray-600'
            },
            {
                skillName: 'AWS',
                skillStrength: 'Newbie',
                bgColor: 'bg-gray-400'
            }
        ]

        values.forEach((value, index) => {
            cy.get(`[data-cypress=add-skill-button]`)
                .should('be.visible')
                .should('include.text', 'Add skill')
                .click();

            cy.get(`[data-cypress=add-skill-form] input[name=skill-name]`)
                .should('be.visible')
                .type(value.skillName);

            cy.get(`[data-cypress=add-skill-form] select[name=skill-strength]`)
                .should('be.visible')
                .select(value.skillStrength);

            cy.get('[data-cypress=add-skill-form] button[type=submit]')
                .click();

            cy.get(`[data-cypress=skill-list-display] [data-cypress=skill-list-item]:nth-child(${index + 1})`)
                .should('have.class', value.bgColor);

            cy.get(`[data-cypress=skill-list-display] [data-cypress=skill-list-item]:nth-child(${index + 1}) [data-cypress=skill-name]`)
                .should('include.text', value.skillName);
        })
    })
})