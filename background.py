from cookie import CookieBuilder


def getChromeCookie(url, cookiename, callback):
    """ get cookie from chrome. """
    chrome.cookies.get({"url": url, "name": cookiename}, callback)


def setChromeCookie(cookie):
    """ set cookie in chrome. """
    chrome.cookies.set(cookie)


def removeChromeCookie(cookie):
    """ remove cookie from chrome. """
    chrome.cookies.remove(cookie)


def messageHandler(request, sender, sendResponse):
    """ response to the cookie request """
    print(request)
    if request.action == "getCookie":
        
        def fakeCallback(cookie):
            cookieBuilder = CookieBuilder()
            cookieBuilder.loadChromeCookie(cookie)
            print(cookie, cookieBuilder.getCookie())
            sendResponse(cookieBuilder.loadChromeCookie(cookie).getCookie())

        getChromeCookie(request.url, request.cookieName, fakeCallback)

    if request.action == "setCookie":
        setChromeCookie(request.cookie)
        sendResponse()

    if request.action == "removeCookie":
        removeChromeCookie(request.cookie)
        sendResponse()

    # ensure asynchronous mode
    return True


chrome.runtime.onMessage.addListener(messageHandler)
