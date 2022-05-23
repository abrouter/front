# ABRouter Front

Please, feel free to visit the [full documentation](https://docs.abrouter.com/docs/intro/).

Front-end of ABRouter is based on Laravel as the server and contain some react apps.

## React apps


### Experiments

Located in [react/experiments](https://github.com/abrouter/front/tree/main/react/experiments). Experiments application. Used in experiments dashboard


### Sign-up

Located in [react/signup](https://github.com/abrouter/front/tree/main/react/signup). Sign-up/Sign-in application. Used for authentication page

## Deploy & Build

You can use the following command to build the front:

```
make build-front
```
This command will create new builds for each app and move it to public/js. Actual build files is stored in front-config/global.json.

We're plan to move the apps to separated folders and builds via netlify.


