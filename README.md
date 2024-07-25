# Действия по установке решений

После клонирования репозитория нужно подтянуть пакеты одной из команд
npm i ( yarn )
После если это -

## Android

    Нужно выполнить команду
    quasar build -m capacitor -T android --ide

    В android studio выбрать вкладку
    build -> Generate Signed App Bundle or APK -> Выбрать Android App Bandle

    В Key store path указать путь к файлу с ключем keystorefile.jks в этом проекте

    Key store password: 119515
    Key alias: key0
    Key paswword: 119515

    Выбрать release.

    Приложение будет собрано в этом проекте по пути
    src-capacitor/android/app/release/app-release.aab

## IOS

    Нужно выполнить команду
    quasar build -m capacitor -T ios --ide

# Config

В quasar.config.js нужно поменять BASE_URL если это новое приложение

BASE_URL: 'https://demo.checake.ru',
BASE_URL_PREFIX: '/api',

# Woman (woman)

Cеть студий красоты

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

icongenie generate -m capacitor -i ./public/icon.png -b ./public/splash.png --splashscreen-icon-ratio 0 --skip-trim
