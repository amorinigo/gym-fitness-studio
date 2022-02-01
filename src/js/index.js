import { 
    submenuInfo,
    bannerInfo,
    whatWeOfferInfo,
    benefitsInfo,
    timeFormats,
    classesInfo,
    testimonialsInfo,
    teamInfo,
    galleryInfo,
    regexs,
    networks
} from './data.js';

import { 
    activeMenu, 
    disableMenu, 
    activateFloatingForm 
} from './helpers.js';


// MENU
const createSubmenu = () => {

    const subMenu = document.querySelector( '.menu .last-menu-item label > .sub-menu' );

    const getHref = name => name.toLowerCase().trim().replaceAll( ' ', '-' );

    submenuInfo.forEach( name => {
        subMenu.innerHTML += `
            <li class="sub-menu__item">
                <a class="sub-menu__link" href="#${ getHref(name) }">${ name }</a>
            </li>
        `;
    } );

}

try { createSubmenu(); } catch ( error ) { console.log( error ); }

const handleMenuEvents = () => {

    const menuButton = document.querySelector('.menu-button');
    const menuLinks  = Array.from( document.querySelectorAll('ul.menu li a') );
    
    menuButton.addEventListener( 'click', () => activeMenu() );

    menuLinks.forEach( menuLink => {
        menuLink.addEventListener( 'click', () => disableMenu() );
    } );
    
}

try { handleMenuEvents(); } catch ( error ) { console.log( error ); }


// SHADOW
const handleClicksInShadow = () => {
    
    const shadow = document.querySelector( 'body > #shadow' );

    shadow.addEventListener( 'click', () => {
        disableMenu();
        activateFloatingForm( false );
    } );

}

try { handleClicksInShadow(); } catch ( error ) { console.log( error ); }


// MAIN BANNERS
const createMainBanners = () => {

    const bannerSection2 = document.querySelector( '.banner-section-2' );

    bannerInfo.forEach( ({ title, description, img }) => {

        bannerSection2.innerHTML += `
            <div class="part-1">
                <img class="sub-banner-img" src="${ img }" alt="${ title }">

                <div class="sub-banner-content">
                    <h3 class="sub-banner-title">${ title }</h3>
                    <p class="sub-banner-p">${ description }</p>
                    <a class="sub-banner-button" href="#classes">View more</a>
                </div>
            </div>
        `;
        
    } );
    
}

try { createMainBanners(); } catch ( error ) { console.log( error ); }


// WHAT WE OFFER
const createWhatWeOfferCards = () => {

    const whatWeOffer = document.querySelector( '#what-we-offer' );

    whatWeOfferInfo.forEach( ({ title, description, img }) => {

        whatWeOffer.innerHTML += `
            <div class="section">
                <img class="section__img" src="${ img }" alt="${ title }">

                <div class="section__content">
                    <h3 class="section__title">${ title }</h3>
                    <p class="section__p">${ description }</p>
                    <button class="section__button offer-button">Book now</button>
                </div>
            </div>
        `;

    } );
    
}

try { createWhatWeOfferCards(); } catch ( error ) { console.log( error ); }


// BENEFITS
const createBenefitCards = () => {

    const benefits = document.querySelector( '#benefits' );

    benefitsInfo.forEach( ({ title, description, img }) => {

        benefits.innerHTML += `
            <div class="benefits__section">
                <img class="benefits__img" src="${ img }" alt="${ title }">
                <h4 class="benefits__title">${ title }</h4>
                <p class="benefits__p">${ description }</p>
            </div>
        `;

    } );
    
}

try { createBenefitCards(); } catch ( error ) { console.log( error ); }


// REGISTER NOW
const createCountdown = () => {

    const clock = document.querySelector( '.register-now__clock' );

    timeFormats.forEach( format => {

        clock.innerHTML += `
            <div class="clock-section">
                <span class="clock-time">
                    <span class="clock-number">0</span>
                    <span class="clock-text">${ format }</span>
                </span>
            </div>
        `;
        
    } );

    //COUNTDOWN
    const numbers = document.getElementsByClassName( 'clock-number' );
    const deadline = new Date().getTime() + 1000000000;

    const runCountdown = () => {

        const interval  = setInterval( () => {

            const gap     = deadline - new Date().getTime();
            const hours   = Math.floor( (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ); 
            const minutes = Math.floor( (gap % (1000 * 60 * 60)) / (1000 * 60) ); 
            const seconds = Math.floor( (gap % (1000 * 60)) / (1000) ); 

            numbers[1].textContent = ( hours   < 10 ) ? `0${hours}`   : hours;
            numbers[2].textContent = ( minutes < 10 ) ? `0${minutes}` : minutes;
            numbers[3].textContent = ( seconds < 10 ) ? `0${seconds}` : seconds;

            if( gap <= 1 ) clearInterval( interval );

        }, 1000 );

    }

    runCountdown();

}

try { createCountdown(); } catch ( error ) { console.log( error ); }


// CLASSES
const createClassesGrid = () => {

    const classesGrid = document.querySelector( '#classes .grid-ctn .grid' );

    classesInfo.forEach( ({ manImg, girlImg, title }) => {

        classesGrid.innerHTML += `
            <div class="classes-img-ctn">
                <img class="man-img"  src="${ manImg }" alt="${ title }">
                <img class="girl-img" src="${ girlImg }" alt="${ title }">
            
                <div class="classes-img-text">
                    <p class="classes-img-p">${ title }</p>
                </div>
            </div>
        `;

    } );

}

try { createClassesGrid(); } catch ( error ) { console.log( error ); }


// TESTIMONIALS
const createTestimonialCards = () => {

    const testimonialsCtn = document.querySelector( '#testimonials .testimonials__ctn' );

    testimonialsInfo.forEach( ({ title, description }) => {

        testimonialsCtn.innerHTML += `
            <div class="testimonials__section">

                <div class="testimonials__top">
                    <div class="top-left">
                        <h3 class="top-title">${ title }</h3>
                        <h4 class="top-subtitle">HAPPY CLIENT</h4>
                    </div>

                    <div class="top-right">
                        <a class="testimonial__link" target="_blank" href="https://twitter.com/"></a>
                        <a class="testimonial__link" target="_blank" href="https://es-la.facebook.com/"></a>
                        <a class="testimonial__link" target="_blank" href="https://ar.pinterest.com/"></a>
                        <a class="testimonial__link" target="_blank" href="https://www.instagram.com/"></a>
                    </div>
                </div>
            
                <div class="testimonials__middle">
                    <p class="testimonials__p">${ description }</p>
                </div>
                
            </div>
        `;

    } );

}

try { createTestimonialCards(); } catch ( error ) { console.log( error ); }


// TEAM
const createTeamPeople = () => {

    const teamCtn = document.querySelector( '#team .teams-ctn' );

    teamInfo.forEach( ({ name, description }) => {

        teamCtn.innerHTML += `
            <div class="person">
                <div class="person-img-ctn">
                    <h6 class="person-name">${ name }</h6>
                </div>

                <p class="person-description">${ description }</p>

                <div class="person-networks-ctn">
                    <a class="network__link" target="_blank" href="https://twitter.com/"></a>
                    <a class="network__link" target="_blank" href="https://es-la.facebook.com/"></a>
                    <a class="network__link" target="_blank" href="https://ar.pinterest.com/"></a>
                    <a class="network__link" target="_blank" href="https://www.instagram.com/"></a>
                </div>
            </div>
        `;

    } );

}

try { createTeamPeople(); } catch ( error ) { console.log( error ); }


// GALLERY
const createGallery = () => {

    const gallery = document.querySelector( '#gallery' );

    galleryInfo.forEach( imgUrl => {

        gallery.innerHTML += `
            <div class="gallery-img-ctn">
                <img class="gallery-img" src="${ imgUrl }" alt="gallery-image">
            </div>
        `;

    } );

}

try { createGallery(); } catch ( error ) { console.log( error ); }


// FLOATING FORM VIEW
const handleFloatingFormView = () => {
    
    // BUTTONS FOR SHOW THE FORM
    const buttons = document.querySelectorAll('.offer-button, .pricing-button, #pricingBoxBtn, #bannerButton');

    Array.from( buttons ).forEach( button => {
        button.addEventListener( 'click', () => activateFloatingForm( true ) );
    } );

    // BUTTON FOR CLOSE THE FORM
    const closeFormIcon = document.querySelector( '#floating-form #close-icon' );
    closeFormIcon.addEventListener( 'click', () => activateFloatingForm( false ) );

}

try { handleFloatingFormView(); } catch ( error ) { console.log( error ); }


// LOGIC OF BOTH FORMS
const handleSubmitOfForms = () => {

    const forms = Array.from( document.querySelectorAll( 'form' ) );

    forms.forEach( form => {
        form.addEventListener( 'submit', e => evaluateForm( e, form ) );
    } );
    
    const evaluateForm = ( event, form ) => {
        event.preventDefault();
        ( isValidForm( form ) ) ? sendForm( form ) : showAllErrors( form );
    }
    
    const isValidForm = form => {
        let validInputs = 0;
        inputsOf( form ).forEach( input => isValidField( input ) && ( validInputs += 1 ) );
        return validInputs === inputsOf( form ).length;
    };
    
    const inputsOf = form => {
        const inputs = Array.from( form.querySelectorAll( 'input:not([type="submit"]), textarea' ) );
        return inputs;
    }
    
    const isValidField = ({ name, value }) => regexs[name].test( value.toLowerCase().trim() );
    
    const sendForm = form => {
        // ON THIS LINE I WOULD SEND THE DATA TO THE BACKEND.
        activateFloatingForm( false );
        resetInputsStyles( form );
        form.reset();
        setTimeout( () => alert( 'Form sent successfully' ), 400 );
    }
    
    const resetInputsStyles = form => {
        inputsOf( form ).forEach( input => input.classList.remove( 'error', 'success' ) );
    }
    
    const showAllErrors = form => {
        inputsOf( form ).forEach( input => {
            !isValidField( input ) ? showError( true, input ) : showError( false, input );
        } );
    }
    
    const showError = ( displayError, input ) => {

        if( displayError ) {
            input.classList.remove( 'success' );
            input.classList.add( 'error' );
        } else {
            input.classList.remove( 'error' );
            input.classList.add( 'success' );
        }
        
    }
    
}

try { handleSubmitOfForms(); } catch ( error ) { console.log( error ); }


// FOOTER
const createFooterIcons = () => {

    const footerIcons = document.querySelector( '.footer .footer__icons' );

    networks.forEach( network => {

        footerIcons.innerHTML += `
            <a class="footer__link" href="${ network }" target="_blank"></a>
        `;

    } );

}

try { createFooterIcons(); } catch ( error ) { console.log( error ); }