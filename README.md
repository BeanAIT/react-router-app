# Ukázkový projekt pro použití React Router

## Především je zde
- komponenta `App`, která obsahuje definici Routeru, který umožní napojit url na React komponenty (například **/contact** na komponentu `Contact`)
- komponenta `Navigation`, která obsahuje zobrazení samotné navigace (menu) se seznamem odkazů na stránky (pomocí komponenty `Link`). Důležitá je tam také komponenta `Outlet`, která umožní na každé stránce zobrazení jak navigace, tak samotného obsahu stránky (obsah stránky je právě ten `Outlet`).
