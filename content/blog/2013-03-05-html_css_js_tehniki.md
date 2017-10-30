---
title: "Полезные техники HTML, CSS"
# description: ""
tags: [ "html", "css" ]
categories: ["web"]
date: "2013-03-05"
---

Несколько заметок, для себя. Всё это вы наверняка видели и сможете в легкую найти на хабре.
<!-- Read more -->

## 1. **Google Chrome Frame**

Появилась возможность обходить сложности связанные с Internet Explorer, благодаря Google Chrome Frame. С тех пор, как Google ввел его в 2010 году, **Google Chrome Frame** стал популярнейшим дополнением для поддержки HTML5 в браузере Internet Explorer. Во всех версиях IE можно добавить Chrome Frame для чего достаточно добавить следующий <meta>-тэг в тэге <head> нашего сайта.

`<meta http-equiv="X-UA-Compatible" content=" chrome=1" />`

Используя следующий код мы можем предложить пользователям IE, у которых еще нет этого дополнения, загрузить его с помощью JavaScript:

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>
	<script>
	window.onload = function(){
	   CFInstall.check({
	      mode: "overlay",
	      destination: "http://www.yourdomain.com"
	   });
	};
	</script>

## 2. **Clearfix**

Свойство float было введено еще в CSS 2.1, но так и не стало той панацеей, на которую мы надеялись. Одна из основных проблем — поддержание размеров родительского элемента при плавающем дочернем. Чтобы решить ее, был придуман хак, известный как clearfix.  Возьмем следующий HTML:

	<div class="wrapper clearfix">
		<div class="left">...</div>
		<div class="right">...</div>
	</div>

Хак был написан Николасом Галлахером:

	.clearfix:before,
	.clearfix:after {
		content: " ";
		display: table;
	}
	.clearfix:after {
		clear: both;
	}
	.clearfix {
		*zoom: 1;
	}

## 3. **Замена изображений**

Данная техника применяется уже давным-давно, но, к сожалению, даже новейшие и самые продуманные техники замены не лишены недостатков. Впрочем, недавно стали популярны два удивительных метода, каждый из которых по-своему уникален. Первый из них был написан Скоттом Келлманом:

`<h1 class='hide-text'>My Website's Logo</h1>`

	.hide-text {
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;
	}

Создатель второго метода — Николас Галлахер:

	.hide-text {
		font: 0/0 a;
		text-shadow: none;
		color: transparent;
	}

![Замена изображений](/images/blog/text-ident.jpg "Замена изображений")

## 4. **Адаптивное видео**

Довольно трудно заставить аудиовизуальные элементы отображаться в правильном масштабе в адаптивной верстке. Теперь, когда все больше сайтов имеют самонастраивающуюся конструкцию, необходимо позаботиться о том, чтобы размеры элементов и разрешение обрабатывались корректно.  Встроенное видео — один из самых «упрямых» типов аудиовизуальных средств из-за того, что контент поставляют дополнительные серверы. Встраивание типичного видео с YouTube выглядит примерно так:

	<div class="video">
		<iframe width="640" height="390" src="http://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allowfullscreen=""></iframe>
	</div>

>> «Заворачивание» iframe в другой элемент позволит нам применить тот функционал адаптивности, который нам нужен.

	.video {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
	}
	.video iframe,
	.video object,
	.video embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

>> Основа этого метода — установка wrapper’s padding-bottom видео: 56,25%; Использование заполнения означает, что значения в процентах будут основываться на ширине родительского элемента; ‘56,25%’ даст нам разрешение 16:9. Посчитайте сами, если хотите. 9 / 16 = 0,5625. 0,5625 * 100 = 56,25 (наше значение в процентах).

