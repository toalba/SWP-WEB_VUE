// ######## Bootstrap Theme ########
(() => {
    'use strict'

    // Set Bootstrap Theme to the preferred color scheme
    const setPreferredTheme = () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark')
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light')
        }
    }
    window.addEventListener('DOMContentLoaded', () => {
        setPreferredTheme()
    })
})()