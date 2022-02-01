const body = document.querySelector( 'body' );
const submenuInput = document.querySelector( '.menu .last-menu-item #submenu-input' );

export const activeMenu = () => {
    body.classList.toggle( 'menu-active' );
    ( submenuInput.checked ) && submenuInput.click();
}

export const disableMenu = () => {
    body.classList.remove( 'menu-active' );
    ( submenuInput.checked ) && submenuInput.click();
}

export const activateFloatingForm = activate => {
    ( activate ) 
        ? body.classList.add( 'floating-form-active' )
        : body.classList.remove( 'floating-form-active' );    
}