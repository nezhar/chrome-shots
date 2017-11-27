let phones = [
  {
    deviceName: "iPhone 4",
    width: 320,
    height: 480,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPhone 5",
    width: 320,
    height: 568,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPhone 6",
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPhone 6 Plus",
    width: 414,
    height: 736,
    deviceScaleFactor: 3,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPhone 7",
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPhone 7 Plus",
    width: 414,
    height: 736,
    deviceScaleFactor: 3,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPhone 8",
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPhone 8 Plus",
    width: 414,
    height: 736,
    deviceScaleFactor: 3,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPhone X",
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "BlackBerry Z30",
    width: 360,
    height: 640,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nexus 4",
    width: 384,
    height: 640,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nexus 5",
    width: 360,
    height: 640,
    deviceScaleFactor: 3,
    userAgent:
      "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nexus 5X",
    width: 412,
    height: 732,
    deviceScaleFactor: 2.625,
    userAgent:
      "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nexus 6",
    width: 412,
    height: 732,
    deviceScaleFactor: 3.5,
    userAgent:
      "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nexus 6P",
    width: 412,
    height: 732,
    deviceScaleFactor: 3.5,
    userAgent:
      "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
    touch: true,
    mobile: true
  },
  {
    deviceName: "LG Optimus L70",
    width: 384,
    height: 640,
    deviceScaleFactor: 1.25,
    userAgent:
      "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/%s Mobile Safari/537.36",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nokia N9",
    width: 480,
    height: 854,
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nokia Lumia 520",
    width: 320,
    height: 533,
    deviceScaleFactor: 1.5,
    userAgent:
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Microsoft Lumia 550",
    width: 640,
    height: 360,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Microsoft Lumia 950",
    width: 360,
    height: 640,
    deviceScaleFactor: 4,
    userAgent:
      "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Galaxy S III",
    width: 360,
    height: 640,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Galaxy S5",
    width: 360,
    height: 640,
    deviceScaleFactor: 3,
    userAgent:
      "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
    touch: true,
    mobile: true
  }
];

let tablets = [
  {
    deviceName: "Kindle Fire HDX",
    width: 800,
    height: 1280,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPad Mini",
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPad",
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "iPad Pro",
    width: 1024,
    height: 1366,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Blackberry PlayBook",
    width: 600,
    height: 1024,
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nexus 10",
    width: 800,
    height: 1280,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36",
    touch: true,
    mobile: true
  },
  {
    deviceName: "Nexus 7",
    width: 600,
    height: 960,
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36",
    touch: true,
    mobile: true
  }
];

let notebooks = [
  {
    deviceName: "Laptop with touch",
    width: 1280,
    height: 950,
    deviceScaleFactor: 1,
    userAgent: "",
    touch: false,
    mobile: false
  },
  {
    deviceName: "Laptop with HiDPI screen",
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    userAgent: "",
    touch: false,
    mobile: false
  },
  {
    deviceName: "Laptop with MDPI screen",
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
    userAgent: "",
    touch: false,
    mobile: false
  }
];

module.exports = [].concat(phones, tablets, notebooks);
