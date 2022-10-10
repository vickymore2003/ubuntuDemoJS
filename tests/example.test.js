import HomePage from "../pages/HomePage";
describe('Example', () => {
    let homepage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        homepage = new HomePage();
    })
    it('homePage should work', async () => {
        await homepage.visit();
        jest.setTimeout(15000);
    })

    it('Navbar should be displayed', async () => {
        await homepage.isNavBarDisplayed();
    })
})