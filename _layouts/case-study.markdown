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
    <h3>{{question}}</h3>
    {% for block in blocks %}
      <p>{{block.['Article text']}}</p>
      <div>{{block.['Video']}}</div>
      <div>{{block.['Testimonial']}}</div>
    {% endfor %}
  </div>
</article>
