
  const itemListArray = [
    [
      {
        id:1,
        amount:1,
        'name':'MERCEDES BENZ',
        model:'77kWh 4dr AWD Auto',
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/944d4f79-003f-4bb5-8401-58bac8e14e37.svg",
        image:"https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:1090.81,
        cashprice:75190,
        location:"old Trafford",
        frontimage:"https://pdg-uks-cdn.pinewooddms.com/bcfa55a0-0c05-438b-9943-97a67046d251/vehicles/d3776d05-7831-40fb-affb-237b2c7a6f25.jpg?"
    },
    {
        id:2,
        amount:1,

        "name":'BMW Ix',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/0d100226-01f0-4c7f-9b53-88a4896a921e/16d3e304-5f8c-405a-b8d2-030dbd91f6ff.svg",
        image:"https://images.pexels.com/photos/93632/pexels-photo-93632.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:1090.81,
        cashprice:75190,
        location:"california"
    },
    {
        id:3,
        amount:1,

        "name":'DS DS 3',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2021,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d89aac04-c300-49b3-9a58-1c7d5a2ddefc.svg",
        image:"https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:22066,
        cashprice:19000,
        location:"kakamega"
    },
    {
        id:4,
        amount:1,

        "name":'Peugeot ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2008,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/8df19ca6-889a-4815-89f7-03a213ef7c1c.svg",
        image:"https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:251.11,
        cashprice:251.11,
        location:"saudi"
    },
    {
        id:5,
        amount:1,

        "name":'Renault Megane',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/0b4db9e1-f44b-42c9-b186-7e6c1c1fb387.svg",
        image:"https://images.pexels.com/photos/215528/pexels-photo-215528.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:250,
        cashprice:2250,
        location:"mountain view"
    },
    {
        id:6,
        "name":'Ford Mustang Mach-E',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/51f66a3a-9910-4727-a268-5671de7d28df.svg",
        image:"https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:576.41,
        cashprice:40950,
        location:"South B"
    },
    {
        id:7,
        "name":'Nissan Ariya ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/b2d7df5f-6414-4f94-a32b-5e0b9c72fbd4.svg",
        image:"https://images.pexels.com/photos/164654/pexels-photo-164654.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:109.81,
        cashprice:75190,
        location:"kisii"
    },
    {
        id:8,
        "name":'Ford Mustang Mach-E',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"",
        image:"https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:597,
        cashprice:43500,
        location:"nakuru"
    },
    {
        id:9,
        "name":'Vauxhall Vivaro',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/68783904-adb6-44e2-8aae-8183fadcac62.svg",
        image:"https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:90.81,
        cashprice:40355,
        location:"kilimani"
    },
    {
        id:10,
        "name":'Kia Niro 150kW ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d1cec4ab-2fa8-40a9-bfa8-a2169bd48903.svg",
        image:"https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:500,
        cashprice:6500,
        location:"lavington"
    },
    ],
    [
      {
        id:1,
        "name":'AUDI',
        model:'77kWh 4dr AWD Auto',
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/944d4f79-003f-4bb5-8401-58bac8e14e37.svg",
        image:"https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:4289,
        monthlypay:1090.81,
        cashprice:75190,
        location:"old Trafford",
        frontimage:"https://pdg-uks-cdn.pinewooddms.com/bcfa55a0-0c05-438b-9943-97a67046d251/vehicles/d3776d05-7831-40fb-affb-237b2c7a6f25.jpg?"
    },
    {
        id:2,
        "name":'BMW Ix',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        image:"https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?auto=compress&cs=tinysrgb&w=600",

        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/0d100226-01f0-4c7f-9b53-88a4896a921e/16d3e304-5f8c-405a-b8d2-030dbd91f6ff.svg",
        price:4289,
        monthlypay:1090.81,
        cashprice:75190,
        location:"california"
    },
    {
        id:3,
        "name":'DS DS 3',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2021,
        image:"https://images.pexels.com/photos/1054211/pexels-photo-1054211.jpeg?auto=compress&cs=tinysrgb&w=600",

        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d89aac04-c300-49b3-9a58-1c7d5a2ddefc.svg",
        price:4289,
        monthlypay:22066,
        cashprice:19000,
        location:"kakamega"
    },
    {
        id:4,
        "name":'Peugeot ',
        image:"https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600",

        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2008,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/8df19ca6-889a-4815-89f7-03a213ef7c1c.svg",
        price:4289,
        monthlypay:251.11,
        cashprice:251.11,
        location:"saudi"
    },
    {
        id:5,
        "name":'Renault Megane',
        image:"https://images.pexels.com/photos/15535632/pexels-photo-15535632/free-photo-of-audi-on-rural-road.jpeg?auto=compress&cs=tinysrgb&w=600",

        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/0b4db9e1-f44b-42c9-b186-7e6c1c1fb387.svg",
        price:4289,
        monthlypay:250,
        cashprice:2250,
        location:"mountain view"
    },
    {
        id:6,
        "name":'Ford Mustang Mach-E',
        image:"https://images.pexels.com/photos/6335848/pexels-photo-6335848.jpeg?auto=compress&cs=tinysrgb&w=600",

        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/51f66a3a-9910-4727-a268-5671de7d28df.svg",
        price:4289,
        monthlypay:576.41,
        cashprice:40950,
        location:"South B"
    },
    {
        id:7,
        "name":'Nissan Ariya ',
        image:"https://images.pexels.com/photos/6894432/pexels-photo-6894432.jpeg?auto=compress&cs=tinysrgb&w=600",

        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/b2d7df5f-6414-4f94-a32b-5e0b9c72fbd4.svg",
        price:4289,
        monthlypay:109.81,
        cashprice:75190,
        location:"kisii"
    },
    {
        id:8,
        "name":'Ford Mustang Mach-E',
        image:"https://images.pexels.com/photos/10535367/pexels-photo-10535367.jpeg?auto=compress&cs=tinysrgb&w=600",

        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"",
        price:4289,
        monthlypay:597,
        cashprice:43500,
        location:"nakuru"
    },
    {
        id:9,
        "name":'Vauxhall Vivaro',
        image:"https://images.pexels.com/photos/7559055/pexels-photo-7559055.jpeg?auto=compress&cs=tinysrgb&w=600",

        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/68783904-adb6-44e2-8aae-8183fadcac62.svg",
        price:4289,
        monthlypay:90.81,
        cashprice:40355,
        location:"kilimani"
    },
    {
        id:10,
        "name":'Kia Niro 150kW ',
        image:"https://images.pexels.com/photos/4101746/pexels-photo-4101746.jpeg?auto=compress&cs=tinysrgb&w=600",
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d1cec4ab-2fa8-40a9-bfa8-a2169bd48903.svg",
        price:4289,
        monthlypay:500,
        cashprice:6500,
        location:"lavington"
    },
    ],
    [
      {
        id:1,
        "name":'BMW',
        model:'77kWh 4dr AWD Auto',
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/944d4f79-003f-4bb5-8401-58bac8e14e37.svg",
        image:"https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:1090.81,
        cashprice:75190,
        location:"old Trafford",
        frontimage:"https://pdg-uks-cdn.pinewooddms.com/bcfa55a0-0c05-438b-9943-97a67046d251/vehicles/d3776d05-7831-40fb-affb-237b2c7a6f25.jpg?"
    },
    {
        id:2,
        "name":'BMW Ix',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/0d100226-01f0-4c7f-9b53-88a4896a921e/16d3e304-5f8c-405a-b8d2-030dbd91f6ff.svg",
        image:"https://pdg-uks-cdn.pinewooddms.com/bcfa55a0-0c05-438b-9943-97a67046d251/vehicles/100d703e-8219-4330-9e56-18c655e2bcd4.jpg?",
        image:"https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:1090.81,
        cashprice:75190,
        location:"california"
    },
    {
        id:3,
        "name":'DS DS 3',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2021,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d89aac04-c300-49b3-9a58-1c7d5a2ddefc.svg",
        image:"https://pdg-uks-cdn.pinewooddms.com/b04b90f8-2e99-463d-a023-7e3c771fb388/vehicles/360bfea9-c911-4948-8861-4464c17d0cf8.jpg?",
        image:"https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:22066,
        cashprice:19000,
        location:"kakamega"
    },
    {
        id:4,
        "name":'Peugeot ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2008,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/8df19ca6-889a-4815-89f7-03a213ef7c1c.svg",
        image:"https://pdg-uks-cdn.pinewooddms.com/b04b90f8-2e99-463d-a023-7e3c771fb388/vehicles/aad35012-4886-4144-a412-48eef72efec4.jpg?",
        image:"https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:251.11,
        cashprice:251.11,
        location:"saudi"
    },
    {
        id:5,
        "name":'Renault Megane',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/0b4db9e1-f44b-42c9-b186-7e6c1c1fb387.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/renault/megane/my23/renault-megane-ev60-iconic/ev60-iconic-563x317px-01.ashx",
        image:"https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:250,
        cashprice:2250,
        location:"mountain view"
    },
    {
        id:6,
        "name":'Ford Mustang Mach-E',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/51f66a3a-9910-4727-a268-5671de7d28df.svg",
        image:"https://pdg-uks-cdn.pinewooddms.com/87964a4e-7692-45e5-8ce9-fe1a2d307e64/vehicles/d75587b2-31a7-47bc-ade9-1390997cd07f.jpg?",
        image:"https://images.pexels.com/photos/170813/pexels-photo-170813.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:576.41,
        cashprice:40950,
        location:"South B"
    },
    {
        id:7,
        "name":'Nissan Ariya ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/b2d7df5f-6414-4f94-a32b-5e0b9c72fbd4.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/nissan/ariya/advance/63kwh-advance-720x405px.ashx",
        image:"https://images.pexels.com/photos/10573462/pexels-photo-10573462.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:109.81,
        cashprice:75190,
        location:"kisii"
    },
    {
        id:8,
        "name":'Ford Mustang Mach-E',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"",
        image:"https://pdg-uks-cdn.pinewooddms.com/87964a4e-7692-45e5-8ce9-fe1a2d307e64/vehicles/72bb4735-2f17-4e29-820a-19d49ddfde83.jpg?",
        image:"https://images.pexels.com/photos/898336/pexels-photo-898336.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:597,
        cashprice:43500,
        location:"nakuru"
    },
    {
        id:9,
        "name":'Vauxhall Vivaro',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/68783904-adb6-44e2-8aae-8183fadcac62.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/vauxhall/vivaro/my22/electric/prime/vivaro-electric-panel-van-prime.ashx",
        image:"https://images.pexels.com/photos/5381501/pexels-photo-5381501.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:90.81,
        cashprice:40355,
        location:"kilimani"
    },
    {
        id:10,
        "name":'Kia Niro 150kW ',
        model:"240kW xDrive40 M Sport 76.6kWh 5dr",
        year:2014,
        carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d1cec4ab-2fa8-40a9-bfa8-a2169bd48903.svg",
        image:"https://www.evanshalshaw.com/-/media/special-offer-management/kia/niro/my22/electric/4/kia-niro-ev-2022-4-green-right.ashx",
        image:"https://images.pexels.com/photos/5381501/pexels-photo-5381501.jpeg?auto=compress&cs=tinysrgb&w=600",

        price:4289,
        monthlypay:500,
        cashprice:6500,
        location:"lavington"
    }, 
     ]
      , 
      [
        {
          id:1,
          "name":'RANGE ROVER',
          model:'77kWh 4dr AWD Auto',
          year:2014,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/944d4f79-003f-4bb5-8401-58bac8e14e37.svg",
          image:"https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
          price:4289,
          monthlypay:1090.81,
          cashprice:75190,
          location:"old Trafford",
          frontimage:"https://pdg-uks-cdn.pinewooddms.com/bcfa55a0-0c05-438b-9943-97a67046d251/vehicles/d3776d05-7831-40fb-affb-237b2c7a6f25.jpg?"
      },
      {
          id:2,
          "name":'BMW Ix',
          image:"https://images.pexels.com/photos/225841/pexels-photo-225841.jpeg?auto=compress&cs=tinysrgb&w=600",

          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2014,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/0d100226-01f0-4c7f-9b53-88a4896a921e/16d3e304-5f8c-405a-b8d2-030dbd91f6ff.svg",
          price:4289,
          monthlypay:1090.81,
          cashprice:75190,
          location:"california"
      },
      {
          id:3,
          "name":'DS DS 3',
          image:"https://images.pexels.com/photos/11558251/pexels-photo-11558251.jpeg?auto=compress&cs=tinysrgb&w=600",

          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2021,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d89aac04-c300-49b3-9a58-1c7d5a2ddefc.svg",
          price:4289,
          monthlypay:22066,
          cashprice:19000,
          location:"kakamega"
      },
      {
          id:4,
          "name":'Peugeot ',
          image:"https://images.pexels.com/photos/12246947/pexels-photo-12246947.jpeg?auto=compress&cs=tinysrgb&w=600",

          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2008,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/8df19ca6-889a-4815-89f7-03a213ef7c1c.svg",
          price:4289,
          monthlypay:251.11,
          cashprice:251.11,
          location:"saudi"
      },
      {
          id:5,
          "name":'Renault Megane',
          image:"https://images.pexels.com/photos/12606544/pexels-photo-12606544.jpeg?auto=compress&cs=tinysrgb&w=600",

          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2014,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/0b4db9e1-f44b-42c9-b186-7e6c1c1fb387.svg",
          price:4289,
          monthlypay:250,
          cashprice:2250,
          location:"mountain view"
      },
      {
          id:6,
          "name":'Ford Mustang Mach-E',
          image:"https://images.pexels.com/photos/13256678/pexels-photo-13256678.jpeg?auto=compress&cs=tinysrgb&w=600",
          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2014,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/51f66a3a-9910-4727-a268-5671de7d28df.svg",
          price:4289,
          monthlypay:576.41,
          cashprice:40950,
          location:"South B"
      },
      {
          id:7,
          "name":'Nissan Ariya ',
          image:"https://images.pexels.com/photos/4062200/pexels-photo-4062200.jpeg?auto=compress&cs=tinysrgb&w=600",

          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2014,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/b2d7df5f-6414-4f94-a32b-5e0b9c72fbd4.svg",
          price:4289,
          monthlypay:109.81,
          cashprice:75190,
          location:"kisii"
      },
      {
          id:8,
          "name":'Ford Mustang Mach-E',
          image:"",

          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2014,
          carlogo:"",
          price:4289,
          monthlypay:597,
          cashprice:43500,
          location:"nakuru"
      },
      {
          id:9,
          "name":'Vauxhall Vivaro',
          image:"",

          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2014,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/68783904-adb6-44e2-8aae-8183fadcac62.svg",
          price:4289,
          monthlypay:90.81,
          cashprice:40355,
          location:"kilimani"
      },
      {
          id:10,
          "name":'Kia Niro 150kW ',
          image:"https://images.pexels.com/photos/5704347/pexels-photo-5704347.jpeg?auto=compress&cs=tinysrgb&w=600",

          model:"240kW xDrive40 M Sport 76.6kWh 5dr",
          year:2014,
          carlogo:"https://pinewoodpcoapexblobs01.blob.core.windows.net/apexmediacontent/fd612ef4-7f30-4457-9db5-4a61b64254dd/d1cec4ab-2fa8-40a9-bfa8-a2169bd48903.svg",
          price:4289,
          monthlypay:500,
          cashprice:6500,
          location:"lavington"
      },
      ],
    // Add more item lists as needed
  ];
  export default itemListArray

  