## 라이브러리

-   node 14.17.4
-   yarn 3.0.1

## yarn berry

-   plugins
    -   typescript

## eslint

-   react-native-community
    -   @react-native-community/eslint-config
    -   @react-native-community/eslint-plugin
-   prettier
    -   eslint-config-prettier
    -   eslint-plugin-prettier
-   import
    -   eslint-plugin-import
-   typescript
    -   @typescript-eslint/eslint-plugin
    -   @typescript-eslint/parser
-   react
    -   eslint-plugin-react

## Flipper

-   packages
    -   @react-navigation/devtools
-   devtools
-   react-native-navigation

## emotion

-   @emotion/react
-   @emotion/native

## react-native-navigation

-   @react-navigation/native
-   @react-navigation/native-stack
-   react-native-screens react-native-safe-area-context

## antd

-   package - @ant-design/react-native
-   babel 설정
    -   babel-plugin-import

very heavy...
설정 그지같음...
react-native 버전도 낮음...

## recoil

-   recoil

## react-query

-   react-query
-   axios

## react-native-config

안드로이드 추가 설정
android/settings.gradle 파일에 아래 내용을 추가하고,

include ':react-native-config'
project(':react-native-config').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-config/android')
android/app/build.gradle 파일의 두번쨰 줄에 아래 내용을 추가해 준다.

apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
