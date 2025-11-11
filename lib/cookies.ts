export function setCookie(name: string, value: string, days?: number, path = "/") {
  let expires = "";
  if (days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + d.toUTCString();
  }
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=${path}`;
}

export function getCookie(name: string): string | null {
  const match = document.cookie.split("; ").find(row => row.startsWith(encodeURIComponent(name) + "="));
  if (!match) return null;
  return decodeURIComponent(match.split("=")[1]);
}

export function deleteCookie(name: string, path = "/") {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
}