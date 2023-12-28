import { test, expect } from '@playwright/test';

/*Invoke home page and deploy*/

test('home page', async({ page }) => {
    //Create a new browser context.
    //const context = await browser.newContext();
    //Create a new tab/page in the browser
   // const page = await context.newPage();
    //invoke url
    await page.goto('https://practice.expandtesting.com/radio-buttons');
    //select 'red' radio button
    const redRadioLocator = page.getByLabel('Red');
    await redRadioLocator.check();
    //select 'yellow' radio button
    const yelloRadioLocator = page.getByLabel('Yellow');
    await yelloRadioLocator.check();
    //ensure yellow is checked
    await expect(yelloRadioLocator).toBeChecked();
    //check red is unselected
    console.log(await redRadioLocator.isChecked());
   //Select favourite sport as football
   const footballLocator = page.getByLabel('Football');
   await footballLocator.check();
   //assertion to check the above
   console.log(await footballLocator.isChecked());

})