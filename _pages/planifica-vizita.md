---
layout: page
title: Planifică-ți vizita
image: planifica-vizita.jpg
permalink: /planifica-vizita/
---

## Planifică-ți vizita în Gura Humorului

Bun venit în Gura Humorului - poarta de intrare către comoara spirituală și culturală a Bucovinei! Aici găsiți toate informațiile necesare pentru o vizită de neuitat.

---

## <i class="fas fa-heart"></i> 5 Motive să vii la Gura Humorului

{% assign turism_posts = site.posts | where_exp: "post", "post.tags contains 'turism'" %}
{% if turism_posts.size > 0 %}
<div class="posts-grid">
{% for post in turism_posts limit: 5 %}
  <article class="post-card">
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    <a href="{{ post.url | prepend: site.baseurl }}" class="read-more">Citește mai mult →</a>
  </article>
{% endfor %}
</div>
{% else %}
<p><em>Articolele despre atracțiile turistice vor fi adăugate în curând...</em></p>
{% endif %}

---

## 🗺️ Ghid Practic

{% assign ghid_posts = site.posts | where_exp: "post", "post.tags contains 'ghid-practic'" %}
{% if ghid_posts.size > 0 %}
<div class="posts-grid">
{% for post in ghid_posts %}
  <article class="post-card">
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    <a href="{{ post.url | prepend: site.baseurl }}" class="read-more">Citește mai mult →</a>
  </article>
{% endfor %}
</div>
{% else %}
<div class="ghid-sectiuni">
  <h3>Informații practice (în curând):</h3>
  <ul>
    <li><i class="fa-solid fa-compass"></i><strong>Cum ajungi în Gura Humorului</strong> - cu mașina, trenul sau avionul</li>
    <li>🍽️ <strong>Unde mănînci</strong> - restaurante și localuri recomandate</li>
    <li><i class="fa-solid fa-house-chimney-user"></i><strong>Unde te cazezi</strong> - pensiuni, hoteluri și case de oaspeți</li>
    <li>📞 <strong>Informații utile</strong> - contacte, servicii, urgențe</li>
  </ul>
</div>
{% endif %}

---

## 🎭 Evenimente

{% assign evenimente_posts = site.posts | where_exp: "post", "post.tags contains 'evenimente'" %}
{% if evenimente_posts.size > 0 %}
<div class="posts-grid">
{% for post in evenimente_posts %}
  <article class="post-card">
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    <a href="{{ post.url | prepend: site.baseurl }}" class="read-more">Citește mai mult →</a>
  </article>
{% endfor %}
</div>
{% else %}
<div class="evenimente-info">
  <h3>Evenimente și festivaluri (în curând):</h3>
  <ul>
    <li>🎪 <strong>Zilele Humorului</strong> - festivalul anual al orașului</li>
    <li>🍂 <strong>Toamna la Voroneț</strong> - evenimente culturale de toamnă</li>
    <li>⛪ <strong>Evenimente religioase</strong> - pelerinaje și sărbători</li>
  </ul>
</div>
{% endif %}

---

<div class="contact-rapid">
  <h3>📱 Contact rapid</h3>
  <p><strong>Prefix:</strong> 0230 | <strong>Cod poștal:</strong> 725300</p>
  <p><strong>Urgențe:</strong> 112 | <strong>Taxi:</strong> 0230.233.333</p>
</div>
