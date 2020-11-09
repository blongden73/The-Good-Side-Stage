---
layout: default
---

{% assign topImage = page.['Case study top image'] %}
{% assign question = page.['Question'] %}
{% assign blocks = page.['Blocks'] %}

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
      <div class="article__innner_wrapper">
        <p>{{block.['Article text']}}</p>
      </div>
      <div class="article__innner_wrapper">
        <div>{{block.['Video']}}</div>
      </div>
      <div class="article__testimonial_wrapper">
        <blockquote>{{block.['Testimonial']}}</blockquote>
      </div>
      {% assign blockCarousel =  block.Carousel %}
      {% if block.Carousel %}
        {% include block-carousel.html blocks=blockCarousel %}
      {% endif %}
    {% endfor %}
  </div>
</article>
<div class="tg-footer">

</div>
