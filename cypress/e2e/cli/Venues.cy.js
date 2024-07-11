import { months } from "moment/moment";

const getTodaysDate = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const d = newDate.getDate();
    return `${month.toString().padStart(2, '0')}${d.toString().padStart(2, '0')}${year}`;
}

describe('Venues', () => {
    it('Create Venue', () => {
        cy.login();
        cy.wait(1000);
        //Go to venue page
        cy.visit('/home/venues');
        cy.wait(3000);
        //Open edit venue modal
        cy.findByTestId('venues-venues-table-add').click();
        //Enter venue info
        cy.findByTestId('input-name').type(`Venue ${getTodaysDate()}`);
        cy.findByTestId('input-addressLine1').type('Road 4489');
        cy.findByTestId('input-addressLine2').type('Hapiness Ave #568');
        cy.findByTestId('input-city').type("Aguadilla");
        cy.findByTestId('input-state').type('Puerto Rico');
        cy.findByTestId('input-postalCode').type("00663");
        //Save venue
        cy.findByTestId('modal-edit-venue-ok').click();
    });

    it('View Venue Details', () => {
        //Click details venue icon
        cy.get('[data-testid^=venues-venues-details-]').last().click();
        cy.wait(500);
        cy.findByTestId('modal-details-venue-ok').click();
    });

    it('Edit Venue', () => {
        //Open edit venue modal
        cy.get('[data-testid^=venues-venues-edit-]').last().click();
        cy.wait(500);
        //Enter venue info
        cy.findByTestId('input-name').clear().type(`Venue ${getTodaysDate()}-2`);
        cy.findByTestId('input-addressLine1').clear().type('1 Warriors Way');
        cy.findByTestId('input-addressLine2').clear();
        cy.findByTestId('input-city').clear().type("San Francisco");
        cy.findByTestId('input-state').clear().type('CA');
        cy.findByTestId('input-postalCode').clear().type("94158");
        //Move marker
        cy.findByRole('button', {
            name: /zoom out/i,
        });
        cy.get('[title^=Venue]').last()
            .trigger('mousedown', { which: 1, })
            .trigger('mousemove', { which: 1, x: 500, y: 250, force: true })
            .trigger('mouseup', { force: true })
            .wait(500);
        cy.wait(1000);
        //Save venue
        cy.findByTestId('modal-edit-venue-ok').click();
    });

    it('Delete Venue', () => {
        //Open edit venue modal
        cy.get('[data-testid^=venues-venues-delete-]').last().click();
        cy.wait(500);
        //Delete venue
        cy.findByTestId('modal-delete-venue-ok').click();
    });
});
