---
layout: page
title: Împrejurimi
image: imprejurimi.jpg
permalink: /imprejurimi/
atractii:
- title: "🏛️ Mănăstirea Moldovița"
  distance: "~25 km"
  time: "30 min"
  description: "Celebră pentru frescele exterioare cu \"Asediul Constantinopolului\" și albastrul intens moldovenesc."
  url: "/manastirea-moldovita"
- title: "⛪ Mănăstirea Sucevița"
  distance: "~35 km"
  time: "45 min"
  description: "\"Capodopera picturii medievale moldovenești\" cu celebra \"Scara Virtuților\"."
  url: "/manastirea-sucevita"
- title: "🏰 Mănăstirea Putna"
  distance: "~45 km"
  time: "1h"
  description: "Necropola domnilor Moldovei, mormîntul lui Ștefan cel Mare și Sfînt."
  url: "/manastirea-putna"
- title: "⛪ Mănăstirea Bogdana"
  distance: "~50 km"
  time: "1h"
  description: "Prima ctitorie a lui Ștefan cel Mare, construită în cinstea primei sale victorii."
  url: "/manastirea-bogdana"
- title: "🏛️ Mănăstirea Dragomirna"
  distance: "~40 km"
  time: "50 min"
  description: "Cea mai înaltă biserică din Moldova, cu arhitectura sa unică și impresionantă."
  url: "/manastirea-dragomirna"
natura:
- title: "🏔️ Rezervații Geologice"
  items:
  - "Piatra Pinului - formațiune geologică spectaculoasă"
  - "Piatra Șoimului - punct de belvedere natural"
  - "Cheile Zugrenilor - canion natural"
- title: "🌿 Rezervații Forestiere"
  items:
  - "Codrul Secular Slătioara - pădure virgină"
  - "Parcul Natural Călimani - diversitate biologică"
  - "Rezervația Rarău - floră alpină unică"
- title: "🐟 Atracții Speciale"
  items:
  - "Păstrăvăria din Câmpulung - pescuit sportiv"
  - "Salina Cacica - tunel de sare cu efecte terapeutice"
  - "Lacul Bolătău - lac glaciar de munte"
traditii:
- title: "🏺 Ceramica Neagră de Marginea"
  label: "Distanța:"
  info: "~30 km"
  description: "Arta tradițională unică în lume - ceramică neagră lucrată manual după tehnici seculare."
  url: "/ceramica-neagra-marginea"
- title: "🥚 Încondeieratul Ouălor"
  label: ""
  info: "Ciocănești, Moldovița"
  description: "Meștesugul tradițional bucovinean de decorare a ouălor cu motive ancestrale."
  url: "/incondeiatul-oualor"
- title: "🧵 Covoarele Moldovenești"
  label: ""
  info: "Rădăuți, Suceava"
  description: "Țesături tradiționale cu motive specifice Bucovinei, lucrate pe război de țesut."
  url: "/covoarele-moldovenesti"
trasee:
- title: "📍 Traseul Mănăstirilor (2 zile)"
  content: "**Ziua 1:** Voroneț → Humor → Moldovița\n**Ziua 2:** Sucevița → Putna → Dragomirna"
  url: "/traseul-manastirilor"
- title: "🌲 Traseul Naturii (1-2 zile)"
  content: "Piatra Pinului → Salina Cacica → Păstrăvăria Câmpulung → Cheile Zugrenilor"
  url: "/traseul-naturii"
- title: "🎨 Traseul Meșteșugurilor (1 zi)"
  content: "Marginea (ceramică neagră) → Ciocănești (ouă încondeiate) → Rădăuți (covoare)"
  url: "/traseul-mestesugurilor"
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
{% for atractie in page.atractii %}
  <div class="atractie">
    <h3>{{ atractie.title }}</h3>
    <p><strong>Distanța:</strong> {{ atractie.distance }} | <strong>Timp:</strong> {{ atractie.time }}</p>
    <p>{{ atractie.description }}</p>
    <a href="{{ atractie.url | prepend: site.baseurl }}" class="read-more">Citeste tot →</a>
  </div>
{% endfor %}
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
{% for categorie in page.natura %}
  <div class="natura-categorie">
    <h3>{{ categorie.title }}</h3>
    <ul>
    {% for item in categorie.items %}
      <li>{{ item }}</li>
    {% endfor %}
    </ul>
  </div>
{% endfor %}
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
{% for traditie in page.traditii %}
  <div class="traditie">
    <h3>{{ traditie.title }}</h3>
    <p><strong>{{ traditie.label }} {{ traditie.info }}</strong></p>
    <p>{{ traditie.description }}</p>
    <a href="{{ traditie.url | prepend: site.baseurl }}" class="read-more">Citeste tot →</a>
  </div>
{% endfor %}
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
{% for traseu in page.trasee %}
  <div class="traseu">
    <h3>{{ traseu.title }}</h3>
    {{ traseu.content | markdownify }}
    <a href="{{ traseu.url | prepend: site.baseurl }}" class="read-more">Citeste tot →</a>
  </div>
{% endfor %}
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
.posts-grid, .atractii-grid, .natura-sectiuni, .traditii-grid {
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
