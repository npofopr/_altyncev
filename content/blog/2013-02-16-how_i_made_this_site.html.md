---
title: "Блог на Docpad. Минимум усилий. Docpad blogging"
# description: ""
tags: [ "docpad" ]
categories: ["web"]
date: "2013-02-16"
---

Я всегда хотел иметь свой сайт/бложик. И было у меня их очень много.
В большинстве случаев сайты я делал на популярных cms'ках: joomla или wordpress, и ещё были разные, вообще я люблю экспериментировать и пробовать все новое.
<!-- Read more -->

И совсем недавно все больше стали появляться так называемые линкоблоги, которые в большинстве своём хранятся в каком нибудь облаке. Есть куча средств, с помощью которых можно сделать такой "сайтик", а храниться он будет, допустим прямо в вашем dropbox. Очень круто и удобно я считаю. Но там особо не разбежишься с дизайном. Чаще всего вам предоставляют уже готовый шаблон. Но для кого то и это будет достаточно.

Вот и мне захотелось попробовать нечто такое. Тем более, что информации в интернетах, по этому поводу, стало ходить все больше. Правда в большинстве случаев на английском.

Вдохновившись статьёй с хабра про [Сайт для программиста](http://habrahabr.ru/post/160431/ "Сайт для программиста") и намного позже прочитанной статьёй [Пишем блогодвижок на Docpad](http://devblog.the7bits.com/posts/article_01/ "Пишем блогодвижок на Docpad") завёл себе свой, подобный бложик на Docpad.

Ну а теперь все по порядку... Будем делать сайтик на движке [Docpad](http://docpad.org/ "Docpad"), который в свою очередь использует для работы [node.js](http://nodejs.org/ "node.js").

Для начала **создадим** [Git репозиторий](http://github.com/new "Новый git репозиторий"), где и будем хранить все исходники. Можно это сделать и на [Bitbucket](https://bitbucket.org/repo/create "Новый bitbucket репозиторий"). Нет разницы.

Как создать можно прочитать [здесь же](http://altyncev.ru/posts/2012-09-24-git_eto_prosto_znakomstvo_s_git "Создание репозитория").

Второе, что нам потребуется, это **установить** [node.js](http://nodejs.org/) и затем сам движок [Docpad](http://docpad.org/docs/install "Установка docpad").

### Далее создадим структуру:

	src /
	    documents /
	        scripts
	        styles
	    files /
	        vendor
	    layouts

**Назначение папок:**

* documents - содержит файлы с документами (статьи в блоге, статические страницы)
* documents/scripts - клиентские скрипты
* documents/styles - файлы с описанием стилей
* files - статические сайты, тут же я храню библиотеки, стили и подобное)
* layouts - шаблоны описывающие вёрстку страниц

Сам сайт вы можете сделать хоть полностью сами, хоть взять какой нибудь фреймворк, у меня используется [bootstrap](http://twitter.github.com/bootstrap/) и шаблон я брал [этот](http://themes.pixelwars.org/impressivcard/), т.к. сделать, что то самому... получается всегда весьма плохо.

Подключаете [jquery](http://jquery.com/) и все остальное, что хотите, что душа велит :-)

Писать стили есть 2 варианта, или обычным css или с помощью препроцессора [LESS](http://lesscss.ru/) или [Stylus](http://learnboost.github.com/stylus/). У меня все обычным css'ом, но в скоре перепишу на stylus.

### Давайте теперь создадим наш первый и основной шаблон

Обзавем его `src/layouts/default.html.eco`, я не буду выкладывать свой шаблон, выложу просто обычный html, этого вполне достаточно, создаётся он с использованием шаблонизатора [Eco](https://github.com/sstephenson/eco):

	<!DOCTYPE html>
	<html lang="ru">
	<head>
	    <meta charset="utf-8" />
	    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	    <!-- Our site title and description -->
	    <title><%= @getPreparedTitle() %></title>
	    <meta name="description" content="<%= @getPreparedDescription() %>" />
	    <meta name="keywords" content="<%= @getPreparedKeywords() %>" />
	    <meta name="author" content="<%= @site.author or '' %>" />

	    <!-- Output DocPad produced meta elements -->
	    <%- @getBlock('meta').toHTML() %>

	    <meta name="viewport" content="width=device-width" />

	    <!-- DocPad Meta Information -->
	    <%- @getBlock('meta').toHTML() %>

	    <!-- Styles -->
	    <%- @getBlock('styles').add(["/vendor/bootstrap/css/bootstrap.css","/vendor/bootstrap/css/bootstrap-responsive.css","/styles/styles.css"]).toHTML() %>
	</head>
	<body>
	<div class="container-narrow">

	    <div class="masthead">
	        <ul class="nav nav-pills pull-right">
	        	<li <% if @document.slug!='contacts': %>class="active"<% end %> >
	        	<a href="/">Блог</a></li>
	        	<li <% if @document.slug=='contacts': %>class="active"<% end %> >
	        	<a href="/contacts">Контакты</a></li>
	        	<li><a href="/atom.xml">RSS</a></li>
	        </ul>
	      </div>

	      <hr>

	    <div class="row-fluid">
	        <div class="span12">
	            <%- @content %>
	        </div>
	    </div>

	    <hr>

	    <div class="footer">
	        <p>&copy;</p>
	    </div>

	    </div> <!-- /container -->

	    <!-- Scripts -->
	    <%- @getBlock('scripts').add(["/vendor/jquery.js","/vendor/bootstrap/js/bootstrap.min.js","/scripts/script.js"]).toHTML() %>
	</body>
	</html>

Шаблон основной страницы у нас теперь есть.

### Настало время самой страницы, контента.

Создаём файл `documents/index.html.eco`:

	---
	layout: 'default'
	---
	Внутренности страницы, тут могут быть и теги)
	И все, что угодно

Т.к. у нас шаблонизатор, наверняка у него должен быть конфиг, так оно и есть. Создаём файл `docpad.coffee` в корне (не внутри src, снаружи).

### Конфигурационный файл будет выглядеть так:

	# The DocPad Configuration File
	# It is simply a CoffeeScript Object which is parsed by CSON
	docpadConfig = {

	    # =================================
	    # Paths Configuration

	    # Root Path
	    # The root path of our our project
	    rootPath: process.cwd()  # default

	    # Package Path
	    # The project's package.json path
	    # If it is a relative path, it will have the resolved `rootPath` prepended to it
	    packagePath: 'package.json'  # default

	    # Config Paths
	    # An array of paths that we try to extract our docpad configuration from
	    configPaths: [  # default
	        #'docpad.js'
	        'docpad.coffee'
	        #'docpad.json'
	        #'docpad.cson'
	    ]

	    # Plugin Paths
	    # An array of special paths which to load single plugins from
	    # E.g. ['/a/path/to/a/docpad-plugin-special']
	    pluginPaths: []  # default

	    # Plugins Paths
	    # An array of paths which to load multiple plugins from
	    pluginsPaths: [  # default
	        'node_modules'
	        #'plugins'
	    ]

	    # Reload Paths
	    # An array of special paths that when changes occur in, we reload our configuration
	    reloadPaths: []  # default

	    # Regenerate Paths
	    # An array of special paths that when changes occur in, we regenerate our website
	    regeneratePaths: []  # default

	    # Out Path
	    # Where should we put our generated website files?
	    # If it is a relative path, it will have the resolved `rootPath` prepended to it
	    outPath: 'out'  # default

	    # Src Path
	    # Where can we find our source website files?
	    # If it is a relative path, it will have the resolved `rootPath` prepended to it
	    srcPath: 'src'  # default

	    # Documents Paths
	    # An array of paths which contents will be treated as documents
	    # If it is a relative path, it will have the resolved `srcPath` prepended to it
	    documentsPaths: [  # default
	        'documents'
	    ]

	    # Files Paths
	    # An array of paths which contents will be treated as files
	    # If it is a relative path, it will have the resolved `srcPath` prepended to it
	    filesPaths: [  # default
	        'files'
	        #'public'
	    ]

	    # Layouts Paths
	    # An array of paths which contents will be treated as layouts
	    # If it is a relative path, it will have the resolved `srcPath` prepended to it
	    layoutsPaths: [  # default
	        'layouts'
	    ]

	    # Ignore Paths
	    # Can be set to an array of absolute paths that we should ignore from the scanning process
	    ignorePaths: false  # default

	    # Ignore Hidden Files
	    # Whether or not we should ignore files that start with a dot from the scanning process
	    ignoreHiddenFiles: false  # default

	    # Ignore Common Patterns
	    # Whether or not we should ignore commonly undesired files from the scanning process
	    # E.g. .DStore, thumbs.db, .git, files that start with a tilda, etc.
	    ignoreCommonPatterns: true  # default

	    # Ignore Custom Patterns
	    # Can be set to a regex of custom patterns to ignore from the scanning process
	    ignoreCustomPatterns: false  # default



	    # =================================
	    # Server Configuration

	    # Port
	    # Use to change the port that DocPad listens to
	    # By default we will detect the appropriate port number for our environment
	    # if no environment port number is detected we will use 9778 as the port number
	    # Checked environment variables are:
	    # - PORT - Heroku, Nodejitsu, Custom
	    # - VCAP_APP_PORT - AppFog
	    # - VMC_APP_PORT - CloudFoundry
	    port: null  # default

	    # Max Age
	    # The default caching time limit that is sent with the response to the client
	    # Can be set to `false` to disable caching
	    maxAge: 86400000   # default

	    # Server Express
	    # The express.js instance that we want DocPad to use
	    # If not set, we will create our own
	    serverExpress: null  # default

	    # Server HTTP
	    # The node.js HTTP server instance that we want DocPad to use
	    # If not set, we will create our own
	    serverHttp: null  # default



	    # =================================
	    # Middleware Configuration
	    # Which middlewares would you like us to activate
	    # Setting `extendServer` to `false` will set all of these to `false` automatically

	    # Extend Server
	    # Whether or not we should extend the server with our custom middleware
	    extendServer: true  # default

	    # The standard middlewares (bodeParser, methodOverride, express router)
	    middlewareStandard: true  # default

	    # The standard bodyParser middleware
	    middlewareBodyParser: true  # default

	    # The standard methodOverride middleware
	    middlewareMethodOverride: true  # default

	    # The standard express router middleware
	    middlewareExpressRouter: true  # default

	    # Our own 404 middleware
	    middleware404: true  # default

	    # Our own 500 middleware
	    middleware500: true  # default



	    # =================================
	    # Logging Configuration

	    # Log Level
	    # Up to which level of logging should we output
	    logLevel: (if ('-d' in process.argv) then 7 else 6)  # default

	    # Logger
	    #  The caterpillar instance that we want to use
	    # If not set, we will create our own
	    logger: null  # default

	    # Growl
	    # Whether or not we should display system notifications as things progress within DocPad
	    growl: true  # default

	    # Catch Exceptions
	    # Whether or not DocPad should catch uncaught exceptions
	    catchExceptions: true  # default

	    # Report Errors
	    # Whether or not we should report errors back to the DocPad Team
	    reportErrors: process.argv.join('').indexOf('test') is -1  # default (don't enable if we are running inside a test)

	    # Report Statistics
	    # Whether or not we should report statistics back to the DocPad Team
	    reportStatistics: process.argv.join('').indexOf('test') is -1  # default (don't enable if we are running inside a test)

	    # Airbrake Token
	    # The airbrake token we should use for reporting errors
	    # By default, uses the DocPad Team's token
	    airbrakeToken: null  # default

	    # MixPanel Token
	    # The mixpanel token we should use for reporting statistics
	    # By default, uses the DocPad Team's token
	    mixpanelToken: null  # default



	    # =================================
	    # Other Configuration

	    # Render Single Extensions
	    # Whether or not we should render single extensions by default
	    renderSingleExtensions: false  # default

	    # Render Passes
	    # How many times should we render documents that reference other documents?
	    renderPasses: 1  # default

	    # Check Version
	    # Whether or not to check for newer versions of DocPad
	    checkVersion: false  # default

	    # Welcome
	    # Whether or not we should display any custom welcome callbacks
	    welcome: false  # default

	    # Prompts
	    # Whether or not we should display any prompts
	    prompts: false  # default

	    # Helper Url
	    # Used for subscribing to newsletter, account information, and statistics etc
	    helperUrl: 'https://docpad.org/helper/'  # default

	    # Safe Mode
	    # If enabled, we will try our best to sandbox our template rendering so that they cannot modify things outside of them
	    # Not yet implemented
	    safeMode: false  # default

	    # Collections
	    # A hash of functions that create collections
	    collections: {}  # default

	    # Regenerate Every
	    # Performs a regenerate every x milliseconds, useful for always having the latest data
	    regenerateEvery: false  # default



	    # =================================
	    # Template Data
	    # These are variables that will be accessible via our templates
	    # To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ
	    templateData:
	        # Specify some site properties
	        site:
	            # The production url of our website
	            url: "http://altyncev.ru"
	            # Here are some old site urls that you would like to redirect from
	            oldUrls: [
	                'altyncev.herokuapp.com'
	            ]
	            # The default title of our website
	            title: "Vladislav Altyncev"
	            # The website description (for SEO)
	            description: """
	                Пишу о работе, жизни и всем что понравится. PS: А я чё? Я ничё. Другие вон чё, и ничё, а я чуть чё, и сразу вон чё!
	                """
	            # The website keywords (for SEO) separated by commas
	            keywords: """
	                верстка, it, web, life, повседневность, html, html5, css, css3, технологии, android, андроид, Пермь, жизнь, Алтынцев, Altyncev, npofopr, Sanoko, shadow.perm.ru
	                """
	            # The website author's name
	            author: "Vladislav Altyncev"
	            # The website author's email
	            email: "npofopr@gmail.com"



	        # -----------------------------
	        # Helper Functions

	        # Get the prepared site/document title
	        # Often we would like to specify particular formatting to our page's title
	        # we can apply that formatting here
	        getPreparedTitle: ->
	            # if we have a document title, then we should use that and suffix the site's title onto it
	            if @document.title
	                "#{@document.title} | #{@site.title}"
	            # if our document does not have it's own title, then we should just use the site's title
	            else
	                @site.title
	        # Get the prepared site/document description
	        getPreparedDescription: ->
	            # if we have a document description, then we should use that, otherwise use the site's description
	            @document.description or @site.description

	        # Get the prepared site/document keywords
	        getPreparedKeywords: ->
	            # Merge the document keywords with the site keywords
	            @site.keywords.concat(@document.keywords or []).join(', ')

	        getCuttedContent: (content) ->
	            i = content.search('<!-- Read more -->')
	            if i >= 0
	                content[0..i-1]
	            else
	                content

	        hasReadMore: (content) ->
	            content.search('<!-- Read more -->') >= 0

	        # Format the passed date, by default format like: Thursday, November 29 2012 3:53 PM
	        formatDate: (date,format='LL') ->
	            moment = require('moment')
	            moment.lang('ru')
	            moment(date).format(format)



	    # =================================
	    # Collections
	    # These are special collections that our website makes available to us
	    collections:
	        # For instance, this one will fetch in all documents that have pageOrder set within their meta data
	        pages: (database) ->
	            database.findAllLive({pageOrder: $exists: true}, [pageOrder:1,title:1])

	        # This one, will fetch in all documents that have the tag "post" specified in their meta data
	        posts: (database) ->
	            database.findAllLive({relativeOutDirPath:'posts'},[date:-1])

	        postsoleg: (database) ->
	            database.findAllLive({relativeOutDirPath:'postsoleg'},[date:-1])

	        #posts: ->
	        #    @getCollection("documents").findAllLive({relativeOutDirPath:'posts'}, [date:-1])

	        #postsoleg: ->
	        #    @getCollection("documents").findAllLive({relativeOutDirPath:'postsoleg'}, [date:-1])



	    # =================================
	    # Plugin Configuration

	    # Skip Unsupported Plugins
	    # Set to `false` to load all plugins whether or not they are compatible with our DocPad version or not
	    skipUnsupportedPlugins: true  # default

	    # Enable Unlisted Plugins
	    # Set to false to only enable plugins that have been explicity set to `true` inside `enabledPlugins`
	    enabledUnlistedPlugins: true  # default

	    # Enabled Plugins
	    enabledPlugins:  # example
	        # Disable the Pokemon Plugin
	        pokemon: false

	        # Enable the Digimon Plugin
	        # Unless, enableUnlistedPlugins is set to false, all plugins are enabled by default
	        digimon: true

	    # Configure Plugins
	    # Should contain the plugin short names on the left, and the configuration to pass the plugin on the right
	    plugins:

	        highlightjs:
	            aliases:
	                missinglanguage: 'alternativelanguage'

	        stylus:
	            useNib: false

	        #sass:
	        #    compass: true

	        sitemap:
	            cachetime: 600000
	            changefreq: 'weekly'
	            priority: 0.5



	    # =================================
	    # DocPad Events

	    # Here we can define handlers for events that DocPad fires
	    # You can find a full listing of events on the DocPad Wiki
	    events:

	        # Server Extend
	        # Used to add our own custom routes to the server before the docpad routes are added
	        serverExtend: (opts) ->
	            # Extract the server from the options
	            {server} = opts
	            docpad = @docpad

	            # As we are now running in an event,
	            # ensure we are using the latest copy of the docpad configuraiton
	            # and fetch our urls from it
	            latestConfig = docpad.getConfig()
	            oldUrls = latestConfig.templateData.site.oldUrls or []
	            newUrl = latestConfig.templateData.site.url

	            # Redirect any requests accessing one of our sites oldUrls to the new site url
	            server.use (req,res,next) ->
	                if req.headers.host in oldUrls
	                    res.redirect(newUrl+req.url, 301)
	                else
	                    next()


	}


	# Export our DocPad Configuration
	module.exports = docpadConfig

Извините, что такой большой) Но уж как получилось. На сайте у них есть [описание этого конфига](http://docpad.org/docs/config "configuration docpad").

После чего создаём файл `package.json`, в нем лежит вся информация о сайте и о том какие он "плагины использует".

### Мой package.json:

	{
	  "name": "altyncev.ru",
	  "author": "Vladislav Altyncev",
	  "description": "Пишу о работе, жизни и всем что понравится. PS: А я чё? Я ничё. Другие вон чё, и ничё, а я чуть чё, и сразу вон чё!",
	  "version": "0.0.1",
	  "bugs": {
	    "url": "https://github.com/npofopr/_altyncev/issues?status=new&status=open"
	  },
	  "repository" : {
	    "type" : "git",
	    "url" : "git@github.com:npofopr/_altyncev.git"
	    },
	  "engines": {
	    "node": "0.8.x",
	    "npm": "1.1.x"
	  },
	  "dependencies": {
	    "docpad": "6.x",
	    "docpad-plugin-cleanurls": "2.x",
	    "docpad-plugin-coffeescript": "2.x",
	    "docpad-plugin-eco": "2.x",
	    "docpad-plugin-less": "2.x",
	    "docpad-plugin-marked": "2.x",
	    "docpad-plugin-partials": "2.x",
	    "docpad-plugin-stylus": "2.x",
	    "docpad-plugin-text": "2.x",
	    "docpad-plugin-related": "2.x",
	    "docpad-plugin-paged": "x.x",
	    "docpad-plugin-sitemap": "x.x",
    	"docpad-plugin-highlightjs": "x.x",
    	"highlight.js": "x.x",
	    "moment": "x.x",
	    "express": "3.x",
	    "underscore": "1.4.0"
	  },
	  "devDependencies": {
	    "coffee-script": "1.4.x",
	    "docpad-plugin-livereload": "2.x"
	  },
	  "main": "node_modules/docpad/bin/docpad-server",
	  "scripts": {
	    "start": "node_modules/docpad/bin/docpad-server"
	  }
	}

После того как мы определили какие библиотеки нам нужны, в файле package.json, нам надо их установить.
**Установка библиотек** делается командой

	$ npm install

Пишем **для запуска генерирования**:

	docpad run

И ждём успешного окончания сборки) Если все ОК, то идём по адресу [http://localhost:9778](http://localhost:9778/) и наблюдаем наш сайт / блог. И да. Если при генерировании вылазят какие то ошибки, то обычно интуитивно понятно, что он не может сделать и как решить проблему.

Итак, сайт должен работать, теперь у нас есть папки:

* `node_modules` - где лежат установленные библиотеки
* `out` - тут собственно сам сгенерированный сайт.

Если у вас все заработало и вы смогли открыть страницу, то у вас наверняка сразу появится вопрос: "Какого черта? Это же совсем не блог, а какая то не понятная страница. Да ну его... Опять обманули... Shift+Del / rt -fm".

Ну дак давай те же создадим тогда наш блог) С выводом статей.

### Вывод статей

Создаём `layouts/post.html.eco` - здесь будет выводиться сама статья, не листинг, а конкретная, живая статья.

	---
	layout: 'defaultpost'
	---
	<div class="container well">
	  <div class="row">
	    <div class="span12">
	      <div class="post_date"><%= @formatDate(@document.date) %></div>
	      <ul class="breadcrumb">
	        <li><a href="../posts.html">Главная</a> <span class="divider">/</span></li>
	        <li class="active"><h1><%=@document.title%></h1></li>
	      </ul>
	      <div class="tags"><%=@document.tags%></div>

	      <hr/>
	      <div class="content_block">
	        <%-@content%>
	      </div>

	      <hr/>
	      <footer class="article-footer">
	        <% if  @document.relatedDocuments and @document.relatedDocuments.length: %>
	        <section id="related">
	            <h3>Похожие статьи</h3>
	            <nav class="linklist">
	              <% for document in @document.relatedDocuments: %>
	                <li><span><%= document.date.toShortDateString() %></span>
	                &raquo;
	                <a href="<%= document.url %>"><%= document.title %></a></li>
	              <% end %>
	            </nav>
	        </section>
	        <% end %>
	      </footer>

Скажу сразу, у меня в выводе статьи есть еще вывод Похожих статей, за похоже отвечает плагин `docpad-plugin-related`.

Далее создадим файл `documents/posts/post_1.html.md`. Это и будет **наш первый пост** (контент).

	---
    title: Lorem ipsum
    layout: post
    date: '2013-02-16'
	categories: 'life, личное, site, docpad, nodejs'
    ---

    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus sit amet laoreet sapien. Phasellus luctus blandit
    risus, non consequat justo adipiscing sodales. Integer nec
    tincidunt mauris. Maecenas accumsan augue ac neque varius
    posuere. In sed congue sem. Nulla facilisi. Integer egestas,
    magna at pellentesque accumsan, neque quam varius nunc, sed
    molestie lacus dolor at diam. Quisque ultricies aliquam leo,
    vitae dignissim urna pellentesque ac. Vestibulum viverra
    venenatis quam, eget dignissim tellus pharetra at. Morbi
    vehicula ipsum sit amet urna vehicula sodales. Proin ut
    tortor dui. Nam scelerisque eros enim, sit amet elementum
    turpis. Nunc sed viverra urna. Vestibulum bibendum semper
    varius. Nam aliquam mattis lorem.

Как видите, мы задали название (title) и используемый шаблон (post), также дату и тэги, что совсем не обязательно, но с ними гораздо лучше)

Там же можно прописать `draft: true` это будет значит, что это всего лишь черновик и публиковать статью не нужно.

Открываем `http://localhost:9778/posts/post_1` и смотрим, получилось ли у нас.

И да, можно использовать не только `.html.md`, но и просто `.html`. Что такое [md](http://ru.wikipedia.org/wiki/Markdown), я надеюсь вы знаете)

Настало время сделать нам сам **листинг статей**. Для этого в конфиге `docpad.coffee` объявляется коллекция `posts`

	# This one, will fetch in all documents that have the tag "post" specified in their meta data
	        posts: (database) ->
	            database.findAllLive({relativeOutDirPath:'posts'},[date:-1])

Дальше перепишем наш `documents/index.html.eco`:

	---
	layout: 'default'
	isPaged: true
	pageOrder: 0
	pagedCollection: 'posts'
	pageSize: 10
	---
	<div class="container well">
	    <div class="row">
	        <div class="span12">

	<% posts = @getCollection('posts') %>
	<% for i in [@document.page.startIdx...@document.page.endIdx]: %>
	    <% document = posts.at(i).toJSON() %>
	    <article class="post">
	        <p class="posts_date"><%= @formatDate(document.date) %></p>
	        <a href="<%= document.url %>"><h3><%= document.title %></h3></a>
	        <div class="post-content"><%- @getCuttedContent(String(document.contentRenderedWithoutLayouts)) %></div>
	        <% if @hasReadMore(String(document.contentRenderedWithoutLayouts)): %>
	        <div class="read_more"><a href="<%= document.url %>"><strong>Читать далее &rarr;</strong></a></div>
	        <% end %>
	    </article>
	<% end %>

	<% if @document.page.count > 1: %>
	<div class="pagination pull-right">
	    <ul>
	        <% if !@getDocument().hasPrevPage(): %>
	            <li class="disabled"><span>«</span></li>
	        <% else: %>
	            <li><a href="<%= @getDocument().getPrevPage() %>">«</a></li>
	        <% end %>
	        <% for num in [0..@document.page.count-1]: %>
	            <% if @document.page.number == num: %>
	                <li class="active"><span><%= num %></span></li>
	            <% else: %>
	                <li><a href="<%= @getDocument().getPagedUrl(num) %>"><%= num %></a></li>
	            <% end %>
	        <% end %>
	        <% if !@getDocument().hasNextPage(): %>
	            <li class="disabled"><span>»</span></li>
	        <% else: %>
	            <li><a href="<%= @getDocument().getNextPage() %>">»</a></li>
	        <% end %>
	    </ul>
	</div>
	<% end %>

	        </div>
	    </div>
	</div>

На моем сайте сделано чуть чуть по другому, блог у меня перенесен на отдельную страницу, а не на index.html, и шаблон называется чуть чуть по другому.

Теперь давайте разберемся, что же у нас написано там...

	---
	layout: 'default'
	isPaged: true
	pageOrder: 0
	pagedCollection: 'posts'
	pageSize: 10
	---

Тут думаю все понятно: указали какой шаблон, какую "коллекцию смотреть" и сколько выводить на странице статей. Кол-во статей нам нужно для пейджинга.

**Пейджинг** работает с помощью библиотеки `docpad-plugin-paged` и выводится:

	<% if @document.page.count > 1: %>
	<div class="pagination pull-right">
	    <ul>
	        <% if !@getDocument().hasPrevPage(): %>
	            <li class="disabled"><span>«</span></li>
	        <% else: %>
	            <li><a href="<%= @getDocument().getPrevPage() %>">«</a></li>
	        <% end %>
	        <% for num in [0..@document.page.count-1]: %>
	            <% if @document.page.number == num: %>
	                <li class="active"><span><%= num %></span></li>
	            <% else: %>
	                <li><a href="<%= @getDocument().getPagedUrl(num) %>"><%= num %></a></li>
	            <% end %>
	        <% end %>
	        <% if !@getDocument().hasNextPage(): %>
	            <li class="disabled"><span>»</span></li>
	        <% else: %>
	            <li><a href="<%= @getDocument().getNextPage() %>">»</a></li>
	        <% end %>
	    </ul>
	</div>
	<% end %>

Чтобы не водить всю статью целиком на страницу будем использовать "ReadMore - Читать далее". Для это в конфиге напишем

	getCuttedContent: (content) ->
	    i = content.search('<!-- Read more -->')
	    if i >= 0
	        content[0..i-1]
	    else
	        content

	hasReadMore: (content) ->
	    content.search('<!-- Read more -->') >= 0

Оно будет искать в тексте `<!-- Read more -->` и обрезать по этого "тегу".

Еще используется библиотека `moment`. Это все для того, чтобы даты выводились красиво, почитать о ней [можно здесь](http://momentjs.com/).

Для стилизации кода используется библиотека `highlight.js` и `docpad-plugin-robotskirt`. Второй для markdown вроде как. Делает много чего полезного. [Почитать про robotskirt можно тут](https://github.com/benmills/robotskirt). А [про highlight здесь](http://softwaremaniacs.org/soft/highlight/).

Под комментарии я использую [hypercomments](http://hypercomments.com), если вам больше нравится [Disqus](http://disqus.com/), это ваше право, можете использовать его.

Вы наверно заметили, что где то проскакивало слово **RSS**, таки да, у нас еще генерируется страница rss.
Создаём файл `documents/atom.xml.eco` и наполняем:

	<?xml version="1.0" encoding="utf-8"?>
	<feed xmlns="http://www.w3.org/2005/Atom">
	    <title><%= @site.title %></title>
	    <subtitle><%= @site.description %></subtitle>
	    <link href="http://altyncev.ru/atom.xml" rel="self" />
	    <link href="http://altyncev.ru" />
	    <updated><%= @site.date.toISOString() %></updated>
	    <id><%= @site.url %></id>
	    <author>
	        <name><%= @site.author %></name>
	        <email><%= @site.email %></email>
	    </author>

	    <% for document in @getCollection('posts').toJSON(): %>
	        <entry>
	            <title><%= document.title or document.name or @title.title %></title>
	            <link href="<%= @site.url %><%= document.url %>"/>
	            <updated><%= document.date.toISOString() %></updated>
	            <id><%= @site.url %><%= document.url %></id>
	            <content type="html">
	                <style type="text/css">
	                    img { max-width: 100%; }
	                </style>
	                <%= document.contentRenderedWithoutLayouts %>
	            </content>
	        </entry>
	    <% end %>
	</feed>

Теперь у нас есть настоящая RSS лента. PS: все как у взрослых.

Для больше "взрослости" и улучшения seo, хотя может оно и не нужно, сделаем авто генерацию **Карты сайта**. Для этого служит плагин `docpad-plugin-sitemap` и в файле конфига настраивается все таким образом:

	sitemap:
	    cachetime: 600000
	    changefreq: 'weekly'
	    priority: 0.5

Всё теперь можете посмотреть на свой sitemap.xml по http://адрес-сайта/sitemap.xml

И да, посмотрите на файл `.gitignore`, ну не выкладывать же нам в интернеты все полностью, так ведь?
Поэтому запретим ему:

	node_modules/*
	_out/*
	out
	node_modules
	.nodemonignore
	.DS_Store
	*.sublime-project
	*.sublime-workspace
	lib-cov
	*.seed
	*.log
	*.csv
	*.dat
	*.out
	*.pid
	*.gz

	pids
	logs
	results

	npm-debug.log

	.travis*

	env.coffee
	.env

Вроде бы на этом все. Большинство этого текста, сплошной копипаст, но со своими конфигами. Далее для вас, при изучении будет сайт [docpad](http://docpad.org) и чужой код :-)

Почти забыл про самое главное рассказать) Нам надо выложить наш сайтик в интернеты, не будем же мы вечно смотреть на `http://localhost:9778`.

### Выкладываем на хостинг

Для хостинга я использую [heroku](http://heroku.com/), идём по ссылки и регистриуемся.

Причины использования:

* Настройка хостинга максимально простая. Всего пара команд в консоли – и у вас есть стабильно работающий сайт. В дальнейшем выкладки сайта происходят в одну команду.
* Под сервером приложений привычный Ubuntu, поэтому если понадобится что-то помимо http-сервера — это легко будет ипользовать.
* Он бесплатен (для наших нужд).

После регистрации нам скажут:

![Heroku setup](/images/blog/heroku-start.png "Heroku setup")

Вам нужно сделать то, что на ней написано: [скачать и установить toolbelt](https://devcenter.heroku.com/articles/quickstart), после чего в консоли выполнить "heroku login".

Если по heroku возникнут вопросы, то [просим сюда](https://help.heroku.com).

Заливаем наш сайт на heroku (это обычный git, так что у вас не должно быть проблем.)

Как вы уже наверно прочитали выше, наше приложение создается командой:

	heroku apps:create <название вашего приложения>

Название должно быть уникально среди всех приложений heroku. Можно использовать, например, адрес вашего будущего сайта.

В ответ вы увидите что-то вроде этого:

	Enter your Heroku credentials.
	Email: example@gmail.com
	Password (typing will be hidden):
	Authentication successful.
	Creating altycev... done, stack is cedar
	http://altycev.herokuapp.com/ | git@heroku.com:altycev.git
	Git remote heroku added

Heroku поддерживает выкладку сайта простым пушем в его git-репозиторий. Набираем в консоли:

	git push heroku master

Если не вывалилось ошибок, значит вы всё сделали правильно и ваш сайт доступен по адресу <название вашего приложения>.herokuapp.com (пример — [http://altycev.herokuapp.com](http://altycev.herokuapp.com/)).

Далее нам надо настроить свой домен, т.е. настроить DNS'ы (какие именно можно [посмотреть здесь](https://devcenter.heroku.com/articles/custom-domains#naked-domains-mydomaincom)) и все остальное. [Подробности читаем здесь](http://habrahabr.ru/post/59270/).

После настройки домена идём в [настройки приложений](https://dashboard.heroku.com/apps/) на heroku, заходим в созданное приложение, раздел "Settings", в поле "Domains" вводим ваш будущий домен, нажимаем "Add". Готово.

![Heroku settings](/images/blog/heroku-settings.jpg "Heroku settings")

Собственно все. Домен мы вроде как настроили.

Теперь **вашими основными командами будут**:

* `git add .`
* `git commit -a -m "название коммита"`
* `git push heroku master` - заливаем на хероку
* `git push origin master` - заливаем на github

Всё. Теперь ваш сайт должен открывать по вашему адресу, тому, что вы настроили.
