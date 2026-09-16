---
layout: home
title: MARINA Dataset
description: A large labeled dataset for underwater acoustic target recognition.

# ==================================================
# HERO AREA
# Button styles: primary or outline
# ==================================================
hero:
  # Replace this path with the final hero image in assets/images.
  background_image: "/assets/images/hero-placeholder.svg"
  subheadline: Open maritime research data
  headline: Large labeled dataset for underwater acoustic target recognition
  text: >-
    Explore annotated recordings, vessel metadata, and analysis-ready
    releases built for repeatable maritime research.
  annotation: "ID: 005 · TANKER"
  buttons:
    - label: Browse releases
      url: "#releases"
      style: primary
    - label: Read the overview
      url: "#overview"
      style: outline

# ==================================================
# OVERVIEW
# ==================================================
overview:
  subheadline: About the dataset
  headline: A research foundation for understanding underwater activity.
  paragraphs:
    - >-
      MARINA brings recordings, labels, and contextual metadata together in
      one consistent resource. It is designed to reduce setup work and help
      teams move more quickly from exploration to useful experiments.
    - >-
      Replace this introductory copy with the dataset's mission, provenance,
      intended uses, limitations, and stewardship information.
  stats:
    - value: "3,437"
      label: Hours of audio
    - value: "4,218"
      label: Unique vessels
    - value: "11"
      label: Vessel classes
    - value: "2"
      label: Spectrogram types

# ==================================================
# CAPABILITIES
# ==================================================
capabilities:
  subheadline: Dataset capabilities
  headline: Built to support practical research workflows.
  items:
    - title: Labeled vessel activity
      text: Time-aligned annotations connect acoustic events to vessel classes and activity.
    - title: Analysis-ready bundles
      text: Curated files, metadata, and clear documentation make exploration easier.
    - title: Multiple representations
      text: Work with audio alongside complementary spectrogram formats.
    - title: Consistent metadata
      text: Search and filter releases using a predictable shared schema.
    - title: Reproducible releases
      text: Versioned public bundles keep downstream work traceable.
    - title: Open documentation
      text: Examples and reference material support common technical workflows.

# ==================================================
# DATA RELEASES
# Button styles: primary or outline
# ==================================================
releases:
  subheadline: Data releases
  headline: Current public releases
  text: Check back September 22, 2026 for releases.
  items:
  #  - title: Sample title
  #    image: "/assets/images/release-coastal-placeholder.svg"
  #    image_alt: Placeholder
  #    description: Sample text paragraph should go here
  #    size: "X.X TB"
  #    views: X camera views
  #    date: Released March 2026
  #    buttons:
  #      - label: Download bundle
  #        url: "#request"
  #        style: primary
  #      - label: Annotation details
  #        url: "#"
  #        style: outline

# ==================================================
# REQUEST FORM
# ==================================================
request:
  subheadline: Data access
  headline: Request the dataset
  text: >-
    Use this section to explain eligibility, expected response time,
    licensing, and what happens after a request is submitted.
  benefits:
    - Clear licensing and use requirements
    - Versioned bundles and documentation
    - A defined path for support questions
  form:
    action: "#"
    name_label: Full name
    email_label: Work email
    organization_label: Organization
    release_label: Release requested
    release_placeholder: Select a release…
    use_label: Research use
    agreement_label: I agree to the terms and conditions.
    submit_label: Request download

# ==================================================
# CITATION AND CONTACT
# ==================================================
citation:
  subheadline: Citing this dataset
  headline: Reference the dataset paper
  text: Replace the sample BibTeX below with the publication's canonical citation.
  code: |
    @inproceedings{marina_dataset,
      title  = {MARINA: A Labeled Maritime Acoustic Dataset},
      author = {Research Team},
      year   = {2026}
    }
  contact:
    headline: Questions, corrections, or collaboration?
    text: Our team can help with access and research partnerships.
    button_label: Contact the team
    email: data@example.org

---
