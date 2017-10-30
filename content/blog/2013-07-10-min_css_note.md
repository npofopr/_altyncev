---
title: "Небольшая записка css. Чтобы помнить"
# description: ""
tags: [ "html", "css" ]
categories: ["web"]
date: "2013-07-10"
---

Расширяем свой reset.css и зарещаем масштабирование сайта.
<!-- Read more -->

**Расширьте reset.css**

К стандартному reset.css будет полезно добавить стиль переопределяющий выделение елементов при тапах. Это выглядит не кравсиво и не нейтив

	*:not(html) {
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    user-select: none;
	    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}

**Запрещайте масштабирование**

Вставив в тег head следующий тег вы запретите масштабирование и получите возможность трекать жесты.

	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">

