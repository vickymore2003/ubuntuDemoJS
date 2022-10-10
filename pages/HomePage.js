import BasePage from "./BasePage";

export default class HomePage extends BasePage{
    async visit(){
        await page.goto('http://zero.webappsecurity.com/');
        await page.waitForSelector('#nav');
    }

    async isNavBarDisplayed(){
        await page.waitForSelector('#page-nav')
        await page.waitForSelector('#homeMenu')
        await page.waitForSelector('#onlineBankingMenu')
        await page.waitForSelector('#feedback')
    }
}