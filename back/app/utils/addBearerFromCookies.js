
export const addBearerFromCookies = (req, res, next) => {
    const accessToken = req.cookies.access_token
    if(accessToken) {
        req.headers.authorization = `Bearer ${accessToken}`
    }
    next()
}
