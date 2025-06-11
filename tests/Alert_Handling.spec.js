const {test, expect} = require('@playwright/test')

test.describe.configure({mode : 'parallel'})


test('Alert with Ok', async ({page}) =>
{

    await page.goto('https://demo.automationtesting.in/Alerts.html')
    
    
    //expect(page.getByText('click the button to display an  alert box:')).toBeVisible()
// before enabling the alert box we need to specify the alert hnadler block.
    await page.on('dialog', async(dialog) =>
{

    expect(dialog.type()).toContain('alert')
    console.log(dialog.message())
    await dialog.accept()

})
    await page.locator('#OKTab button').click()
    await page.waitForTimeout(10000)

})



test('Alert with Ok and Cancel', async ({page}) =>
{

    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.getByText('Alert with OK & Cancel ').click()
    

    await page.on('dialog', async(dialog) =>
{

    await page.waitForTimeout(10000)
    expect(dialog.type()).toContain('confirm')
    console.log(dialog.message())
    await dialog.accept()

})
    await page.locator('#CancelTab button').click()

    await expect(page.locator('#demo')).toHaveText('You pressed Ok')
    await page.waitForTimeout(10000)

})


test.only('Alert with prompt', async ({page}) =>
{

    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.getByText('Alert with Textbox ').click()


    await page.on('dialog', async(dialog) =>
{

    await page.waitForTimeout(10000)
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name')
    console.log(dialog.message())

    expect(dialog.defaultValue()).toContain('Automation Testing user')


    await dialog.accept('Hello Dileep') ////while accepting we can pass the text to bewritten in the prompt
    await page.waitForTimeout(5000)

})
    await page.locator('#Textbox button').click()

    expect.soft(page.locator('#demo1')).toHaveText('Hello Hello team How are you today') //soft expect will not fail the test case and stop running further code after the assertion is failed
    
    await page.waitForTimeout(10000)

})