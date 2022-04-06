# Joeschmoe.io

This is a simple project which tells your avatar based on your name or the value entered by the user in the input field. The avatar is displayed by the use of a **_third-party_** API called "**Joeschmoe.io**".

## Tech Stack

**Client:** HTML, CSS and JavaScript (DOM manipulation - jquery).

## 🔗 Links

This web page has been deployed at Netlify and below is the link : -

[![Joeschmoe.io](https://img.shields.io/badge/-Avatar-2E67A0)](https://joeschmoe-io.pages.dev/)

## About the Project

Default Avatar is the avatar which is show to the user if the user has not yet made a successful request. A request is considered to be successful if the input field contains any value (except "").
This project also contains alerts which are displayed as required.

## Features

- **SVG amination** - Default Avatar

```bash
    @keyframes girlIcon {
        from {
            transform: rotate3d(52, 19, -2, 58deg);
        }
        to {
         transform: rotate3d(0, 0, 0, 0deg);
        }
    }
```

- **Third Party API**

```bash
    document
            .getElementById("newImg")
            .setAttribute("src", `https://joeschmoe.io/api/v1/male/${name}`);
```

## Related

To know more about **Joeschmoe.io** please refer to the below given link.

[Joeschmoe.io](https://joeschmoe.io/)

## Author

- [@TheDa21crj](https://github.com/TheDa21crj)
