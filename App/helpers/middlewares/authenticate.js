function checkAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return next();
    }
    response.redirect('/auth/login');
}

function checkNotAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return response.redirect('/');
    }
    return next();
}

export { checkAuthenticated, checkNotAuthenticated };