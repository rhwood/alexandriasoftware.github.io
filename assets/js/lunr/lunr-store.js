---
layout: none
---

var store = [
  {%- assign pages = site.pages | where_exp:'page','page.search == true' -%}
  {%- for c in site.collections -%}
    {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%}
    {%- assign pages = pages | concat: docs -%}
  {%- endfor -%}
  {%- for page in pages -%}
    {%- if page.header.teaser -%}
      {%- capture teaser -%}{{ page.header.teaser }}{%- endcapture -%}
    {%- else -%}
      {%- assign teaser = site.teaser -%}
    {%- endif -%}
    {
      "title": {{ page.title | jsonify }},
      "excerpt":
        {%- if site.search_full_content == true -%}
          {{ page.content | newline_to_br |
            replace:"<br />", " " |
            replace:"</p>", " " |
            replace:"</h1>", " " |
            replace:"</h2>", " " |
            replace:"</h3>", " " |
            replace:"</h4>", " " |
            replace:"</h5>", " " |
            replace:"</h6>", " "|
          strip_html | strip_newlines | jsonify }},
        {%- else -%}
          {{ page.content | newline_to_br |
            replace:"<br />", " " |
            replace:"</p>", " " |
            replace:"</h1>", " " |
            replace:"</h2>", " " |
            replace:"</h3>", " " |
            replace:"</h4>", " " |
            replace:"</h5>", " " |
            replace:"</h6>", " "|
          strip_html | strip_newlines | truncatewords: 50 | jsonify }},
        {%- endif -%}
      "categories": {{ page.categories | jsonify }},
      "tags": {{ page.tags | jsonify }},
      "url": {{ page.url | absolute_url | jsonify }},
      "teaser": {{ teaser | absolute_url | jsonify }}
    }{%- unless forloop.last -%},{%- endunless -%}
  {%- endfor -%}]
