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

    it('should accept Portfolio input', () => {
        const values = [
            {
                'name': 'Google',
                'description': 'Javascript'
            },
            {
                'name': 'Spotify',
                'description': 'CSS, HTML, JS'
            },
            {
                'name': 'Microsoft',
                'description': 'Vanila JS'
            },
            {
                'name': 'Facebook',
                'description': 'ReactJS, CSS3, HTML'
            },
        ]

        cy.get('[data-cypress=portfolio-pod] button[data-cypress=add-content]').click();

        cy.get('[data-cypress=portfolio-pod] form[data-cypress=list-form]')
            .should('be.visible');

        values.forEach((value, index) => {
            cy.get(`[data-cypress=portfolio-pod] form[data-cypress=list-form] [data-cypress=list-item-${index}] input[name=list-item-name]`)
                .type(value.name);
            cy.get(`[data-cypress=portfolio-pod] form[data-cypress=list-form] [data-cypress=list-item-${index}] input[name=list-item-description]`)
                .type(value.description);
        })

        cy.get('[data-cypress=portfolio-pod] form[data-cypress=list-form] button[type=submit]').click();

        // assertions

        cy.get('[data-cypress=portfolio-pod] [data-cypress=list-display] [data-cypress=list-item-0] [data-cypress=list-item-name')
            .should('include.text', values[0].name);
        cy.get('[data-cypress=portfolio-pod] [data-cypress=list-display] [data-cypress=list-item-0] [data-cypress=list-item-description')
            .should('include.text', values[0].description);

        cy.get('[data-cypress=portfolio-pod] [data-cypress=list-display] [data-cypress=list-item-3] [data-cypress=list-item-name')
            .should('include.text', values[3].name);
        cy.get('[data-cypress=portfolio-pod] [data-cypress=list-display] [data-cypress=list-item-3] [data-cypress=list-item-description')
            .should('include.text', values[3].description);
    })
})