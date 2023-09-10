# Installation

## Development

1. Cd into cs, run `yarn install` and run development server via `yarn develop`
2. Cd into vs, run `yarn install` and run development server via `yarn dev`

## Production

1. Copy `.env.example` file and rename it to just `.env`. Change the file contents/variables to preferred settings.

2. Download, build and start containers by running command:

```sh
docker compose up -d
```

3. For SSL create certbot certificates with:

```sh
docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d example.org
```

4. Renew SSL certificates on a regular basis:
```sh
docker compose run --rm certbot renew
```