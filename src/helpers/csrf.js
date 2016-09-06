export function getCSRFToken() {
  const cookies = document.cookie.split('&');
  return cookies.reduce((csrf, cookie) => {
    if ( csrf !== undefined ) {
      return csrf;
    }
    const [key, val] = cookie.split('=');
    return key === 'csrftoken' ? val : csrf;
  }, undefined);
}
