---
title: "Sublime Text 3 плагины для фронтэнд-разработчика"
# description: ""
tags: ["soft", "sublime", "front-end"]
categories: ["web"]
date: "2015-11-19"
---

Решил написать свой список плагинов, которые использую в редакторе. Может полезно будет кому нибудь.
<!-- Read more -->

[Package Control](https://packagecontrol.io/installation) всея всего.

[AdvancedNewFile](https://packagecontrol.io/packages/AdvancedNewFile) - Этот плагин позволяет быстрее создавать файлы в проекте. Возможно он уже есть изначально, во всяком случае, настроек для него я никаких не вносил.

[Alignment](https://packagecontrol.io/packages/Alignment) - Для выравнивания

[AutoFileName](https://packagecontrol.io/packages/AutoFileName) - Автозаполнение имени файлов.

[Better CoffeeScript](https://packagecontrol.io/packages/Better%20CoffeeScript) - Устанавливал только для подсветки синтаксиса. Но вообще умеет много чего.

[Bootstrap 3 Jade Snippets](https://packagecontrol.io/packages/Bootstrap%203%20Jade%20Snippets) - Может пригодится, тем кто использует Jade, но насколько помню, плагин плохо работал, могу ошибаться.

[Bootstrap 3 Snippets](https://packagecontrol.io/packages/Bootstrap%203%20Snippets) - Незаменимая вещь, кто часто пользуется фреймворком.

[BracketHighlighter](https://packagecontrol.io/packages/BracketHighlighter) - Добавляет значки скобочек, тегов и т.д.) Тут лучше скриншот посмотреть:

![BracketHighlighter](https://packagecontrol.io/readmes/img/2c23129492d6d74b8f9139711578e9ad0d1115a0.png "BracketHighlighter")

Color Highlighter

Comment-Snippets

CSS Format

CSS Media Query Snippets

CSS Snippets

CSS3

EasyMotion

EditorConfig

Emmet

FileDiffs

Git

GitGutter

Gitignore

GitSavvy

HTML5

HTMLAttributes

HTMLBeautify

Icon Fonts

jQuery

JSON Reindent

JSONLint

Material Theme

[memTask](https://github.com/max-mykhailenko/memTask) - Учёт времени.

Modific

Monokai Extended

Monokai JSON+

Path Tools

Placeholders

Pretty JSON

PureCSS

SideBarEnhancements

SideBarFolders

SideBarGit

Stylus

SublimeLinter-contrib-htmlhint

SublimeLinter-csslint

SVG Icons

SVG-Snippets

Syntax Highlighting for PostCSS

TabsExtra

Text Pastry

Themr

Zen Tabs


## Мой конфиг:

    {
        "always_show_minimap_viewport": true,
        "bold_folder_labels": true,
        "caret_extra_width": 2,
        "caret_style": "solid",
        "color_scheme": "Packages/User/SublimeLinter/Monokai Extended Bright (SL).tmTheme",
        "copy_with_empty_selection": false,
        "detect_indentation": true,
        "detect_slow_plugins": false,
        "drag_text": false,
        "draw_minimap_border": true,
        "draw_shadows": false,
        "enable_tab_scrolling": false,
        "fade_fold_buttons": false,
        "fallback_encoding": "Cyrillic (Windows 1251)",
        "find_selected_text": true,
        "findreplace_small": true,
        "flatland_sidebar_tree_small": true,
        "flatland_square_tabs": true,
        "font_face": "Consolas",
        "font_options":
        [
            "subpixel_antialias",
            "no_round"
        ],
        "font_size": 11,
        "git_gutter_live_mode": true,
        "high_visibility_color": "__bracket__",
        "high_visibility_style": "outline",
        "highlight_line": true,
        "highlight_modified_tabs": true,
        "ignored_packages":
        [
            "Emmet Css Snippets",
            "Markdown",
            "Path Tools",
            "Vintage"
        ],
        "itg_scrollbar_small": true,
        "itg_sidebar_tree_small": true,
        "itg_small_tabs": true,
        "line_padding_bottom": 1,
        "line_padding_top": 1,
        "match_brackets_content": false,
        "match_selection": false,
        "match_tags": false,
        "material_theme_disable_fileicons": false,
        "material_theme_disable_folder_animation": true,
        "material_theme_small_statusbar": true,
        "material_theme_small_tab": true,
        "open_files_in_new_window": false,
        "overlay_scroll_bars": "enabled",
        "preview_on_click": true,
        "remember_open_files": true,
        "scroll_past_end": true,
        "scroll_speed": 5.0,
        "show_encoding": true,
        "show_full_path": true,
        "sidebar_small": true,
        "soda_classic_tabs": true,
        "soda_folder_icons": true,
        "tab_height_short": true,
        "tab_size": 4,
        "tabs_small": true,
        "theme": "Material-Theme.sublime-theme",
        "translate_tabs_to_spaces": false,
        "trim_trailing_white_space_on_save": true,
        "use_simple_full_screen": true,
        "wide_caret": true,
        "word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?",
        "word_wrap": true
    }
