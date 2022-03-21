---
title: Design system kickoff (interface inventory)
format: Remote
description:
  Create an interface inventory of your digital product, and align with your
  team on how to prioritize refactoring using a design systems methodology.
tag: /assets/images/resources/workshops/design-system-kickoff-interface-inventory/scissors.svg
og:
  image: /assets/images/resources/workshops/design-system-kickoff-interface-inventory/og-image.png
topics:
  - heading: People, process, and tools
    image: /assets/images/resources/workshops/design-system-kickoff-interface-inventory/compass.svg
    text: >
      Establish which core features in the user journey should be prioritized, clarify
      ownership and team communication, agree on criteria and a toolset.
  - heading: UI patterns
    image: /assets/images/resources/workshops/design-system-kickoff-interface-inventory/map.svg
    text: >
      Go over different user interface pattern types: functional, perceptual,
      platform-specific, domain-specific, persuasive.
  - heading: Hands-on work
    image: /assets/images/resources/workshops/design-system-kickoff-interface-inventory/scissors.svg
    text: >
      Divide and categorize screenshots of core features of your web interface by
      functional categories (e.g. buttons, forms, navigation, typography, lists) and
      intended use.
  - heading: Nomenclature
    image: /assets/images/resources/workshops/design-system-kickoff-interface-inventory/tag.svg
    text: >
      Discuss naming as a shared language and mental model. We will go over naming
      conventions and practice naming interface components.
  - heading: Share and learn
    image: /assets/images/resources/workshops/design-system-kickoff-interface-inventory/coffee.svg
    text: >
      Share and discuss our findings and rationale, as well as which patterns we would
      keep, merge, and discard.
  - heading: Next steps
    image: /assets/images/resources/workshops/design-system-kickoff-interface-inventory/check.svg
    text: >
      We'll share crucial steps that help us succeed when transitioning an
      organization to a design system.
leads:
  - name: Linda Guerrisi
    title: Director of Product Design
    image: /assets/images/authors/lindaguerrisi.jpg
---

{% from "image-with-text.njk" import imageWithText %}
{% from "card-list.njk" import cardList %}

{%- set 'contentBlocks' = [{
  "title": "Workshop overview",
  "text": "One of the first steps in creating a design system is to conduct an interface
inventory. An interface inventory gives us a categorized overview of which
components make up our digital product.",
  "image": "/assets/images/photos/scott-graham-5fNmWej4tAA-unsplash.jpg",
  "alt": "People gathered around a laptop, only their hands are visible",
  "loading": "lazy"
}] -%}
{{- imageWithText('left', 'yellow', 'top', contentBlocks) -}}

{{- cardList(topics) -}}

<!-- main content -->

## Benefits of an interface inventory:

- Gain clarity regarding which design components make up a digital product.
- Help us analyze inconsistencies between them.
- Gain buy-in from stakeholders to establish a design system.
- Start a conversation with your team on how to refactor design with a
  pattern-based approach.
- Use it as a blueprint for a pattern library.

Interface inventories are a key first step to create alignment and advocate
transitioning to using design patterns in an organization. To get the most out
of this workshop, bring in a cross-disciplinary team – we encourage people from
every department that builds your product to join. Designers, developers,
project managers, business owners, QA – are all welcome.
