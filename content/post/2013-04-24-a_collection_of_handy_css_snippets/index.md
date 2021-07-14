---
title: "Коллекция полезных css-снипетов"
# description: ""
tags: [ "html" ]
categories: ["web"]
date: "2013-04-24"
---

Не начинайте ваш проект с пустой таблицы стилей. Есть много интересных сниппетов, которые могут облегчить вам жизнь и ускорить веб-разработку.
<!-- Read more -->


## Часто используемые классы

Самые распространённые:

	.float-left /* прижимаем блок влево */ {
	    float: left;
	}
	.float-right /* прижимаем блок вправо */ {
	    float: right;
	}
	.hide  /* прячем блок */ {
	    display: none;
	}
	.show  /* показываем блок */ {
	    display: block;
	}

Думаю, разъяснять тут ничего не надо. Это базовые стили, и их каждый должен знать и использовать. Они даже в каждом фреймворке есть, только под другими именами.



## Фрагменты связанные с дизайном

Начнем со шрифтов:

	.content {
	    font: 1em/1.4 Segoe, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
	}
	.title {
	    font: 1.7em/1.2 'aquarion', Garamond, "Times New Roman", serif;
	}
	.code {
	    font: 0.8em/1.6 Monaco, Mono-Space, monospace;
	}

Здесь, мы меняем шрифты для основного конента, заголовков и для блоков с кодом.

	.disabled {
	    pointer-events: none;
	    opacity: 0.5;
	}

Иногда нужно показать, как будет выглядить отключенный элемент. Вот для этого можно и использовать данный класс. Здесь мы делаем его чуть тусклее и никакие события мыши на нем не должны срабатывать.

	table tr:nth-child(even) {
	    background: rgba(0,0,0,0.1);
	}

"Зебристая" таблица. Очень часто используемое.

	a {
	    text-decoration: none;
	    color: #08C;
	    transition: all 0.3s ease-out;
	    position: relative;
	    padding: .5em;
	    margin: -.5em;
	}
	a:hover { color: #0AF; }

Этим мы слегка изменим стиль ссылок.



## Для разработчиков

	*, *:before, *:after {
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	}

Будет не везде работать. Для IE есть свои хаки. Смысл в том, что после этого у вас для размеров блока, не будут учитываться паддинги, бордеры. Т.е. не прийдется высчитывать заново ширину блока, если вы добавите ему паддинг в несколько пикселей. Очень usefull и must have.

	.clearfix:before,
	.clearfix:after {
	    content: " ";
	    display: table;
	}

	.clearfix:after {
	    clear: both;
	}

	/* IE6/7 support */
	.clearfix {
	    *zoom: 1;
	}

Clearfix, я думаю, не нуждается в представлении. Нужен он, чтобы восстановить нормальный ход блоков, после блоков у которых задан float, т.е. после плавающих.

	.visuallyhidden {
	    position: absolute;
	    width: 1px; /* Если сделать 0, то мы спрячем от VoiceOver */
	    height: 1px; /* Если сделать 0, то мы спрячем от VoiceOver */
	    padding: 0;
	    margin: -1px;
	    border: 0;
	    clip: rect(0 0 0 0);
	    overflow: hidden;
	}

visuallyhidden прячет с экрана блок. "В чем разница от display: none;" - спросите вы. Display: none; прячет содержимое не только он наших глаз, но и от поисковых роботов. В этом же случае, роботы будут видеть контент и смогут его анализировать. Также этот контент будет виден для screen читалок.

Часто нам нужно перенести картинку, текст, да что угодно, за пределы экрана. И чаще всего мы пользовались `position: absolute; left: -9999px;`, ну что ж, способ ниже делает тоже самое, только более изящнее:

	.ir {
	    text-indent: 100%;
	    white-space: nowrap;
	    overflow: hidden;
	}

Теперь о тексте, часто бывает, что текст не влазит в определнный контейнер и нам приходится, что-то с ним делать. Способы ниже, как раз для этого.

	.break {
	    -ms-word-break: break-all;
	    word-break: break-all;

	    word-break: break-word;

	    -webkit-hyphens: auto;
	    -moz-hyphens: auto;
	    hyphens: auto;
	}
	.ellipsis {
	    width: 250px;
	    white-space: nowrap;
	    overflow: hidden;
	    -ms-text-overflow: ellipsis; /* для IE8 */
	    -o-text-overflow: ellipsis; /* для Opera */
	    text-overflow: ellipsis;
	}

Первый добавляет автоматический перенос строк, пытаясь вместить все к блок. А второй покажет нам в конце точки, означающие, что у текста есть продолжение)

Скажу еще, что это будет работать не во всех браузерах, так что проверяйте.

Ниже, кусок кода, предназначенный для тега `pre`, если вы не знаете, что это за тег :-) то поисковик вам в помощ)
Элемент `<pre>` определяет блок предварительно форматированного текста. Обычно в нем размещают код.

	pre {
	    white-space: pre-wrap;       /* Chrome & Safari */
	    white-space: -moz-pre-wrap;  /* Mozilla since 1999 */
	    white-space: -pre-wrap;      /* Opera 4-6 */
	    white-space: -o-pre-wrap;    /* Opera 7 */
	    word-wrap: break-word;       /* Internet Explorer 5.5+ */
	}



## Сборная солянка)

Точного заголовка нет, потому как ниже будут раличные куски кода, для различных задач.

Начнем с печати:

	@media print {
	    * {
	        background: none !important;
	        color: black !important;
	        box-shadow: none !important;
	        text-shadow: none !important;

	        /* Images, vectors and such */
	        filter: Gray();                          /* IE4-8 */
	        filter: url('desaturate.svg#grayscale'); /* SVG version for IE10, Firefox, Safari 5 and Opera */
	        -webkit-filter: grayscale(100%);         /* Chrome + Safari 6 */
	        -moz-filter: grayscale(100%);
	        -ms-filter: grayscale(100%);
	        -o-filter: grayscale(100%);
	        filter: grayscale(100%);
	    }
	    a {
	        text-decoration: underline;
	    }
	    a[href]:after {
	        content: " (" attr(href) ")";
	    }
	    a[href="#"],
	    a[href="javascript:"] {
	        content: "";
	    }
	}

	<!-- SVG version of grayscale filter: desaturate.svg -->
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
	    <filter id="grayscale">
	        <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0
	            0.3333 0.3333 0.3333 0 0
	            0.3333 0.3333 0.3333 0 0
	            0  0  0  1 0"/>
	    </filter>
	</svg>

Перво наперво мы делаем все черно-белым :-) Вы же не хотите разориться на заправке цветных катриджей )
Думаю по кода ясно, что также мы убираем все фоновые картинки и все тени. Ну а зачем они нам?
С помощью фильтров мы делаем картинки черно-белыми. Для разных браузеров используются разные техники.

Также у нас есть пару строчек, предназначенных для якорей. Текст что был в якоре, будет размещен сразу после ссылки.

>у [HTML5BoilerPlate](https://github.com/h5bp/html5-boilerplate/blob/master/css/main.css "HTML5BoilerPlate") вы сможете увидеть более подробный код.

Теперь обсудим то, что сейчас очень модно)

	@media
	only screen and (-webkit-min-device-pixel-ratio: 2),
	only screen and (   min--moz-device-pixel-ratio: 2),
	only screen and (   -moz-min-device-pixel-ratio: 2),
	only screen and (     -o-min-device-pixel-ratio: 2/1),
	only screen and (        min-device-pixel-ratio: 2),
	only screen and (                min-resolution: 192dpi),
	only screen and (                min-resolution: 2dppx) {
	    /* ваш код для ретины */
	}

Да да, тут мы пишем стили для ретины.

>У Chris Coyier есть большая [статья](http://css-tricks.com/snippets/css/retina-display-media-query/), по этому поводу.



## Послесловие

Не надо пользоваться всем, что было описано. Используйте только то, что вам действительно нужно и пригодится. Со временем у вас выработаются свои "помощники".

Удачи и хороших проектов :-)



[original article](http://tympanus.net/codrops/2012/10/25/kick-start-your-project-a-collection-of-handy-css-snippets "KICK-START YOUR PROJECT: A COLLECTION OF HANDY CSS SNIPPETS")
