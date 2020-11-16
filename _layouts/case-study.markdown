---
layout: default
---

{% assign topImage = page.['Case study top image'] %}
{% assign question = page.['Question'] %}
{% assign blocks = page.['Blocks'] %}
{% assign meta = page.['Meta'] %}

<div class="gs-case-study_top">
  <img src="{{topImage}}">
  <div class="gs-floating__headline">
    <div class="gs-container">
      <h2>{{page.title}}</h2>
    </div>
  </div>
</div>
<article class="article-wrapper">
  <div class="gs-container">
    <div class="article__innner_wrapper">
      <h3>{{question}}</h3>
    </div>
      {% for block in blocks %}
        {% if block.['Article text'] %}
          <div class="article__innner_wrapper">
            <p>{{block.['Article text'] | markdownify }}</p>
          </div>
        {% endif %}
        {% if block.['Video'] %}
          <div class="article__innner_wrapper">
            <div>{{block.['Video']}}</div>
          </div>
        {% endif %}
        {% if block.['Testimonial'] %}
        <div class="article__testimonial_wrapper">
          <blockquote>{{block.['Testimonial']}}</blockquote>
        </div>
        {% endif %}
      {% assign blockCarousel =  block.Carousel %}
      {% if block.Carousel %}
        {% include block-carousel.html blocks=blockCarousel %}
      {% endif %}
    {% endfor %}
  </div>
  <div class="gs__right-col lax"  data-lax-preset="eager">
    <div class="gs__meta-tags">
      {% for items in meta %}
        {% assign tags = items.Tags | split: ',' %}
        <ul class="gs-tags">
        {% for tag in tags %}
          <li><a href="/?{{tag | downcase | handle}}">{{tag}}</a></li>
        {% endfor %}
        </ul>
        {% assign where = items.['Where we worked'] | split: ',' %}
        <ul class="gs-where">
          <li><strong>Where we worked</strong></li>
        {% for place in where %}
          <li>{{place}}</li>
        {% endfor %}
        </ul>
        {% assign network = items.['The Network'] | split: ',' %}
        <ul class="gs-network">
          <li><strong>The Network</strong></li>
        {% for item in network %}
          <li>{{item}}</li>
        {% endfor %}
        </ul>
        {% assign data = items.['Data'] | split: ',' %}
        <ul class="gs-data">
        {% for item in data %}
          {% assign dataItem = item | split: '|' %}
            <li>
              {{dataItem[0]}}
              <cite>{{dataItem[1]}}</cite>
            </li>
        {% endfor %}
        </ul>
        {% assign video = items.['Video'] | split: ',' %}
        <ul class="gs-video">
        {% for item in video %}
          <li><a href="{{item}}"><span uk-icon="vimeo"></span></a></li>
        {% endfor %}
        </ul>
        {% assign hash = items.['Hashtag'] | split: ',' %}
        <ul class="gs-hash">
        {% for item in hash %}
          <li>{{item}}</li>
        {% endfor %}
        </ul>
    {% endfor %}
    </div>
  </div>
</article>
{% include tg-footer.html %}
{% include tg-footer-base.html %}
