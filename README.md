# AngularSearchVerenia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Задача:
## Разработать приложение которое ищет проекты на Github.
###### Структура приложения:
1. Панель навигации:
2. Главная (по адресу / или /home),
3. Избранные (по адресу /favorites, роут должен быть защищен паролем
(например 1234), т.е. загрузка компонента по адресу /favorites
невозможна, пока пользователь не введет 1234, разрешено использовать
стандартный prompt для ввода пароля)

## Контент выбранной страницы:
###### Главная:
1. Поле поиска, при изменении значения запускать поиск по
ключевому слову используя endpoint
https://api.github.com/search/repositories?q=KEYWORD
На поле повесить debounce в 1 секунду, кнопка "Поиск" не требуется.
2. Список найденных проектов, в формате - аватарка пользователя, имя
проекта, рейтинг проекта, описание проекта, ссылка на проект, на каком
языке составлен проект (например Javascript, Python...), кнопка
добавления проекта в избранное. При нажатии на кнопку добавления -
проект добавляется в массив избранных проектов в localStorage.
3. Селектор выбора языка проекта - отображается только когда найден хотя
бы один проект, в качестве опций выступают все существующие языки
программирования в списке проектов, без повторений (например JS,
Assembler, C++, etc.). Выбор любого значения фильтрует список проектов по
выбранному языку.

###### Избранные:
1. Список проектов аналогично формату списка результатов поиска, но с
кнопкой удаления из избранного.

## Требования:
1. Angular 7+, JS, HTML5, CSS3. Код должен соответствовать современным
стандартам и рекомендациям к написанию приложений от команды Angular.
2. Количество модулей, компонентов, сервисов - на усмотрение, как это
подсказывает логика построения приложения.
3. К верстке жестких требований нет - разрешено использовать любую библиотеку
или не использовать вовсе, макет компонентов и компоновка страниц - по вкусу.
