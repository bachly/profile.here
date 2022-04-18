const sizes = [
    [320, 2560],
    [640, 2560],
    [768, 2560],
    [1080, 2560],
    [1440, 2560],
    [1920, 2560],
];

describe('Reponsiveness in empty state', () => {
    sizes.forEach((size) => {
        it(`Should match previous screenshot 'Profile Page' When '${size}' resolution`, () => {
            cy.setResolution(size);
            cy.visit(`/`);
            cy.matchImageSnapshot();
        });
    });
})