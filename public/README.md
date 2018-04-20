# Photobooth
- To use the API call you'll need to update the .env file with the following URL structure:
  - The endpoint URL must point to the wordpress domain it must be composed of your `subdomains.domains.extensions` ending with `/wp-json` which is the default endpoint wordpress api. See the example below:
`https://subdomains.domains.yourextensions/wp-json`
- The website must be installed on a valid certificat SSL server. *(Self-signed certificate won't works)*