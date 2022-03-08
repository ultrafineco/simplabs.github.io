---
layout: case-study
company: Qonto
title: Co-Engineering the Future of Banking for SMEs with Qonto | Work
displayTitle: "A helping hand for a <em>visionary</em> fintech startup"
description: Qonto is the leading neobank for SMEs and freelancers in Europe. Mainmatter worked with their web frontend team to boost their productivity, establish Ember.js best practices, and ensure long-term success.
tagline: <p>Qonto is a European B2B Neobank for freelancers and SMEs. They provide over 75,000 clients with banking services, virtual and physical credit cards, and tools for accounting and expense management. In 2019 alone, they processed €10 billion in transactions.</p><p>The fintech company was rated among the five hottest startups in Europe by The Next Web. They’ve raised more than €150 million since they entered the market in 2017.</p>
hero:
  image: "/assets/images/work/qonto.jpg"
  imageAlt: "Woman holds a credit card while using the Qonto web application"
---

{% from "quote.njk" import quote %}
{% from "rte-image-text.njk" import rteImageText %}
{% from "split-quote.njk" import splitQuote %}

## Sustainable growth with an ambitious timeline

Qonto’s frontend engineering team needed to rapidly scale their operations after the company raised its series B funding. Faced with a number of impediments that were slowing down their workflow, Qonto opted to bring in Mainmatter’s senior experts to help them release new features quickly while laying the foundations for sustainable growth at an accelerated pace.

{% include 'content/secondary-feature-ember.njk' %}

## Getting to the heart of the matter

We met with Qonto's team in their office in Paris to kick off the collaboration. We sat down with the relevant stakeholders to develop an understanding of their business, their technology, infrastructure, tools and processes. We reviewed the existing Ember.js codebase and interviewed the frontend team to understand their main challenges. At the end of this process, we had a clear understanding of the status quo as well as the main obstacles the team was facing.

{% set text = "simplabs are well known as the Ember.js experts and they absolutely live up to the expectations. They had an immediate as well as significant positive impact on both our velocity and quality of output." %}
{% set source = "Marc-Antoine Lacroix, Qonto CEO" %}
{{ quote('aqua', text, source, false) }}

## Clearing the roadblocks

In the first few weeks of the project, we migrated the application away from a legacy template language and moved it back on to standard Ember.js patterns. We cut CI build times in half, and fixed instabilities that were causing flaky test results. These changes immediately improved the team’s productivity.

We then helped the team ship critical features on ambitious timelines. Our experts spearheaded these initiatives, working closely with Qonto's in-house engineers to ensure that they would be able to take ownership with confidence after our collaboration was complete.

We evolved the application’s architecture and engineering infrastructure to accelerate development while maintaining a high level of quality. We set up automated visual regression testing to prevent unintended changes to the product UI being released to production.

{% set text %}

We put a system in place for tracking the application's bundle size to prevent size and performance regressions. This led to a 25% reduction of the application's main bundle over two months.

Lastly, we invested time and effort in setting up an advanced linting system to identify bad patterns, unused translation strings, and other common pitfalls.

{% endset %}

{% set 'content' = {
  "text": text,
  "image": "/assets/images/photos/qonto-pic1.png",
  "alt": "Qonto app mockup of the transaction export process."
} %}
{{ rteImageText(content) }}

## Empowering the Team

![Qonto dashboard mockup](/assets/images/photos/qonto-pic2.png)

Our work with Qonto was highly collaborative. Beyond the product design and development work itself, we also conducted workshops and pair-programming sessions with their engineers to help them develop a deeper understanding of their tools. We set them up for success by sharing our expertise so they could carry on with confidence.

{% set text = "Working with simplabs’ experts has always been a good experience. We can really feel that they have mastery on many topics, and knowledge about complex technical problems. I’ve learned so much, especially during our pairing sessions, and it allows me to improve my technical skillsand growth as an engineer." %}
{% set source = "Alexandre Monjol, Frontend Engineer at Qonto" %}
{% set image = "/assets/images/photos/qonto-alexander.jpg" %}
{{ quote('aqua', text, source, image) }}
