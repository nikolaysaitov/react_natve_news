# Азбука мебели - React-native app

# Getting Started

```bash

# FSD:

app — настройки, стили и провайдеры для всего приложения.

pages (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов. (например, Main, Category, Cart)

entities (сущности) — бизнес-сущности. (например, User, Product, Cart).

widgets (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки. (например, ProductCard, UserProfile).

features (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя. (например, SendComment, AddToCart).

shared — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса. (например, UIKit, libs, API).

Example:

pages
    - profile
entities
    - PersonalAccount
widgets
    - Account
features
    - AccountTabs
shared
    - buttons and others




Основные запросы:
    userInfo(token) - запрос данных юзера при авторизации;
    userUpdate(data) - обновление данных юзера;
    getOrders(token) - запрос заказов юзера;
    getFavorites(token) - запрос избранных товаров юзера;
    getPaymentLink(token, orderId) - запрос ссылки на оплату;
    getDocs(token) - запрос документов на подписание;



Экран товара:
 - /pages/product/ui/Page/Page.tsx
 - /entities/productCard/ui/ProductCard.tsx
 - /widgets/ProductDetails/ui/ProductDetails.tsx


Часто переиспользуемые компоненты:
   Заглушка для неудачного запроса - ButtonFailedRequest '/shared/ui/buttons/ButtonFailedRequest'
   Инпут для формы - FloatingLabelInput '/shared/ui/Inputs/FloatingLabelInput';

---

## 🚀 Установка и запуск

Перед началом убедитесь, что у вас установлен [Node.js](https://nodejs.org/), [React Native CLI](https://reactnative.dev/docs/environment-setup), Android SDK и подключено Android-устройство (или эмулятор).

# Клонируйте репозиторий
git clone ...
cd testapp

# Установите зависимости
npm install

# Запустите приложение на Android
npx react-native run-android

⚙️ Полезные команды

📱 Android
# Очистка сборки Android
cd android && ./gradlew clean

# Открытие DevTools:
Ctrl + M
# или в отдельном терминале:
adb shell input keyevent 82

# Проверка подключенных устройств:
adb devices

# Сборка и запуск приложения
npx react-native run-android

# Сборка тестового APK
cd android
./gradlew assembleRelease

# Проверка подписи
./gradlew signingReport


🍏 iOS

# Открытие DevTools
Ctrl + Cmd (⌘) + Z

# Установка зависимостей через CocoaPods
cd ios && pod install

# Переустановка pod-зависимостей
cd ios
pod deintegrate
pod install --repo-update
cd ..

🔄 Очистка и переустановка зависимостей (универсально)
rm -rf node_modules package-lock.json && npm install
cd ios && rm -rf Pods Podfile.lock && pod install && cd ..

💻 Для Mac с процессором M1
# Установка зависимостей в режиме совместимости
cd ios && rm -rf Pods Podfile.lock && arch -x86_64 pod install --verbose && cd ..

# Установка через архитектуру arm64
arch -arm64 pod install

# Установка с включённой новой архитектурой React Native
cd ios && RCT_NEW_ARCH_ENABLED=1 pod install

🚀 Запуск и разработка

# Запуск на iOS
npx react-native run-ios

# Запуск Metro с очисткой кэша
npx react-native start --reset-cache



Проверка PUSH notification в DebugView (в реальном времени)
🔧 Как настроить DebugView:
Android:

    Подключи устройство (или эмулятор) через ADB.

    Выполни команду в терминале:

adb shell setprop debug.firebase.analytics.app your.package.name

(где your.package.name — например com.testapp)

    Запусти приложение.

    Открой Firebase Console → Analytics > DebugView.

    Ты должен увидеть все события, включая notification_opened.

    ⚠️ Не забудь после тестов выключить debug режим:

adb shell setprop debug.firebase.analytics.app .none.


```
