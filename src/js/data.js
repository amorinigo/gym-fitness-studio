const bannerImgUrl      = './assets/images/sub-banner';
const whatWeOfferImgUrl = './assets/images/what-we-offer';
const benefitsImgUrl    = './assets/images/benefits';
const classesImgUrl     = './assets/images/classes';
const galleryUrl        = './assets/images/gallery';

export const submenuInfo = [
    'About us',
    'What we offer',
    'Benefits',
    'Register now',
    'Classes',
    'Testimonials',
    'Team',
    'Gallery',
    'Pricing',
    'Contact us'
];

export const bannerInfo = [
    {
        title: 'Men class',
        description: 'We have a philosophy when it comes to fitness. There are no shortcuts on the road to success. We believe in teaching people the importance of longevity. There is no such thing as an overnight success.',
        img: `${ bannerImgUrl }/1.jpeg`
    },
    {  
        title: 'Women class',
        description: 'The Women’s Program is a female coached, all-female, strength and conditioning program that focuses on building strength, proper body mechanics, and heavy doses of conditioning work.',
        img: `${ bannerImgUrl }/2.jpeg`
    }
];

export const whatWeOfferInfo = [
    {
        title: 'PERSONAL TRAINING',
        description: "If you don't like to work out with other clients of our center, you are welcome to hire a personal coach.",
        img: `${ whatWeOfferImgUrl }/1.jpeg`
    },
    {
        title: 'BASIC CROSSFIT',
        description: 'Our staff includes amazing professionals that have an eye for crossfit.',
        img: `${ whatWeOfferImgUrl }/2.jpg`
    },
    {
        title: 'OLYMPIC POWERLIFTING',
        description: 'Do you want to become a professional powerlifter? Go ahead and try yourslelf just right now.',
        img: `${ whatWeOfferImgUrl }/3.jpeg`
    },
];

export const benefitsInfo = [
    {
        title: 'FUNCTIONAL TRAINING',
        description: 'Squeeze 100% benefit from the universal training: speed, strength, endurance',
        img: `${ benefitsImgUrl }/1.png`
    },
    {
        title: 'CARDIO TRAINING',
        description: 'Improve your health, endurance and cardiovascular system',
        img: `${ benefitsImgUrl }/2.png`
    },
    {
        title: 'PERSONAL TRAINER',
        description: 'Next to you will always be a personal trainer, who will teach, prompt and insure.',
        img: `${ benefitsImgUrl }/3.png`
    },
    {
        title: 'BECOME STRONGER',
        description: 'Strength training will make you a monster of the iron world with incredible power',
        img: `${ benefitsImgUrl }/4.png`
    },
    {
        title: 'AESTHETICS OF THE BODY',
        description: 'Our training will make your body not only hardy, but also beautiful.',
        img: `${ benefitsImgUrl }/5.png`
    },
    {
        title: 'SPORTS NUTRITION',
        description: 'You will learn about all the principles of healthy sports nutrition.',
        img: `${ benefitsImgUrl }/6.png`
    },
];

export const timeFormats = [ 
    'Days', 
    'Hours', 
    'Minutes', 
    'Seconds'
];

export const classesInfo = [
    {
        manImg:  `${ classesImgUrl }/man/1.jpg`,
        girlImg: `${ classesImgUrl }/girl/1.jpg`,
        title: 'PSYCHOLOGY OF TRAINING'
    },
    {
        manImg:  `${ classesImgUrl }/man/2.jpg`,
        girlImg: `${ classesImgUrl }/girl/2.jpg`,
        title: 'PRACTICAL SELF DEFENCE'
    },
    {
        manImg:  `${ classesImgUrl }/man/3.jpg`,
        girlImg: `${ classesImgUrl }/girl/3.jpg`,
        title: 'FITNESS FOR BOTH SEXES'
    },
    {
        manImg:  `${ classesImgUrl }/man/4.jpg`,
        girlImg: `${ classesImgUrl }/girl/4.jpg`,
        title: 'STRENGTH TRAINING'
    },
    {
        manImg:  `${ classesImgUrl }/man/5.jpg`,
        girlImg: `${ classesImgUrl }/girl/5.jpg`,
        title: 'BOXING FOR BOTH SEXES'
    },
    {
        manImg:  `${ classesImgUrl }/man/6.jpg`,
        girlImg: `${ classesImgUrl }/girl/6.jpg`,
        title: 'INTENSE CARDIO'
    },
];

export const testimonialsInfo = [
    {
        title: 'MIKE STRAMOND',
        description: "Edward helped me to bounce back and get to the top of my physical shape again! I'm so grateful for all the help he provided!"
    },
    {
        title: 'JOHN NELSON',
        description: "I was quite surprised with a range of services Edward offered me. His group training programs are perfect for beginners."
    }
];

export const teamInfo = [
    {
        name: 'JONH MIKE',
        description: '12 Years ago I lost 8olds with the help of a personal coach and it completely changed my way of comletely changed my mission to sway people',
    },
    {
        name: 'KENNETH RICHARDSON',
        description: 'I initially took on CrossFit trainings after a spending a lifetime in proffessional athletics. The fact that I loved sports so much contributed...',
    },
    {
        name: 'VIRGIL COOK',
        description: 'Virgil has been training amateur and professional combat athletes since 1995. His skill-set expands to the following combat styles: MMA fighting.',
    },
];

export const galleryInfo = [
    `${ galleryUrl }/1.jpg`,
    `${ galleryUrl }/2.jpg`,
    `${ galleryUrl }/3.jpg`,
    `${ galleryUrl }/4.jpg`,
    `${ galleryUrl }/5.jpg`,
    `${ galleryUrl }/6.jpg`
];

export const regexs = {
    name: /^[a-zA-ZÀ-ÿ]{2,100} ?[a-zA-ZÀ-ÿ]{0,100}$/,
    phone: /^[0-9]{8,15}$/,
    message: /^.{5,200}$/m,
    email: /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

export const networks = [
    'https://twitter.com/',
    'https://es-la.facebook.com/',
    'https://ar.pinterest.com/',
    'https://www.instagram.com/'
];