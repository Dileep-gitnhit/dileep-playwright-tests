const {test, expect} = require('@playwright/test')


var userid;


test.describe.configure({mode: 'serial'})

test("Get user", async ({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json()) //response will print in JSON format
    expect(response.status()).toBe(200)

})

test("Create user", async ({request}) => {
    
    const response = await request.post('https://reqres.in/api/users', 
        {

            data:{

                "name":"Marker",
                "job":"trainer"
            },
            headers:{
               // 'Authorization': 'x-api-key reqres-free-v1',
                "x-api-key": "reqres-free-v1",
                "Accept":"application/json"

            }
        })

    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json()
    userid = res.id

})

test("Update user", async ({request}) => {
    
const response = await request.put("https://reqres.in/api/users/"+userid,
                                    {

            data:{

                "name":"HENRY",
                "job":"trainer"
            },
            headers:{
                "x-api-key": "reqres-free-v1",
                "Accept":"application/json"

            }
        })

        console.log(await response.json())
        expect(response.status()).toBe(200)


})

test("Delete user", async ({request}) => {
    
        const response = await request.delete("https://reqres.in/api/users/"+userid,
            {
            headers:{
                "x-api-key": "reqres-free-v1",
                "Accept":"application/json"

            }
                }   )
        expect(response.status()).toBe(204)

})