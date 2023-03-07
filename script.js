const menuItems = document.querySelectorAll('.menu-item');


// MESSAGES
const messagesNotifications = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');


// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')


// remove active class from menu items

const changeActiveItem = () =>  {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
};


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active');

        if(item.id != 'notifications') {
            document.querySelector('.notification-popup').
            style.display = 'none';
        }else {
            document.querySelector('.notification-popup').
            style.display = 'block'


            document.querySelector('#notifications .notification-count').
            style.display = 'none';


        }

    });
});


// MESSAGES
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'

    messagesNotifications.querySelector('#messages-notification .notification-count').
    style.display = 'none'

    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);


})

// THEME

const openThemeModal = () => {
    themeModal.style.display = 'grid'
}

const closeThemeModal = (evt) => {
    if(evt.target.classList.contains('customize-theme'))
    themeModal.style.display = 'none'
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


// REMOVE ACTIVE CLASS FROM FONT SIZE

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


// FONT SIZES

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSizes;

        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')) {
            fontSizes = '10px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')

        }else if(size.classList.contains('font-size-2')) {
            fontSizes = '13px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')

        }else if(size.classList.contains('font-size-3')) {
            fontSizes = '16px'
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')

        }else if(size.classList.contains('font-size-4')) {
            fontSizes = '19px'
            root.style.setProperty('--sticky-top-left', '5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')

        }else if(size.classList.contains('font-size-5')) {
            fontSizes = '22px'
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')

        }
        // Change font size of the root html element
        document.querySelector('html').style.fontSize = fontSizes;
    })
})


// REMOVE ACTIVE CLASS FROM COLOR
const changeActiveColor = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}



// COLOR

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveColor();
        let primary;

        if(color.classList.contains('color-1')) {
            primary = '252'
        }else if(color.classList.contains('color-2')) {
            primary = '52'
        }else if(color.classList.contains('color-3')) {
            primary = '352'
        }else if(color.classList.contains('color-4')) {
            primary = '152'
        }else if(color.classList.contains('color-5')) {
            primary = '202'
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primary);

    })
})


// THEME BACKGROUND

let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// CHNGING OF BACKGROUND COLOR

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    console.log('is clicked');
    //adding active class
    Bg1.classList.add('active')

    // Removing active class
    Bg2.classList.remove('active')
    Bg3.classList.remove('active')

    window.location.reload()
})

Bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95';


    Bg2.classList.add('active');

      // Removing active class
      Bg1.classList.remove('active')
      Bg3.classList.remove('active')

      changeBg();
})


Bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    Bg3.classList.add('active');

    //Removing active class

    Bg1.classList.remove('active')
    Bg2.classList.remove('active')

    changeBg()
})