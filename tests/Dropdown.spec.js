const {test, expect} = require('@playwright/test')



test('Dropdown', async ({page}) =>{

    await page.goto('https://demo.automationtesting.in/WebTable.html')

    await page.getByText('Interactions ').hover();
    await page.waitForTimeout(5000)

    await expect(page.getByText('Drag and Drop ')).toBeVisible()
    await page.getByText('Drag and Drop ').hover()
    await page.waitForTimeout(5000)

    await page.locator('.childmenu ').click()
    await page.waitForTimeout(5000)


})