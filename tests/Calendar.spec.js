// import {test, expect} from ("@playwright/test")
const {test, expect} = require('@playwright/test')
test("Calendar Handling", async ({page})=>{


    const day = "15"
    const month = '11'
    const year = "2028"

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")

    await page.locator(".react-date-picker__inputGroup").click()

    await page.locator('.react-calendar__navigation__label').click()

    await page.locator('.react-calendar__navigation__label').click()

    const yearList = await page.locator('.react-calendar__decade-view__years__year').allTextContents()
    console.log(yearList)
    
    // let boolean = false;
    for(let yr of yearList)
    {

        if(yr == year)
        {
                await expect(page.getByText(yr)).toBeVisible()
                await page.getByText(yr).click()
                break;
        }

    }

    await page.locator('.react-calendar__year-view__months__month').nth(Number(month-1)).click()
    await page.locator(".react-calendar__month-view__days__day").getByText(day).filter({hasText : day}).click()

    await page.pause()




})