---
title: "Вопросы и ответы для собеседования на верстальщика"
description: "Попробую ответить на вопросы, который у Вас могут спросить на собеседовании, на должность верстальщика"
tags: ["html", "css", "jobs"]
categories: ["web"]
date: "2017-11-16"
#featured: "hugo-logo.png"
#featuredalt: "Pic 3"
#featuredpath: "/images/blog/"
type: "post"
---

Попробую ответить на вопросы, который у Вас могут спросить на собеседовании, на должность верстальщика.

![Когда на собеседовании тебе показали кто тут Senior](/img/2017/11/45332139-5e21-4c69-8a4a-f8741a7cfd8c.gif)

<!-- Read more -->

## Вопросы

> Какие бывают значения display? Расскажите как ведёт себя каждое свойство.

```css
    display: block | inline | inline-block | inline-table |
    inline-flex | flex | list-item | none |
    run-in | table | table-caption | table-cell | table-column-group | table-column |
    table-footer-group | table-header-group | table-row | table-row-group
```

<a href="https://webref.ru/css/display" target="_blank" rel="nofollow">Подробнее</a>

<details>
<summary>Спойлер статьи</summary>

### block

Элемент показывается как блочный. Применение этого значения для строчных элементов, например `<span>`, заставляет его вести подобно блокам — происходит перенос строк в начале и в конце содержимого.

### inline

Элемент отображается как строчный. Использование блочных элементов, таких, как `<div>` и `<p>`, автоматически создаёт перенос и показывает их содержимое с новой строки. Значение inline отменяет эту особенность, поэтому содержимое блочных элементов начинается с того места, где окончился предыдущий элемент.

### inline-block

Это значение генерирует блочный элемент, который обтекается другими элементами веб-страницы подобно строчному элементу. Фактически такой элемент по своему действию похож на встраиваемые элементы (вроде `<img>`). При этом его внутренняя часть форматируется как блочный элемент, а сам элемент — как строчный.

### inline-table

Определяет, что элемент является таблицей, как при использовании `<table>`, но при этом таблица является строчным элементом и происходит её обтекание другими элементами, например, текстом.

### inline-flex

Элемент ведёт себя как строчный и выкладывает содержимое согласно флекс-модели.

### flex

Элемент ведёт себя как блочный и выкладывает содержимое согласно флекс-модели.

### list-item

Элемент выводится как блочный и добавляется маркер списка.
none
Временно удаляет элемент из документа. Занимаемое им место не резервируется, и веб-страница формируется так, словно элемента и не было. Изменить значение и сделать вновь видимым элемент можно с помощью скриптов, обращаясь к свойствам через объектную модель. В этом случае происходит переформатирование данных на странице с учётом вновь добавленного элемента.

### run-in

Устанавливает элемент как блочный или строчный, в зависимости от контекста.

### table

Определяет, что элемент является блочной таблицей, подобно использованию `<table>`.

### table-caption

Задаёт заголовок таблицы, подобно применению `<caption>`.

### table-cell

Указывает, что элемент представляет собой ячейку таблицы (`<td>` или `<th>`).

### table-column

Назначает элемент колонкой таблицы, словно был добавлен `<col>`.

### table-column-group

Определяет, что элемент является группой одной или более колонок таблицы, как при использовании `<colgroup>`.

### table-footer-group

Используется для хранения одной или нескольких строк ячеек, которые отображаются в самом низу таблицы. По своему действию сходно с работой `<tfoot>`.

### table-header-group

Элемент предназначен для хранения одной или нескольких строк ячеек, которые представлены вверху таблицы. По своему действию сходно с работой `<thead>`.

#### table-row

Элемент отображается как строка таблицы (`<tr>`).

### table-row-group

Создаёт структурный блок, состоящий из нескольких строк таблицы, аналогично действию `<tbody>`.

</details>

<!--more-->

> Что вы знаете о весе селекторов? Каковы значения веса?

Берите в граммах, не жадничайте :simple_smile:

Если условно, есть один быстрый способ выяснить, насколько правило CSS «сильное», путём вычисления специфичности селекторов.

##### Вес селекторов (по убыванию):

-   style=""
-   #id
-   .class
-   [attr=value]
-   LI
-   \*

Селектор с наивысшим «счётом» будет преобладать, независимо от порядка, в котором появляются правила CSS.

---

> Какие бывают значения у свойства position? Расскажите как ведёт себя каждое свойство.

```css
    position: absolute | fixed | relative | static | sticky
```

[Подробнее](https://webref.ru/css/position)

<details>
<summary>Спойлер статьи</summary>

### absolute

Абсолютное позиционирование. Указывает, что элемент абсолютно позиционирован, при этом другие элементы отображаются на веб-странице словно абсолютно позиционированного элемента и нет. Положение элемента задаётся свойствами left, top, right и bottom, также на положение влияет значение свойства position родительского элемента. Так, если у родителя значение position установлено как static или родителя нет, то отсчёт координат ведётся от края окна браузера. Если у родителя значение position задано как relative, то отсчёт координат ведётся от края родительского элемента.

### fixed

Фиксированное позиционирование. По своему действию это значение близко к absolute, но в отличие от него привязывается к указанной свойствами left, top, right и bottom точке на экране и не меняет своего положения при прокрутке веб-страницы.

### relative

Относительное позиционирование. Положение элемента устанавливается относительно его исходного места. Добавление свойств left, top, right и bottom изменяет позицию элемента и сдвигает его в ту или иную сторону от первоначального расположения.

### static

Статичное позиционирование. Элементы отображаются как обычно. Использование свойств left, top, right и bottom не приводит к каким-либо результатам.

### sticky

Это сочетание относительного и фиксированного позиционирования. Элемент рассматривается как позиционированный относительно, пока он не пересекает определённый порог, после чего рассматривается как фиксированный. Обычно применяется для фиксации заголовка на одном месте, пока содержимое, к которому относится заголовок, прокручивается на странице.

</details>

---

> Что будет если задать элементу с position:relative свойство top:10px left: 10px? Что будет если тоже самое задать элементу с position: static?

> Что такое float?

Определяет, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон. Когда значение свойства float равно none, элемент выводится на странице как обычно, при этом допускается, что одна строка обтекающего текста может быть на той же линии, что и сам элемент.

---

> Что такое clearfix? Из чего он состоит и для чего он?

Это способ борьбы с проблемой контейнера нулевой высоты для плавающих элементов

---

> Как верстать html письма?

Мой совет, лучше не верстать))

А в целом, таблицами, будет пуленепробиваемое. Или сейчас есть множество генераторов.

---

> Из чего строится размер элемента?

Из его размера) Но тут есть оговорка на `box-sizing`

###box-sizing: content-box

Основывается на стандартах CSS, при этом свойства width и height задают ширину и высоту содержимого и не включают в себя значения margin, padding и border.

### box-sizing: border-box

Свойства width и height включают в себя значения padding и border, но не margin.

---

> Что такое border-box?

Смотри выше :point_up:

---

> Расскажите о различия padding и margin?

### margin

Устанавливает величину отступа от каждого края элемента. Отступом является пространство от границы текущего элемента до внутренней границы его родительского элемента.

### padding

Устанавливает значение полей вокруг содержимого элемента. Полем называется расстояние от внутреннего края рамки элемента до воображаемого прямоугольника, ограничивающего его содержимое.

---

> Как ведут себя margin у двух элементов по соседству?

У блочных элементов расположенных рядом друг с другом по вертикали наблюдается эффект схлопывания, когда отступы не суммируются, а объединяются между собой. Само схлопывание действует на два и более блока (один может быть вложен внутрь другого) с отступами сверху или снизу, при этом примыкающие отступы комбинируются в один. Для отступов слева и справа схлопывание никогда не применяется.

Схлопывание не срабатывает:

-   для элементов, у которых на стороне схлопывания задано свойство `padding`.
-   для элементов, у которых на стороне схлопывания задана граница;
    на элементах с абсолютным позиционированием, т. е. таких, у которых `position` установлено как `absolute`;
-   на плавающих элементах (для них свойство `float` задано как `left` или `right`);
-   для строчных элементов;
-   для `<html>`.

---

> Какие теги по умолчанию являются блочными, а какие строчными? Можно ли изменить их поведение и как?

В теме про [display](#block) есть овтеты.

---

> Есть ли у тегов предопределённые стили?

Есть, в Консоли можно посмотреть. В частности у `input`. В разных браузерах может быть по-разному. Если я правильно понял, о чём тут речь)

---

> Как повлиять на вертикальное выравнивание строчного элемента?

Не понятный вопрос... Наверно, речь про `vertical-align`

Выравнивает элемент по вертикали относительно своего родителя, окружающего текста или ячейки таблицы.

```css
    vertical-align: baseline|bottom|middle|sub|super|text-bottom|text-top|top|
```

---

> Как браузер «читает» css?

Делает он это сверху вниз, проходясь последовательно по каждой строчке.

Вот [крутая статья](https://medium.com/devschacht/speeding-up-loading-in-the-era-of-smartphones-f9fa0f6ac672#7f69), по поводу загрузки страницы в целом.

Хотя там мало что, о css.

---

> Какие свойства браузеру отрисовать тяжелее всего?

К ним относятся: box-shadow, border-radius, прозрачность (так как браузер должен высчитывать что показывает под полу-прозрачным элементом), трансформами transform и убийцы производительности CSS фильтры.

«Тяжелее» всего свойства меняющие вид страницы при прокрутке.
Например, есть полупрозрачные тени у блоков и один из них закреплен.
При прокрутке будет постоянно рассчитываться перекрытие теней.

---

> При изменении каких свойств браузер затратит больше всего ресурсов и почему?

Наверно, речь [про это](https://habrahabr.ru/post/308006/).

Т.е. те свойства которые заставляют браузер пересобирать слои каждый раз (left/top/right/bottom).

---

> Какие вы знаете псевдоэлементы? Где их используют?

Самые «ходовые»:

-   :after
-   :before
-   :placeholder
-   :selection

---

> Что такое инлайновые стили?

Стили прямо в html.

---

> Инлайновые стили «сильнее» стилей в обычном файле css?

Да.

---

> Что такое наследование стилей?

Брат за брата)

Наследование в CSS — механизм, с помощью которого значения свойств элемента-родителя передаются его элементам-потомкам.

Стили, присвоенные некоторому элементу, наследуются всеми потомками (вложенными элементами), если они не переопределены явно. Например, размер шрифта и его цвет достаточно применить к `body`, чтобы все элементы внутри имели те же свойства.

Наследование позволяет сократить размер таблицы стилей, но если стилей много, то отследить какой родительский элемент установил некоторое свойство, становится сложнее.

---

> Что вы знаете об !important?

Переводится, как !важный )

Можно им переопределить стили.

---

> Приходилось ли Вам сталкиваться с фоном в письмах? Расскажите о своём опыте.

Печального опыта не помню. Но в целом, надо смотреть как у почтовых клиетов обстоят с этим дела.
С `background-color` не было проблем.

---

> Как отцентровать элемент по горизонтали не зная ширину родительского блока?

Наверно так:

`margin: 0 auto?`, `text-align: center`, `flex, justify-content: center`

---

> Как отцентровать элемент по вертикали не зная высоту родительского блока? Перечислите все известные вам методы.

-   таблица
-   позиционирование
-   tranform
-   flexbox

Есть [ещё другие](https://habrahabr.ru/company/netcracker/blog/277433/).

---

> Что такое «резиновая» вёрстка?

Чтобы было красивенько на всех устройствах.

---

> Какие вы знаете значения размеров в «резиновой» вёрстке?

Эм, брейкпоинты? В нынешнее время их бесконечное множество.

Лучше используйте Адаптивную вёрстку)

---

> Какие бывают значения у свойства background-size? Расскажите о каждом из них.

### auto

Если задано одновременно для ширины и высоты (auto auto), размеры фона остаются исходными; если только для одной стороны картинки (100px auto), то размер вычисляется автоматически исходя из пропорций картинки.

### cover

Масштабирует изображение с сохранением пропорций так, чтобы его ширина или высота равнялась ширине или высоте блока.

### contain

Масштабирует изображение с сохранением пропорций таким образом, чтобы картинка целиком поместилась внутрь блока.

---

> Что такое семантичная вёрстка? Для чего она? Улучшает ли она что либо?

Вёрстка по правилам. Улучшает? Не уверен...

---

> Чем отличается article от section?

### article

Элемент `<article>` задаёт содержание сайта вроде новости, статьи, записи блога, форума и др.

### section

Задаёт раздел документа, может применяться для блока новостей, контактной информации, глав текста, вкладок в диалоговом окне и др. Раздел обычно содержит заголовок. Допускается вкладывать один тег `<section>` внутрь другого.

---

> Какие вы знаете способы организации css кода?

Наверно, речь о методологиях.

-   БЭМ
-   OOCSS
-   SMACSS
-   Atomic CSS

---

> Что такое БЭМ?

БЭМ (Блок, Элемент, Модификатор) — компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки. Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код, избегая «Copy-Paste».

---

> По БЭМ может ли быть блок внутри блока?

Да.

---

> Какие из препроцессоров вы знаете? В чём их различия?

scss, stylus, less

---

> Какие из инструментов сборки вам знакомы?

Gulp, Grunt, Webpack (хотя он и не совсем для сборки, но может)

---

> Что лучше Gulp или Grunt?

Что к сердцу ближе)

---

> Как происходит «сборка» проекта в Gulp и Grunt?

Как описать в конфиге, так и будет происходить?

---

> Что лучше Less или Scss?

Я бы scss выбрал. Но опять же, что к сердцу ближе)

---

> Вы знакомы с Google Pagespeed?

Знаком.

---

> Что такое gracefull degradation?

Функционирование элемента, но с внешними потерями.

---

> Как проверить html-код на валидность?

Воспользоваться валидаторами

---

> Что такое Bootstrap? Из чего состоит его сетка? На чём построен Bootstrap?

css фреймворк. Новый бустрап, вроде целиком на флексах.

---

> Что такое размер viewport?

Мобильные браузеры отображают страницы в виртуальном «окне» (viewport, вьюпорт), которое, как правило, шире экрана устройства. Поэтому им не нужно сжимать макет каждой страницы в крошечное окно (что может сломать многие сайты, не оптимизированные под мобильные устройства). Пользователи могут изменять и масштабировать видимую область, чтобы видеть разные части страницы.

---

> Вертикальный скролл входит в размер viewport?

Да.

---

> Какой размер вертикального скролла?

Обычно она равна 16px, в редких и мобильных браузерах может колебаться от 14px до 18px, а кое-где даже равна 0px.

---

> Как правильно задать overflow для body чтобы сохранить вертикальный скролл?

`overflow-x: hidden;`

---

> Как сделать мобильную, планшетную и десктопную версию сайта?

Стилями.

---

> Что такое ретинизация?

Корректное отображение элементов на ретина экранах.

---

> Должны ли мы отдавать разные размеры картинок пользователям разных устройств? Если да, то как?

`<picture>`

---

> Как можно задавать размеры картинкам?

Можно стилями, можно width, height.

---

> Что такое SVG?

Scalable Vector Graphics — масштабируемая векторная графика.

---

> Что такое иконочные шрифты? Где их искать и как подключать?

Шрифт - иконки)

fontawesome.io/icons/

---

> Что лучше, делать иконки через SVG или через иконочные шрифты?

svg

---

> Какие вы знаете способы подключения шрифтов к странице?

Ссылкой, инлайново в стилях.

---

> Какие есть способы вставки SVG в HTML? В чём между ними разница?

Инлайново, спрайтом, картинкой.

---

> Как мы можем взаимодействовать с SVG?

Хоть как, если вставлен инлайново.

---

> Как проверить кроссбраузерность тех или иных методов вёрстки?

Лучше на живых устройствах.

---

> Что такое JQuery?

jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML.

---

> Как найти элемент на странице с помощью JS и JQuery?

[JS](https://learn.javascript.ru/searching-elements-dom)

---

> Что вы знаете о замыканиях и областях видимости в JS?

[Замыкания, область видимости](https://learn.javascript.ru/functions-closures)

---

> Чем ограничена область видимости JS?

-

---

> Чем ограничена область видимости Document?

-

---

> Что такое DOM?

Основным инструментом работы и динамических изменений на странице является DOM (Document Object Model) – объектная модель, используемая для XML/HTML-документов.

Согласно DOM-модели, документ является иерархией, деревом. Каждый HTML-тег образует узел дерева с типом «элемент». Вложенные в него теги становятся дочерними узлами. Для представления текста создаются узлы с типом «текст».

DOM – это представление документа в виде дерева объектов, доступное для изменения через JavaScript.

[dom](https://learn.javascript.ru/dom-nodes)

---

> Что подразумевает понятие MVC?

Шаблон проектирования MVC предполагает разделение данных приложения, пользовательского интерфейса и управляющей логики на три отдельных компонента: Модель, Представление и Контроллер – таким образом, что модификация каждого компонента может осуществляться независимо.

---

> Что такое AJAX?

[AJAX](https://learn.javascript.ru/ajax-intro) (аббревиатура от «Asynchronous Javascript And Xml») – технология обращения к серверу без перезагрузки страницы.

---

> Как вызвать отладчик в разных браузерах?

F12

---

> Расскажите что показывает каждая вкладка в отладчике?

-

---

> Что такое NODE JS?

[ajax-nodejs](https://learn.javascript.ru/ajax-nodejs)

---

> Что такое Bower?

Менеджер пакетов.

---

> Что такое npm?

Пакетный менеджер node.js

---

> Расскажите про формат .json?

[json](https://learn.javascript.ru/json)

---

> Зачем нам обычно файл package.json?

Установленные плагины.

---

> Что такое git?

[Управление версиями](/blog/2012-09-24-git_eto_prosto_znakomstvo_s_git/).

---

> Что такое ветки (branches)?

Ветка в Git'е — это просто легковесный подвижный указатель на один из этих коммитов.

[Крутой сайт по веткам](https://learngitbranching.js.org).

---

> Как посмотреть все ветки в вашем проекте?

`git branch` - с которыми работаем
`git branch -a` - все существующие ветви

---

> Как посмотреть текущее состояние ветки?

`git status`

---

> Что такое отслеживание в git?

Отслеживаемые файлы — это те файлы, которые были в последнем слепке состояния проекта (snapshot); они могут быть неизменёнными, изменёнными или подготовленными к коммиту (staged). Неотслеживаемые файлы — это всё остальное, любые файлы в вашем рабочем каталоге, которые не входили в ваш последний слепок состояния и не подготовлены к коммиту. Когда вы впервые клонируете репозиторий, все файлы будут отслеживаемыми и неизменёнными, потому что вы только взяли их из хранилища (checked them out) и ничего пока не редактировали.

---

> Что такое commit?

Запись изменений в репозиторий.

---

> Знакомо ли вам git flow? Если да, то расскажите что это такое?

git-flow — это набор расширений git предоставляющий высокоуровневые операции над репозиторием для поддержки модели ветвления Vincent Driessen.

---

> Вы знакомы с работой в командной строке?

Да.

---

> Какой командой посмотреть список папок и файлов в категории?

`ls`

---

> Какой командой мы можем создать и удалить папку в директории?

`rm`
`mkdir`

---

И под конец, [репозиторий](https://github.com/melnik909/frontend-whitelist/blob/master/README.md) с расскрытием всех тайн, которые у вас остались)

Успехов! :boom: