const colorThemes = document.querySelectorAll('[name = "theme"]');

//storing theme
const storeTheme = function(theme) {
    localStorage.setItem("theme",theme);
}

const setTheme = function (){
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if(themeOption.id === activeTheme){
            themeOption.checked = true;
        }
    });
    
    document.documentElement.className = theme;
};

colorThemes.forEach(themeOption =>{
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    });
});

document.onload = setTheme();