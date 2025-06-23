const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber')
const {playwright, chromium, devices} = require('@playwright/test')

Before(async function ()
{
    
    const browser = await chromium.launch({ headless: false }) //we are calling a browser here, then we are calling page, we cannot directyly mention page here like done in test
    const context = await browser.newContext({viewport: {width : 1500, height : 1000}})
    this.page = await context.newPage()
})

// Before(async function ()
// { 
//     const devicename = devices['iPad Pro 11']
//     //const device = devices[devicename]

//     const browser = await chromium.launch({ headless: false }) //we are calling a browser here, then we are calling page, we cannot directyly mention page here like done in test
//     const context = await browser.newContext({...devicename})
//     this.page = await context.newPage()
// })

After(function(){

    console.log("I am last to execute")


})