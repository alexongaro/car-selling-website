const list = [
    {
        id:1,
        name:'Hyundai Ioniq',
        model:'77kWh 4dr AWD Auto',
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/944d4f79-003f-4bb5-8401-58bac8e14e37.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/hyundai/ioniq-6/hyundai-ioniq-6-168kw-premium/ioniq-6-563x317px-1.ashx",
        price:4289,
        monthlypay:1090.81,
        cashprice:75190,
        location:"old Trafford",
        frontimage:"https://pdg-uks-cdn.pinewooddms.com/bcfa55a0-0c05-438b-9943-97a67046d251/vehicles/d3776d05-7831-40fb-affb-237b2c7a6f25.jpg?"
    },
    {
        id:2,
        name:'BMW Ix',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/0d100226-01f0-4c7f-9b53-88a4896a921e/16d3e304-5f8c-405a-b8d2-030dbd91f6ff.svg",
        image:"https://pdg-uks-cdn.pinewooddms.com/bcfa55a0-0c05-438b-9943-97a67046d251/vehicles/100d703e-8219-4330-9e56-18c655e2bcd4.jpg?",
        price:4289,
        monthlypay:1090.81,
        cashprice:75190,
        location:"california"
    },
    {
        id:3,
        name:'DS DS 3',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2021,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d89aac04-c300-49b3-9a58-1c7d5a2ddefc.svg",
        image:"https://pdg-uks-cdn.pinewooddms.com/b04b90f8-2e99-463d-a023-7e3c771fb388/vehicles/360bfea9-c911-4948-8861-4464c17d0cf8.jpg?",
        price:4289,
        monthlypay:22066,
        cashprice:19000,
        location:"kakamega"
    },
    {
        id:4,
        name:'Peugeot ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2008,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/8df19ca6-889a-4815-89f7-03a213ef7c1c.svg",
        image:"https://pdg-uks-cdn.pinewooddms.com/b04b90f8-2e99-463d-a023-7e3c771fb388/vehicles/aad35012-4886-4144-a412-48eef72efec4.jpg?",
        price:4289,
        monthlypay:251.11,
        cashprice:251.11,
        location:"saudi"
    },
    {
        id:5,
        name:'Renault Megane',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/0b4db9e1-f44b-42c9-b186-7e6c1c1fb387.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/renault/megane/my23/renault-megane-ev60-iconic/ev60-iconic-563x317px-01.ashx",
        price:4289,
        monthlypay:250,
        cashprice:2250,
        location:"mountain view"
    },
    {
        id:6,
        name:'Ford Mustang Mach-E',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/51f66a3a-9910-4727-a268-5671de7d28df.svg",
        image:"https://pdg-uks-cdn.pinewooddms.com/87964a4e-7692-45e5-8ce9-fe1a2d307e64/vehicles/d75587b2-31a7-47bc-ade9-1390997cd07f.jpg?",
        price:4289,
        monthlypay:576.41,
        cashprice:40950,
        location:"South B"
    },
    {
        id:7,
        name:'Nissan Ariya ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/b2d7df5f-6414-4f94-a32b-5e0b9c72fbd4.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/nissan/ariya/advance/63kwh-advance-720x405px.ashx",
        price:4289,
        monthlypay:109.81,
        cashprice:75190,
        location:"kisii"
    },
    {
        id:8,
        name:'Ford Mustang Mach-E',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"",
        image:"https://pdg-uks-cdn.pinewooddms.com/87964a4e-7692-45e5-8ce9-fe1a2d307e64/vehicles/72bb4735-2f17-4e29-820a-19d49ddfde83.jpg?",
        price:4289,
        monthlypay:597,
        cashprice:43500,
        location:"nakuru"
    },
    {
        id:9,
        name:'Vauxhall Vivaro',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/68783904-adb6-44e2-8aae-8183fadcac62.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/vauxhall/vivaro/my22/electric/prime/vivaro-electric-panel-van-prime.ashx",
        price:4289,
        monthlypay:90.81,
        cashprice:40355,
        location:"kilimani"
    },
    {
        id:10,
        name:'Kia Niro 150kW ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d1cec4ab-2fa8-40a9-bfa8-a2169bd48903.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/kia/niro/my22/electric/4/kia-niro-ev-2022-4-green-right.ashx",
        price:4289,
        monthlypay:500,
        cashprice:6500,
        location:"lavington"
    },
    // {
    //     name:'suzuki alto',
    //     year:2014,
    //     image:"https://pdg-uks-cdn.pinewooddms.com/87964a4e-7692-45e5-8ce9-fe1a2d307e64/vehicles/55ccf3a1-60d9-496c-9019-e5f94e50008f.jpg?",
    //     price:4289,
    //     location:"old Trafford"
    // },{
    //     name:'suzuki alto',
    //     year:2014,
    //     image:"https://pdg-uks-cdn.pinewooddms.com/87964a4e-7692-45e5-8ce9-fe1a2d307e64/vehicles/55ccf3a1-60d9-496c-9019-e5f94e50008f.jpg?",
    //     price:4289,
    //     location:"old Trafford"
    // },{
    //     name:'suzuki alto',
    //     year:2014,
    //     image:"https://pdg-uks-cdn.pinewooddms.com/87964a4e-7692-45e5-8ce9-fe1a2d307e64/vehicles/55ccf3a1-60d9-496c-9019-e5f94e50008f.jpg?",
    //     price:4289,
    //     location:"old Trafford"
    // },
]
export default list