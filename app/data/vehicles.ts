export type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  doors: number;
  seats: number;
  engine: string;
  bodyType: string;
  colour: string;
  mot: string;
  warranty: string;
  taxPerYear: string;
  insuranceGroup: string;
  co2: string;
  serviceHistory: string;
  description: string;
  featured: boolean;
  images: string[];
  previousOwners?: number;
  numberOfKeys?: number;
};

export const vehicles: Vehicle[] = [
  {
    images: [
      "/images/012010-silver-vauxhall-zafira.jpg",
      "/images/022010-silver-vauxhall-zafira.jpg",
      "/images/032010-silver-vauxhall-zafira.jpg",
      "/images/042010-silver-vauxhall-zafira.jpg",
      "/images/052010-silver-vauxhall-zafira.jpg",
      "/images/062010-silver-vauxhall-zafira.jpg",
      "/images/072010-silver-vauxhall-zafira.jpg",
      "/images/082010-silver-vauxhall-zafira.jpg",
      "/images/092010-silver-vauxhall-zafira.jpg",
      "/images/102010-silver-vauxhall-zafira.jpg",
      "/images/112010-silver-vauxhall-zafira.jpg",
      "/images/122010-silver-vauxhall-zafira.jpg",
      "/images/132010-silver-vauxhall-zafira.jpg"
    ],
    id: "vauxhall-zafira-2010-silver",
    year: 2010,
    make: "Vauxhall",
    model: "Zafira 1.9 CDTi Exclusiv Auto",
    price: 3250,
    mileage: 67590,
    fuel: "Diesel",
    transmission: "Automatic",
    doors: 5,
    seats: 7,
    engine: "1.9L",
    bodyType: "MPV",
    colour: "Silver",
    mot: "Not specified",
    warranty: "3 months",
    taxPerYear: "£230",
    insuranceGroup: "15",
    co2: "175g/km",
    serviceHistory: "Full",
    previousOwners: undefined,
    numberOfKeys: 1,
    description: `Discover this practical 2010 Vauxhall Zafira CDTi Exclusiv, a versatile seven seater that offers ample space for the whole family. Powered by an efficient 1.9 litre diesel engine, this Exclusiv trim model is well equipped with air conditioning to ensure comfort on every journey.

This Zafira stands out with its low insurance group rating, suggesting it could be a more economical choice for many drivers. Its seven seat configuration makes it an excellent option for those needing flexible passenger capacity, combining everyday usability with the practicality of a diesel engine.

Great car ideal for a family, 7 seater automatic, 1 key, full service history from main dealer. Great car.

This car comes with 3 months warranty for free with the option to extend up to a year. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012010-white-citroen-c1.jpg",
      "/images/022010-white-citroen-c1.jpg",
      "/images/032010-white-citroen-c1.jpg",
      "/images/042010-white-citroen-c1.jpg",
      "/images/052010-white-citroen-c1.jpg",
      "/images/062010-white-citroen-c1.jpg",
      "/images/072010-white-citroen-c1.jpg",
      "/images/082010-white-citroen-c1.jpg",
      "/images/092010-white-citroen-c1.jpg",
      "/images/102010-white-citroen-c1.jpg",
      "/images/112010-white-citroen-c1.jpg",
      "/images/122010-white-citroen-c1.jpg"
    ],
    id: "citroen-c1-2010",
    year: 2010,
    make: "Citroen",
    model: "C1 1.0i Splash",
    price: 1695,
    mileage: 108123,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 3,
    seats: 4,
    engine: "1.0L",
    bodyType: "Hatchback",
    colour: "White",
    mot: "12 Months MOT Included",
    warranty: "3 Months Warranty Included",
    taxPerYear: "£20",
    insuranceGroup: "02E",
    co2: "106g/km",
    serviceHistory: "Partial Service History",
    previousOwners: undefined,
    numberOfKeys: undefined,
    description: `This 2010 Citroen C1 1.0i Splash is a fantastic low-cost option for anyone looking for reliable and economical motoring. Powered by a 1.0L petrol engine, it delivers excellent fuel efficiency of up to 63 MPG, making it ideal for city driving and daily commuting.

With low insurance group 02E and just £20 annual road tax, this C1 is extremely affordable to run. Its compact size makes parking easy, while still offering comfortable seating for four.

The vehicle comes with 12 months MOT and a 3-month warranty for added peace of mind. A great choice for first-time drivers, students, or anyone wanting a dependable and budget-friendly car.`,
    featured: false
  },
  {
    images: [
      "/images/012011-silver-ford-focus.jpg",
      "/images/022011-silver-ford-focus.jpg",
      "/images/032011-silver-ford-focus.jpg",
      "/images/042011-silver-ford-focus.jpg",
      "/images/052011-silver-ford-focus.jpg",
      "/images/062011-silver-ford-focus.jpg",
      "/images/072011-silver-ford-focus.jpg",
      "/images/082011-silver-ford-focus.jpg",
      "/images/092011-silver-ford-focus.jpg",
      "/images/102011-silver-ford-focus.jpg",
      "/images/112011-silver-ford-focus.jpg"
    ],
    id: "ford-focus-2011",
    year: 2011,
    make: "Ford",
    model: "Focus 1.6 Zetec",
    price: 2495,
    mileage: 93872,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 5,
    seats: 5,
    engine: "1.6L",
    bodyType: "Hatchback",
    colour: "Silver",
    mot: "12 months MOT included",
    warranty: "3 months",
    taxPerYear: "£195",
    insuranceGroup: "11E",
    co2: "136g/km",
    serviceHistory: "Full",
    previousOwners: undefined,
    numberOfKeys: 1,
    description: `This 2011 Ford Focus Zetec presents a superb blend of practicality and affordability, making it an excellent choice for many drivers. Powered by a reliable 1.6 litre petrol engine, this model offers a smooth driving experience. Inside, you'll find convenient features such as Bluetooth handsfree and voice control, allowing you to stay connected safely on the go. The manual air conditioning ensures a comfortable cabin temperature whatever the weather.

The Ford Focus Zetec stands out with its generous boot space, providing ample room for shopping, luggage, or sports equipment. Furthermore, its placement in a low insurance group means that running costs are kept to a minimum, offering significant savings compared to many other vehicles in its class. This combination of practical features and economical ownership makes this Focus a truly sensible and appealing option.

New MOT & service, new brake pads and discs, good condition for its age with a few age-related marks on the bodywork. Inside very tidy. Full service history plus new one we did. 1 key.

This car comes with 3 months warranty for free with the option to extend up to 1 year. AA breakdown cover for free 1 year. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012011-white-toyota-aygo.jpg",
      "/images/022011-white-toyota-aygo.jpg",
      "/images/032011-white-toyota-aygo.jpg",
      "/images/042011-white-toyota-aygo.jpg",
      "/images/052011-white-toyota-aygo.jpg",
      "/images/062011-white-toyota-aygo.jpg",
      "/images/072011-white-toyota-aygo.jpg",
      "/images/082011-white-toyota-aygo.jpg",
      "/images/092011-white-toyota-aygo.jpg",
      "/images/102011-white-toyota-aygo.jpg",
      "/images/112011-white-toyota-aygo.jpg",
      "/images/122011-white-toyota-aygo.jpg",
      "/images/132011-white-toyota-aygo.jpg",
      "/images/142011-white-toyota-aygo.jpg"
    ],
    id: "toyota-aygo-2011",
    year: 2011,
    make: "Toyota",
    model: "AYGO 1.0 VVT-i Go",
    price: 2495,
    mileage: 83502,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 5,
    seats: 4,
    engine: "1.0L",
    bodyType: "Hatchback",
    colour: "White",
    mot: "12 months MOT included",
    warranty: "3 months",
    taxPerYear: "£20",
    insuranceGroup: "03E",
    co2: "105g/km",
    serviceHistory: "None",
    previousOwners: undefined,
    numberOfKeys: 2,
    description: `Recall repair has been carried out by Toyota with proof.

Discover this 2011 Toyota AYGO VVT-i Go, a smart choice for economical motoring. This compact car boasts a responsive 1.0L petrol engine, making it ideal for navigating city streets and beyond. Its Go trim level offers a straightforward and user friendly experience, ensuring every journey is a pleasure.

The Toyota AYGO VVT-i Go stands out with its impressive fuel economy, achieving a remarkable 63 miles per gallon. This efficiency, combined with its low CO2 emissions, means you can enjoy your driving while being mindful of running costs and environmental impact. Furthermore, its placement in a low insurance group makes it an even more attractive proposition for budget conscious drivers, indicating it is a more affordable option to own and run compared to many other vehicles in its class.

We just MOT & serviced this car and put 4 brand new tyres. Good condition, drives perfect, 2 keys. No service history.

This car comes with 3 months warranty for free, with the option to extend it up to 1 year. AA breakdown cover for 1 year free. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012012-red-citroen-c1.jpg",
      "/images/022012-red-citroen-c1.jpg",
      "/images/032012-red-citroen-c1.jpg",
      "/images/042012-red-citroen-c1.jpg",
      "/images/052012-red-citroen-c1.jpg",
      "/images/062012-red-citroen-c1.jpg",
      "/images/072012-red-citroen-c1.jpg",
      "/images/082012-red-citroen-c1.jpg",
      "/images/092012-red-citroen-c1.jpg",
      "/images/102012-red-citroen-c1.jpg",
      "/images/112012-red-citroen-c1.jpg",
      "/images/122012-red-citroen-c1.jpg",
      "/images/132012-red-citroen-c1.jpg",
      "/images/142012-red-citroen-c1.jpg"
    ],
    id: "citroen-c1-2012-red",
    year: 2012,
    make: "Citroen",
    model: "C1 1.0i VTR",
    price: 2995,
    mileage: 59783,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 5,
    seats: 4,
    engine: "1.0L",
    bodyType: "Hatchback",
    colour: "Red",
    mot: "Not specified",
    warranty: "3 months",
    taxPerYear: "£20",
    insuranceGroup: "2E",
    co2: "106g/km",
    serviceHistory: "Not specified",
    previousOwners: undefined,
    numberOfKeys: 2,
    description: `This 2012 Citroen C1 i VTR boasts exceptionally low mileage for its age, having covered just 59,783 miles. This well maintained example, finished in the VTR trim, is powered by an efficient 1.0 litre petrol engine. Inside, you will find the comfort of air conditioning, making every journey more pleasant.

The Citroen C1 is a smart choice for many reasons. Its impressive fuel economy of 66 mpg means fewer trips to the petrol station, and its low CO2 emissions contribute to a lower environmental impact. Furthermore, its position in a low insurance group makes it an economical option to own and run, offering excellent value compared to similar vehicles.

Very tidy car inside and out, 2 keys, low mileage, 3 months warranty for free.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012013-purple-peugeot.jpg",
      "/images/022013-purple-peugeot.jpg",
      "/images/032013-purple-peugeot.jpg",
      "/images/042013-purple-peugeot.jpg",
      "/images/052013-purple-peugeot.jpg",
      "/images/062013-purple-peugeot.jpg",
      "/images/072013-purple-peugeot.jpg",
      "/images/082013-purple-peugeot.jpg",
      "/images/092013-purple-peugeot.jpg",
      "/images/102013-purple-peugeot.jpg",
      "/images/112013-purple-peugeot.jpg",
      "/images/122013-purple-peugeot.jpg",
      "/images/132013-purple-peugeot.jpg",
      "/images/142013-purple-peugeot.jpg"
    ],
    id: "peugeot-107-2013-purple",
    year: 2013,
    make: "Peugeot",
    model: "107 1.0 12V Allure",
    price: 3250,
    mileage: 61326,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 5,
    seats: 4,
    engine: "1.0L",
    bodyType: "Hatchback",
    colour: "Purple",
    mot: "12 months MOT included",
    warranty: "3 months",
    taxPerYear: "£20",
    insuranceGroup: "03E",
    co2: "99g/km",
    serviceHistory: "Full",
    previousOwners: 2,
    numberOfKeys: undefined,
    description: `This 2013 Peugeot 107 Allure is a fantastic example, having been owned by only two previous keepers. This compact and stylish hatchback is powered by an efficient 1.0 litre petrol engine, making it a practical choice for everyday driving. Inside, you'll find the convenience of Peugeot Connect USB with Bluetooth, allowing for handsfree calls and music streaming, complemented by manual air conditioning to keep you comfortable in all seasons.

The Peugeot 107 Allure stands out with its impressive fuel economy, achieving a remarkable 66 miles per gallon, which is excellent compared to other vehicles in its class. Furthermore, its low CO2 emissions and placement in a low insurance group make it an economical and affordable option to run and maintain. These factors combined highlight its efficiency and cost effectiveness.

This car comes with 3 months warranty for free with the option to extend up to 1 year. AA breakdown cover for 1 year. Finance available.`,
    featured: false
  },
  {
    images: [
      "/images/012013-white-nissan-juke.jpg",
      "/images/022013-white-nissan-juke.jpg",
      "/images/032013-white-nissan-juke.jpg",
      "/images/042013-white-nissan-juke.jpg",
      "/images/052013-white-nissan-juke.jpg",
      "/images/062013-white-nissan-juke.jpg",
      "/images/072013-white-nissan-juke.jpg",
      "/images/082013-white-nissan-juke.jpg",
      "/images/092013-white-nissan-juke.jpg",
      "/images/102013-white-nissan-juke.jpg",
      "/images/112013-white-nissan-juke.jpg",
      "/images/122013-white-nissan-juke.jpg",
      "/images/132013-white-nissan-juke.jpg",
      "/images/142013-white-nissan-juke.jpg",
      "/images/152013-white-nissan-juke.jpg",
      "/images/162013-white-nissan-juke.jpg"
    ],
    id: "nissan-juke-2013-white",
    year: 2013,
    make: "Nissan",
    model: "Juke 1.6 n-tec",
    price: 3995,
    mileage: 94962,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 5,
    seats: 5,
    engine: "1.6L",
    bodyType: "SUV",
    colour: "White",
    mot: "Not specified",
    warranty: "3 months",
    taxPerYear: "£195",
    insuranceGroup: "17E",
    co2: "153g/km",
    serviceHistory: "Full",
    previousOwners: 2,
    numberOfKeys: 2,
    description: `This 2013 Nissan Juke n-tec offers a fantastic ownership proposition, having been looked after by only two previous owners. Under the bonnet, you'll find a responsive 1.6 litre petrol engine, paired with the n-tec trim level which includes desirable features such as climate control air conditioning for your comfort, Bluetooth telephone integration for seamless connectivity, and a colour reversing camera to assist with parking.

This Juke n-tec stands out with its impressive fuel economy, achieving up to 47 miles per gallon, and benefits from low CO2 emissions, making it an economical choice. Furthermore, its placement in a low insurance group indicates that running costs are kept to a minimum, offering excellent value compared to many other vehicles in its class.

2 owners, full service history plus the brand new one we just did, great car good condition inside and out, 2 keys.

This car comes with 3 months warranty for free with the option to extend up to 1 year. AA breakdown cover for 1 year free. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012014-black-nissan-juke.jpg",
      "/images/022014-black-nissan-juke.jpg",
      "/images/032014-black-nissan-juke.jpg",
      "/images/042014-black-nissan-juke.jpg",
      "/images/052014-black-nissan-juke.jpg",
      "/images/062014-black-nissan-juke.jpg",
      "/images/072014-black-nissan-juke.jpg",
      "/images/082014-black-nissan-juke.jpg",
      "/images/092014-black-nissan-juke.jpg",
      "/images/102014-black-nissan-juke.jpg",
      "/images/112014-black-nissan-juke.jpg",
      "/images/122014-black-nissan-juke.jpg",
      "/images/132014-black-nissan-juke.jpg"
    ],
    id: "nissan-juke-2014-black",
    year: 2014,
    make: "Nissan",
    model: "Juke 1.6 Visia",
    price: 4250,
    mileage: 69620,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 5,
    seats: 5,
    engine: "1.6L",
    bodyType: "SUV",
    colour: "Black",
    mot: "Not specified",
    warranty: "3 months",
    taxPerYear: "£195",
    insuranceGroup: "15E",
    co2: "153g/km",
    serviceHistory: "Full",
    previousOwners: undefined,
    numberOfKeys: 2,
    description: `Discover this 2014 Nissan Juke Visia, a car with remarkably low mileage for its age, having covered just 69,620 miles. This particular model is equipped with a 1.6 litre petrol engine and features air conditioning to ensure your comfort on every journey. Its Visia trim level offers a straightforward and practical driving experience, making it a sensible choice for many.

This Nissan Juke stands out with its excellent fuel economy, achieving an impressive 47 miles per gallon, which is a significant advantage over many other vehicles. Furthermore, its low CO2 emissions contribute to a more environmentally friendly drive. The Juke also benefits from a low insurance group, indicating that running costs are kept to a minimum, making it an economical and appealing option for everyday use.

We just had this Juke come in, very tidy, good condition, drives perfect, 2 keys, full service history.

This car comes with 3 months warranty for free with the option to extend up to 1 year. AA breakdown cover for 1 year. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012014-blue-ford-focus.jpg",
      "/images/022014-blue-ford-focus.jpg",
      "/images/032014-blue-ford-focus.jpg",
      "/images/042014-blue-ford-focus.jpg",
      "/images/052014-blue-ford-focus.jpg",
      "/images/062014-blue-ford-focus.jpg",
      "/images/072014-blue-ford-focus.jpg",
      "/images/082014-blue-ford-focus.jpg",
      "/images/092014-blue-ford-focus.jpg",
      "/images/102014-blue-ford-focus.jpg",
      "/images/112014-blue-ford-focus.jpg",
      "/images/122014-blue-ford-focus.jpg",
      "/images/132014-blue-ford-focus.jpg",
      "/images/142014-blue-ford-focus.jpg",
      "/images/152014-blue-ford-focus.jpg",
      "/images/162014-blue-ford-focus.jpg"
    ],
    id: "ford-focus-2014-blue",
    year: 2014,
    make: "Ford",
    model: "Focus 1.6 Zetec",
    price: 3995,
    mileage: 93872,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 5,
    seats: 5,
    engine: "1.6L",
    bodyType: "Hatchback",
    colour: "Blue",
    mot: "12 months MOT included",
    warranty: "3 months",
    taxPerYear: "£195",
    insuranceGroup: "11E",
    co2: "136g/km",
    serviceHistory: "Full",
    previousOwners: undefined,
    numberOfKeys: 1,
    description: `This 2014 Ford Focus Zetec is a practical and reliable hatchback finished in a striking blue. Powered by a 1.6 litre petrol engine, it delivers a smooth and composed drive suited to both town and motorway use. Inside, you'll find Bluetooth handsfree and voice control for safe connectivity on the go, alongside manual air conditioning to keep the cabin comfortable in all seasons.

The Focus Zetec is well regarded for its generous boot space, making it a practical choice for families and commuters alike. With CO2 emissions of 136g/km and an insurance group rating of 11E, it offers an economical and affordable ownership proposition.

New MOT & service, new brake pads and discs, good condition for its age. Interior very tidy. Full service history plus new one we did. 1 key.

This car comes with 3 months warranty for free with the option to extend up to 1 year. AA breakdown cover for free 1 year. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012014-silver-volkswagen-up.jpg",
      "/images/022014-silver-volkswagen-up.jpg",
      "/images/032014-silver-volkswagen-up.jpg",
      "/images/042014-silver-volkswagen-up.jpg",
      "/images/052014-silver-volkswagen-up.jpg",
      "/images/062014-silver-volkswagen-up.jpg",
      "/images/072014-silver-volkswagen-up.jpg",
      "/images/082014-silver-volkswagen-up.jpg",
      "/images/092014-silver-volkswagen-up.jpg",
      "/images/102014-silver-volkswagen-up.jpg",
      "/images/112014-silver-volkswagen-up.jpg",
      "/images/122014-silver-volkswagen-up.jpg",
      "/images/132014-silver-volkswagen-up.jpg",
      "/images/142014-silver-volkswagen-up.jpg",
      "/images/152014-silver-volkswagen-up.jpg",
      "/images/162014-silver-volkswagen-up.jpg"
    ],
    id: "volkswagen-up-2014",
    year: 2014,
    make: "Volkswagen",
    model: "up! 1.0 High up! ASG Euro 5 5dr",
    price: 7495,
    mileage: 42519,
    fuel: "Petrol",
    transmission: "Automatic",
    doors: 5,
    seats: 4,
    engine: "1.0L",
    bodyType: "Hatchback",
    colour: "Silver",
    mot: "New MOT included",
    warranty: "3 months",
    taxPerYear: "£20",
    insuranceGroup: "5",
    co2: "105g/km",
    serviceHistory: "Full service history",
    previousOwners: 2,
    numberOfKeys: undefined,
    description: `This 2014 Volkswagen up! High up! presents an exceptional opportunity with its remarkably low mileage of just 42,519 miles, a testament to its careful ownership by only two previous keepers. This stylish city car is powered by an efficient 1.0 litre petrol engine, making it a practical choice for everyday driving. Inside, you'll find a comfortable and well equipped cabin featuring heated front seats for those colder mornings, and air conditioning to keep you cool during warmer weather. The High up! trim also benefits from a Sound Pack for an enhanced audio experience, and Bluetooth telephone preparation, allowing for safe and convenient hands free calls on the go.

The Volkswagen up! High up! stands out with its impressive fuel economy, achieving an excellent 63 miles per gallon. With CO2 emissions of just 105g/km, it qualifies for only £20 annual road tax, and its insurance group 5 rating ensures running costs are kept to an absolute minimum. These combined factors make this particular Volkswagen up! a sensible and exceptionally cost effective choice for any driver.

Great car, drives excellent, 2 previous owners, full history plus brand new service & discs & pads.

3 months warranty for free with the option to extend up to 36 months. AA breakdown cover for 1 year free. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012014-white-renault-captur.jpg",
      "/images/022014-white-renault-captur.jpg",
      "/images/032014-white-renault-captur.jpg",
      "/images/042014-white-renault-captur.jpg",
      "/images/052014-white-renault-captur.jpg",
      "/images/062014-white-renault-captur.jpg",
      "/images/072014-white-renault-captur.jpg",
      "/images/082014-white-renault-captur.jpg",
      "/images/092014-white-renault-captur.jpg",
      "/images/102014-white-renault-captur.jpg",
      "/images/112014-white-renault-captur.jpg",
      "/images/122014-white-renault-captur.jpg",
      "/images/132014-white-renault-captur.jpg",
      "/images/142014-white-renault-captur.jpg",
      "/images/152014-white-renault-captur.jpg",
      "/images/162014-white-renault-captur.jpg",
      "/images/172014-white-renault-captur.jpg",
      "/images/182014-white-renault-captur.jpg",
      "/images/192014-white-renault-captur.jpg",
      "/images/202014-white-renault-captur.jpg",
      "/images/212014-white-renault-captur.jpg",
      "/images/222014-white-renault-captur.jpg",
      "/images/232014-white-renault-captur.jpg",
      "/images/242014-white-renault-captur.jpg"
    ],
    id: "renault-captur-2014",
    year: 2014,
    make: "Renault",
    model: "Captur 1.2 TCe Dynamique S MediaNav EDC",
    price: 6495,
    mileage: 77531,
    fuel: "Petrol",
    transmission: "Automatic",
    doors: 5,
    seats: 5,
    engine: "1.2L",
    bodyType: "SUV",
    colour: "White",
    mot: "New MOT included",
    warranty: "3 months",
    taxPerYear: "£145",
    insuranceGroup: "15",
    co2: "125g/km",
    serviceHistory: "Full service history",
    previousOwners: 2,
    numberOfKeys: 2,
    description: `This 2014 Renault Captur TCe Dynamique S MediaNav is a superb example, having had only two owners from new. This stylish compact SUV is powered by an efficient 1.2 litre petrol engine and boasts the desirable Dynamique S MediaNav trim. Inside, you'll find the sophisticated Manhattan Interior Style Pack, complemented by climate control featuring an air quality regulator and a one touch demist function. Convenience is key with handsfree keycard access and push button start stop, alongside Bluetooth connectivity for seamless phone integration. Automatic headlights ensure you always have optimal visibility.

With an impressive fuel economy of 52 miles per gallon and CO2 emissions of 125g/km, this Captur offers excellent running costs with annual road tax at £145. Its insurance group 15 rating further highlights its affordability and appeal compared to similar vehicles. This combination of practical features, economical performance, and desirable specifications makes this Renault Captur a compelling choice for those seeking a versatile and well equipped compact car.

2 previous owners, 2 keys, full service history.

This car comes with 3 months warranty for free with the option to extend up to 1 year which can be renewed. AA breakdown cover for 1 year free. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012015-white-peugeot-108.jpg",
      "/images/022015-white-peugeot-108.jpg",
      "/images/032015-white-peugeot-108.jpg",
      "/images/042015-white-peugeot-108.jpg",
      "/images/052015-white-peugeot-108.jpg",
      "/images/062015-white-peugeot-108.jpg",
      "/images/072015-white-peugeot-108.jpg",
      "/images/082015-white-peugeot-108.jpg",
      "/images/092015-white-peugeot-108.jpg",
      "/images/102015-white-peugeot-108.jpg",
      "/images/112015-white-peugeot-108.jpg",
      "/images/122015-white-peugeot-108.jpg",
      "/images/132015-white-peugeot-108.jpg",
      "/images/142015-white-peugeot-108.jpg",
      "/images/152015-white-peugeot-108.jpg"
    ],
    id: "peugeot-108-2015",
    year: 2015,
    make: "Peugeot",
    model: "108 1.0 Active Top! 2 Tronic",
    price: 6495,
    mileage: 66141,
    fuel: "Petrol",
    transmission: "Automatic",
    doors: 5,
    seats: 4,
    engine: "1.0L",
    bodyType: "Hatchback",
    colour: "White",
    mot: "New MOT included",
    warranty: "3 months",
    taxPerYear: "£20",
    insuranceGroup: "4",
    co2: "97g/km",
    serviceHistory: "Full service history",
    previousOwners: undefined,
    numberOfKeys: 2,
    description: `Discover this 2015 Peugeot 108 Active, a stylish and economical city car that's perfect for navigating urban streets. This particular model boasts a desirable retractable black fabric roof, allowing you to enjoy open air driving on sunny days. Inside, you'll find a well equipped cabin featuring manual air conditioning to keep you comfortable in all weather, and a Bluetooth telephone facility for seamless connectivity on the go.

This Peugeot 108 is designed with efficiency in mind, achieving an impressive 67 miles per gallon, making it a cost effective choice for your daily commute. With CO2 emissions of just 97g/km, it qualifies for only £20 annual road tax, and its insurance group 4 rating means running costs are kept to a minimum, making it an excellent value proposition compared to other vehicles in its class.

This car has 2 keys, service history, plus a new MOT & service. 3 months warranty for free with the option to extend up to 1 year. AA breakdown cover for 1 year free. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012016-grey-suzuki-swift.jpg",
      "/images/022016-grey-suzuki-swift.jpg",
      "/images/032016-grey-suzuki-swift.jpg",
      "/images/042016-grey-suzuki-swift.jpg",
      "/images/052016-grey-suzuki-swift.jpg",
      "/images/062016-grey-suzuki-swift.jpg",
      "/images/072016-grey-suzuki-swift.jpg",
      "/images/082016-grey-suzuki-swift.jpg",
      "/images/092016-grey-suzuki-swift.jpg",
      "/images/102016-grey-suzuki-swift.jpg",
      "/images/112016-grey-suzuki-swift.jpg",
      "/images/122016-grey-suzuki-swift.jpg",
      "/images/132016-grey-suzuki-swift.jpg",
      "/images/142016-grey-suzuki-swift.jpg"
    ],
    id: "suzuki-swift-2016-grey",
    year: 2016,
    make: "Suzuki",
    model: "Swift 1.2 SZ-L",
    price: 5750,
    mileage: 64415,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 3,
    seats: 4,
    engine: "1.2L",
    bodyType: "Hatchback",
    colour: "Grey",
    mot: "12 months MOT included",
    warranty: "3 months",
    taxPerYear: "£30",
    insuranceGroup: "9E",
    co2: "113g/km",
    serviceHistory: "Not specified",
    previousOwners: undefined,
    numberOfKeys: 2,
    description: `This 2016 Suzuki Swift SZ-L offers a smart choice for those seeking an economical and well equipped compact car. Powered by a responsive 1.2 litre petrol engine, this Euro 6 compliant model is designed for efficient driving. Inside, you'll find integrated Bluetooth connectivity within the audio unit, allowing for seamless handsfree calls and music streaming, complemented by air conditioning to ensure a comfortable cabin environment in all conditions.

The SZ-L trim level of this Swift is particularly appealing due to its low insurance group rating, which can help to keep your running costs down. This, combined with its practical features and Suzuki's reputation for reliability, makes this Swift a sensible and enjoyable option for everyday use, offering a great balance of features and affordability compared to other vehicles in its class.

2 keys, this car is in great condition with a brand new MOT & service. 3 months warranty for free with the option to extend up to 1 year. AA breakdown cover for 1 year free. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012016-white-toyota-aygo.jpg",
      "/images/022016-white-toyota-aygo.jpg",
      "/images/032016-white-toyota-aygo.jpg",
      "/images/042016-white-toyota-aygo.jpg",
      "/images/052016-white-toyota-aygo.jpg",
      "/images/062016-white-toyota-aygo.jpg",
      "/images/072016-white-toyota-aygo.jpg",
      "/images/082016-white-toyota-aygo.jpg",
      "/images/092016-white-toyota-aygo.jpg",
      "/images/102016-white-toyota-aygo.jpg",
      "/images/112016-white-toyota-aygo.jpg",
      "/images/122016-white-toyota-aygo.jpg"
    ],
    id: "toyota-aygo-2016-white",
    year: 2016,
    make: "Toyota",
    model: "AYGO 1.0 VVT-i x-play",
    price: 3995,
    mileage: 115823,
    fuel: "Petrol",
    transmission: "Manual",
    doors: 5,
    seats: 4,
    engine: "1.0L",
    bodyType: "Hatchback",
    colour: "White",
    mot: "Not specified",
    warranty: "12 months",
    taxPerYear: "£0",
    insuranceGroup: "2E",
    co2: "99g/km",
    serviceHistory: "None",
    previousOwners: 2,
    numberOfKeys: 1,
    description: `This 2016 Toyota AYGO VVT-i x-play has been cherished by only two owners, offering a well maintained example of this popular city car. Powered by an efficient 1.0 litre petrol engine, this Euro 6 compliant model is designed for economical driving. Inside, you will find the comfort of air conditioning and the convenience of Bluetooth connectivity, allowing for seamless integration of your devices for calls and music.

The AYGO x-play stands out with its impressive fuel economy, achieving a remarkable 69 miles per gallon, which indicates it is more economical than many other vehicles in its class. Furthermore, its low insurance group rating suggests that running costs will be kept to a minimum. The low CO2 emissions also highlight its environmental consideration, making it a sensible choice for drivers looking for an affordable and responsible way to get around.

This lovely car just came in, we just MOT and service it, great condition, 1 key, no service history (reason why we're putting 1 year warranty on it). 1 year warranty, AA breakdown cover for 1 year free. Finance available.

Welcome to test drive.`,
    featured: false
  },
  {
    images: [
      "/images/012017-orange-bmw-3-series.jpg",
      "/images/022017-orange-bmw-3-series-032017-orange-bmw-3-series.jpg",
      "/images/032017-orange-bmw-3-series.jpg",
      "/images/042017-orange-bmw-3-series.jpg",
      "/images/052017-orange-bmw-3-series.jpg",
      "/images/062017-orange-bmw-3-series-072017-orange-bmw-3-series.jpg",
      "/images/072017-orange-bmw-3-series.jpg",
      "/images/082017-orange-bmw-3-series.jpg",
      "/images/092017-orange-bmw-3-series.jpg",
      "/images/102017-orange-bmw-3-series.jpg",
      "/images/112017-orange-bmw-3-series.jpg",
      "/images/122017-orange-bmw-3-series.jpg",
      "/images/132017-orange-bmw-3-series.jpg",
      "/images/142017-orange-bmw-3-series.jpg",
      "/images/152017-orange-bmw-3-series.jpg",
      "/images/162017-orange-bmw-3-series.jpg",
      "/images/172017-orange-bmw-3-series.jpg",
      "/images/182017-orange-bmw-3-series.jpg",
      "/images/192017-orange-bmw-3-series.jpg",
      "/images/202017-orange-bmw-3-series.jpg",
      "/images/212017-orange-bmw-3-series.jpg",
      "/images/222017-orange-bmw-3-series.jpg"
    ],
    id: "bmw-3-series-2017",
    year: 2017,
    make: "BMW",
    model: "3 Series 2.0 316d SE Euro 6 (s/s) 4dr",
    price: 6995,
    mileage: 104904,
    fuel: "Diesel",
    transmission: "Manual",
    doors: 4,
    seats: 5,
    engine: "2.0L",
    bodyType: "Saloon",
    colour: "Orange",
    mot: "New MOT included",
    warranty: "3 months",
    taxPerYear: "£30",
    insuranceGroup: "28",
    co2: "109g/km",
    serviceHistory: "Full service history (ECU held history)",
    previousOwners: 2,
    numberOfKeys: 2,
    description: `This 2017 BMW 3 Series 316d SE is a superb example, having been owned by only two previous keepers. It features a refined 2.0L diesel engine, meeting Euro 6 emissions standards, and comes in the well appointed SE trim. You'll appreciate the convenience of Bluetooth Hands Free with USB Audio Interface, Enhanced Bluetooth Telephone Preparation with Voice Control, and the practical PDC Park Distance Control for easy rear parking. Automatic air conditioning with two zone control ensures a comfortable cabin, while the rain sensor automatically activates the headlights, adding to the ease of driving.

This BMW 3 Series offers excellent running costs, highlighted by an impressive fuel economy of 69 mpg and CO2 emissions of just 109g/km, qualifying it for only £30 annual road tax. These factors collectively indicate that this particular 316d SE offers a more cost effective and efficient ownership experience compared to many other vehicles in its class.

This car is in really good condition inside and out, very tidy, well looked after, 2 previous owners, 2 keys, full service history (ECU held history).

This car comes with 3 months warranty for free with the option to extend up to 1 year. AA breakdown cover for 1 year free. Finance available.

Welcome to test drive.`,
    featured: false
  },
];
