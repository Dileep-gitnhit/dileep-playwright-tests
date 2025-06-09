const {test, expect} = require('@playwright/test')


var userid;
test("Get user", async ({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(response.json()) //response will print in JSON format
    expect(response.status()).toBe(200)

})

test.only("Create user", async ({request}) => {
    
    const response = await request.post('https://reqres.in/api/users', 
        {

            data:{

                "name":"Marker",
                "job":"trainer"
            },
            header:{
               // 'Authorization': 'x-api-key reqres-free-v1',
                "Accept":"application/json"

            }
        }
    )

    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json()
    userid = res.id

})

test("Update user", async ({request}) => {
    


})

test("Delete user", async ({request}) => {
    


})