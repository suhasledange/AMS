 export const AmmoType = [
    {   id:1, 
        title: "Pistol Ammunition",
        ammoName:[
           {id:1,title:"9mm Parabellum (9x19mm)"},
           {id:2,title:".45 ACP (Automatic Colt Pistol)"},
           {id:3,title:".40 S&W (Smith & Wesson)"},
           {id:4,title:".38 Special"},
           {id:5,title:".357 Magnum"},
        ]
    },
    {id:2, 
        title: "Rifle Ammunition",
        ammoName:[
            {id:1,title:"5.56x45mm NATO"},
            {id:2,title:"7.62x51mm NATO"},
            {id:3,title:".308 Winchester"},
            {id:4,title:".223 Remington"},
            {id:5,title:"6.5mm Creedmoor"},
         ]
    },
    {id:3, 
        title: "Shotgun Shells",
        ammoName:[
            {id:1,title:"12-gauge"},
            {id:2,title:"20-gauge"},
            {id:3,title:".410 bore"},
         ]
    },
    {id:4,
         title: "Specialty Ammunition",
         ammoName:[
            {id:1,title:"Armor-Piercing (AP)"},
            {id:2,title:"Hollow Point (HP)"},
            {id:3,title:"Full Metal Jacket (FMJ)"},
            {id:4,title:"Tracer Rounds"},

         ]
        },
    {id:5, 
        title: "Others",
        ammoName:[
            {id:1,title:".50 BMG (Browning Machine Gun)"},
            {id:2,title:".22 LR (Long Rifle)"},
            {id:3,title:"10mm Auto"},
            {id:4,title:".300 Blackout"},
            {id:5,title:"7.62x39mm (commonly used in AK-47 rifles)"},
         ]
    },

  ];


export const AmmoLocations = [
    {
        id: 1,
        city: "Nashik",
        ammoData: [
            { id: 1, title: ".50 BMG (Browning Machine Gun)" },
            { id: 2, title: ".22 LR (Long Rifle)" },
            { id: 3, title: "10mm Auto" },
            { id: 4, title: ".300 Blackout" },
            { id: 5, title: "7.62x39mm (commonly used in AK-47 rifles)" },
            { id: 6, title: "9mm Parabellum" },
            { id: 7, title: ".45 ACP (Automatic Colt Pistol)" },
        ]
    },
    {
        id: 2,
        city: "Mumbai",
        ammoData: [
            { id: 8, title: "5.56x45mm NATO" },
            { id: 9, title: "7.62x51mm NATO" },
            { id: 10, title: ".308 Winchester" },
            { id: 11, title: ".223 Remington" },
            { id: 12, title: "6.5mm Creedmoor" },
            { id: 13, title: "12 Gauge" },
            { id: 14, title: ".338 Lapua Magnum" },
        ]
    },
    {
        id: 3,
        city: "Delhi",
        ammoData: [
            { id: 15, title: "7.62x25mm Tokarev" },
            { id: 16, title: ".380 ACP" },
            { id: 17, title: ".357 Magnum" },
            { id: 18, title: ".40 S&W" },
            { id: 19, title: "6mm Creedmoor" },
            { id: 20, title: "20 Gauge" },
            { id: 21, title: ".50 Action Express" },
        ]
    },
    {
        id: 4,
        city: "Bangalore",
        ammoData: [
            { id: 22, title: "7.62x54mmR" },
            { id: 23, title: "8mm Mauser" },
            { id: 24, title: ".270 Winchester" },
            { id: 25, title: ".25 ACP" },
            { id: 26, title: "20mm Vulcan" },
            { id: 27, title: ".338 Win Mag" },
            { id: 28, title: ".416 Rigby" },
        ]
    },
    {
        id: 5,
        city: "Chennai",
        ammoData: [
            { id: 29, title: ".243 Winchester" },
            { id: 30, title: "7.62x38mmR" },
            { id: 31, title: ".17 HMR" },
            { id: 32, title: ".44 Magnum" },
            { id: 33, title: ".300 Win Mag" },
            { id: 34, title: "5.7x28mm" },
            { id: 35, title: "10 Gauge" },
        ]
    },
    {
        id: 6,
        city: "Hyderabad",
        ammoData: [
            { id: 36, title: ".270 WSM (Winchester Short Magnum)" },
            { id: 37, title: ".45-70 Government" },
            { id: 38, title: ".22-250 Remington" },
            { id: 39, title: "7mm-08 Remington" },
            { id: 40, title: ".32 ACP" },
            { id: 41, title: ".416 Barrett" },
            { id: 42, title: "16 Gauge" },
        ]
    },
    {
        id: 7,
        city: "Kolkata",
        ammoData: [
            { id: 43, title: ".204 Ruger" },
            { id: 44, title: ".38 Special" },
            { id: 45, title: ".300 Weatherby Magnum" },
            { id: 46, title: "9x18mm Makarov" },
            { id: 47, title: ".460 S&W Magnum" },
            { id: 48, title: "6.5mm Grendel" },
            { id: 49, title: "28 Gauge" },
        ]
    },
    // Add more locations as needed
];
