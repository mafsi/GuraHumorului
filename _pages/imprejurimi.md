---
layout: page
title: Împrejurimi
image: imprejurimi-bucovina.jpg
permalink: /imprejurimi/
---

## Împrejurimile Gurii Humorului

Descoperiți comoara Bucovinei! Gura Humorului este punctul ideal de plecare pentru explorarea celor mai frumoase atracții din această zonă magică a României.

---

## ⛪ Monumente Istorice UNESCO

{% assign atractii_posts = site.posts | where_exp: "post", "post.tags contains 'atractii'" %}
{% if atractii_posts.size > 0 %}
<div class="posts-grid">
{% for post in atractii_posts %}
  <article class="post-card">
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    <a href="{{ post.url | prepend: site.baseurl }}" class="read-more">Citește mai mult →</a>
  </article>
{% endfor %}
</div>
{% else %}
<div class="atractii-grid">
  <div class="atractie">
    <h3>🏛️ Mănăstirea Moldovița</h3>
    <p><strong>Distanța:</strong> ~25 km | <strong>Timp:</strong> 30 min</p>
    <p>Celebră pentru frescele exterioare cu "Asediul Constantinopolului" și albastrul intens moldovenesc.</p>
  </div>
  
  <div class="atractie">
    <h3>⛪ Mănăstirea Sucevița</h3>
    <p><strong>Distanța:</strong> ~35 km | <strong>Timp:</strong> 45 min</p>
    <p>"Capodopera picturii medievale moldovenești" cu celebra "Scara Virtuților".</p>
  </div>
  
  <div class="atractie">
    <h3>🏰 Mănăstirea Putna</h3>
    <p><strong>Distanța:</strong> ~45 km | <strong>Timp:</strong> 1h</p>
    <p>Necropola domnilor Moldovei, mormîntul lui Ștefan cel Mare și Sfînt.</p>
  </div>
  
  <div class="atractie">
    <h3>⛪ Mănăstirea Bogdana</h3>
    <p><strong>Distanța:</strong> ~50 km | <strong>Timp:</strong> 1h</p>
    <p>Prima ctitorie a lui Ștefan cel Mare, construită în cinstea primei sale victorii.</p>
  </div>
  
  <div class="atractie">
    <h3>🏛️ Mănăstirea Dragomirna</h3>
    <p><strong>Distanța:</strong> ~40 km | <strong>Timp:</strong> 50 min</p>
    <p>Cea mai înaltă biserică din Moldova, cu arhitectura sa unică și impresionantă.</p>
  </div>
</div>
{% endif %}

---

## 🌲 Frumusețile Naturale

{% assign natura_posts = site.posts | where_exp: "post", "post.tags contains 'natura'" %}
{% if natura_posts.size > 0 %}
<div class="posts-grid">
{% for post in natura_posts %}
  <article class="post-card">
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    <a href="{{ post.url | prepend: site.baseurl }}" class="read-more">Citește mai mult →</a>
  </article>
{% endfor %}
</div>
{% else %}
<div class="natura-sectiuni">
  <div class="natura-categorie">
    <h3>🏔️ Rezervații Geologice</h3>
    <ul>
      <li><strong>Piatra Pinului</strong> - formațiune geologică spectaculoasă</li>
      <li><strong>Piatra Șoimului</strong> - punct de belvedere natural</li>
      <li><strong>Cheile Zugrenilor</strong> - canion natural</li>
    </ul>
  </div>
  
  <div class="natura-categorie">
    <h3>🌿 Rezervații Forestiere</h3>
    <ul>
      <li><strong>Codrul Secular Slătioara</strong> - pădure virgină</li>
      <li><strong>Parcul Natural Călimani</strong> - diversitate biologică</li>
      <li><strong>Rezervația Rarău</strong> - floră alpină unică</li>
    </ul>
  </div>
  
  <div class="natura-categorie">
    <h3>🐟 Atracții Speciale</h3>
    <ul>
      <li><strong>Păstrăvăria din Câmpulung</strong> - pescuit sportiv</li>
      <li><strong>Salina Cacica</strong> - tunel de sare cu efecte terapeutice</li>
      <li><strong>Lacul Bolătău</strong> - lac glaciar de munte</li>
    </ul>
  </div>
</div>
{% endif %}

---

## 🎨 Meșteșuguri și Tradiții

{% assign cultura_posts = site.posts | where_exp: "post", "post.tags contains 'cultura'" %}
{% if cultura_posts.size > 0 %}
<div class="posts-grid">
{% for post in cultura_posts %}
  <article class="post-card">
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    <a href="{{ post.url | prepend: site.baseurl }}" class="read-more">Citește mai mult →</a>
  </article>
{% endfor %}
</div>
{% else %}
<div class="traditii-grid">
  <div class="traditie">
    <h3>🏺 Ceramica Neagră de Marginea</h3>
    <p><strong>Distanța:</strong> ~30 km</p>
    <p>Arta tradițională unică în lume - ceramică neagră lucrată manual după tehnici seculare.</p>
  </div>
  
  <div class="traditie">
    <h3>🥚 Încondeieratul Ouălor</h3>
    <p><strong>Ciocănești, Moldovița</strong></p>
    <p>Meștesugul tradițional bucovinean de decorare a ouălor cu motive ancestrale.</p>
  </div>
  
  <div class="traditie">
    <h3>🧵 Covoarele Moldovenești</h3>
    <p><strong>Rădăuți, Suceava</strong></p>
    <p>Țesături tradiționale cu motive specifice Bucovinei, lucrate pe război de țesut.</p>
  </div>
</div>
{% endif %}

---

## 🗺️ Trasee Turistice Recomandate

{% assign istorie_posts = site.posts | where_exp: "post", "post.tags contains 'istorie'" %}
{% if istorie_posts.size > 0 %}
<div class="posts-grid">
{% for post in istorie_posts %}
  <article class="post-card">
    <h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    <a href="{{ post.url | prepend: site.baseurl }}" class="read-more">Citește mai mult →</a>
  </article>
{% endfor %}
</div>
{% else %}
<div class="trasee-container">
  <div class="traseu">
    <h3>📍 Traseul Mănăstirilor (2 zile)</h3>
    <p><strong>Ziua 1:</strong> Voroneț → Humor → Moldovița</p>
    <p><strong>Ziua 2:</strong> Sucevița → Putna → Dragomirna</p>
  </div>
  
  <div class="traseu">
    <h3>🌲 Traseul Naturii (1-2 zile)</h3>
    <p>Piatra Pinului → Salina Cacica → Păstrăvăria Câmpulung → Cheile Zugrenilor</p>
  </div>
  
  <div class="traseu">
    <h3>🎨 Traseul Meșteșugurilor (1 zi)</h3>
    <p>Marginea (ceramică neagră) → Ciocănești (ouă încondeiate) → Rădăuți (covoare)</p>
  </div>
</div>
{% endif %}

---

<div class="info-utila">
  <h3>ℹ️ Informații Utile</h3>
  <ul>
    <li>🕐 <strong>Program vizitare mănăstiri:</strong> 8:00-19:00 (vara), 8:00-17:00 (iarna)</li>
    <li>💰 <strong>Taxă intrare:</strong> Majoritatea mănăstirilor - intrare liberă</li>
    <li>📷 <strong>Fotografiere:</strong> Permisă în exterior, restricții în interior</li>
    <li>👗 <strong>Dress code:</strong> Vestimentație decentă obligatorie</li>
  </ul>
</div>

<style>
.atractii-grid, .natura-sectiuni, .traditii-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.atractie, .natura-categorie, .traditie {
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: #f8f9fa;
}

.atractie h3, .traditie h3 {
  color: var(--primary-color);
  margin-bottom: 10px;
}

.trasee-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.traseu {
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.info-utila {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
}

.info-utila ul {
  margin: 10px 0;
}
</style>
