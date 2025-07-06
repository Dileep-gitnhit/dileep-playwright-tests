const {test, expect} = require('@playwright/test')

test('Frame Handling', async ({page}) =>
{

    await page.goto('https://demo.automationtesting.in/WebTable.html')

    await page.getByText('SwitchTo').hover();
    // await page.waitForTimeout(5000)

    await expect(page.getByText('Frames')).toBeVisible()
    await page.getByText('Frames').click()
    await page.waitForTimeout(5000)

    const frame = page.frameLocator('#singleframe')
    await frame.locator("//div/input[@type='text']").fill('zzzzzzzz')
    await page.waitForTimeout(5000)



})