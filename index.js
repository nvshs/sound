var theme = "dark";
            
function setTheme() {
  if (theme == "dark") {
    theme = "light"
    document.documentElement.style.setProperty('--background', '#f5f6f7');
    document.documentElement.style.setProperty('--foreground', '#101010');
  }
  if (theme == "light") {
    theme = "dark"
    document.documentElement.style.setProperty('--foreground', '#f5f6f7');
    document.documentElement.style.setProperty('--background', '#101010');
  }
}
