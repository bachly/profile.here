const sizes = [
    [320, 1920],
    [640, 1920],
    [768, 1920],
    [1080, 1920],
    [1440, 1920],
    [1920, 1920],
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