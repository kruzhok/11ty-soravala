$(function() {
    function doAllTheThingsToToggleMenu() {
        $('#mobile-menu').toggleClass('menu-open')
        $('#background').toggleClass('menu-open')
        $('#body').toggleClass('menu-open')
        $('#menu-toggle').toggleClass('menu-open')
        $('#close-menu-button').toggleClass('menu-open')
    }

    $('#menu-toggle').on('click', doAllTheThingsToToggleMenu)
    $('#background').on('click', doAllTheThingsToToggleMenu)
    $('#close-menu-button').on('click', doAllTheThingsToToggleMenu)
})(jQuery)

