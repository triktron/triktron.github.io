---
layout: page
permalink: /blog/tags/
---


<h3>  {{ page.title }} </h3>

<div id="tags">
{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

<!-- {% for category in site.tags %}
  <div class="category-box" >
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <h4 class="category-head"><a href="{{ site.baseurl }}/blog/categories/{{ category_name }}">{{ category_name }}</a></h4>
    <a name="{{ category_name | slugize }}"></a>
     {% for post in site.categories[category_name] %}
    <article class="center">
      <h6 ><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h6>
    </article>


    {% endfor %}

  </div>
{% endfor %} -->
</div>
