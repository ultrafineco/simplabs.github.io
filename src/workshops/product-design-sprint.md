---
title: Product design sprint
duration: 1–2 weeks
format: Remote
description:
  "Using Google's framework, we will answer your most pressing business
  questions through design, prototyping, and testing with real users."
tagline: '<p>Product design sprints are a step-by-step process for product design. They were originally developed by Google, and are now used in top companies all over the world. Ideas are tested and validated with real users in just five days.</p>'
tag: /assets/images/resources/workshops/product-design-sprint/fast-forward.svg
og:
  image: /assets/images/resources/workshops/product-design-sprint/og-image.png
topics:
  - heading:  "Day 1: Unpack"
    image: /assets/images/resources/workshops/product-design-sprint/box.svg
    text: >
      Create a common understanding of the problem and set measurable goals to focus
      on solving throughout the sprint.
  - heading:  "Day 2: Sketch"
    image: /assets/images/resources/workshops/product-design-sprint/edit.svg
    text: >
      Derive inspiration from existing solutions understanding why they work.
      Following that, we will sketch various strategies of our own.
  - heading:  "Day 3: Decide"
    image: /assets/images/resources/workshops/product-design-sprint/check.svg
    text: >
      Go through possible solutions and decide which are is most likely to solve our
      long-term goal.
  - heading:  "Day 4: Prototype"
    image: /assets/images/resources/workshops/product-design-sprint/smartphone.svg
    text: >
      Create a realistic working prototype in just one day! At the same time, we
      prepare for user testing the next day.
  - heading:  "Day 5: Test"
    image: /assets/images/resources/workshops/product-design-sprint/mic.svg
    text: >
      Receive feedback on the prototype from real customers and learn what’s working
      and what’s not.  Following that, we plan our next steps.
leads:
  - name: Linda Guerrisi
    title: Director of Product Design
    image: /assets/images/authors/lindaguerrisi.jpg
---
{% from "image-with-text.njk" import imageWithText %}
{% from "card-list.njk" import cardList %}
{% from "quote.njk" import quote %}

{%- set 'contentBlocks' = [{
  "title": "Workshop overview",
  "text": "Product design sprints are a step-by-step process for product design. They were
originally developed by Google, and are now used in top companies all over the
world. Ideas are tested and validated with real users in just five days.",
  "image": "/assets/images/photos/0027.jpg",
  "alt": "People gathered around a laptop, only their hands are visible",
  "loading": "lazy"
}] -%}
{{- imageWithText('left', 'yellow', 'top', contentBlocks) -}}

{{- cardList(topics) -}}

<!-- main content -->

## The Workshop

The first step is to assemble a cross-functional team with the goal of aligning
on a challenge and collaborating to create a solution. Each day of the product
design sprint is focused on one goal: aligning, exploring solutions, deciding,
prototyping, and finally testing.


{% set text = "From the first day, we started realizing <strong>how much better</strong> our first product could have been if we had used a <strong>design sprint</strong>. Building and designing our app became a team effort and involved our users.This brought about a product that was <strong>supported by the team</strong> and <strong>wanted by our users</strong>." %}
{% set source = "Tekwane Mwendwa, CEO & Co-Founder of Asilimia" %}
{{ quote('purple', text, source, false) }}

## After the workshop

After a design sprint, we often run a second iteration sprint. In this iteration
sprint, the focus is on refining the prototype. We apply the feedback that we
received in the sprint and test it once again with our users.

## Customized to your team's needs

Design sprints are customized to your team and your needs. Although we enjoy
collaborating with your team in every step of the way, we can also tailor the
workshop so your team is only present for a fraction of the time.
