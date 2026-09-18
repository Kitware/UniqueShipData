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
  subheadline: Open benchmark · Underwater Acoustics
  headline: >-
    <strong>UniqueShip:</strong> Large, public underwater acoustic target recognition (UATR) datasets for ships
  text: >-
    2,460 hours of ship-radiated noise from 4,218 unique vessels, split by vessel ID so no ship appears in both training and test split. Sourced from the Ocean Networks Canada (ONC) repository.
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
  subheadline: Overview
  headline: Built to train generalizable UATR models using leakproof splits
  paragraphs:
    - >-
      UniqueShip pairs hydrophone recordings from seven ONC deployments in the Strait of Georgia (May 2016 – November 2023) with AIS vessel tracking data. Each 5-second sample is labeled with its vessel class and 17 AIS metadata fields. Unlike earlier ONC-based datasets, every split keeps each vessel in a single partition and groups background audio by day, so test accuracy reflects performance on ships the model has never heard.
  stats:
    - value: "3,437"
      label: Hours of ship & background audio
    - value: "4,218"
      label: Unique vessels
    - value: "11"
      label: Vessel classes
    - value: "2"
      label: 5-second recordings

# ==================================================
# THE DIFFERENCE
# ==================================================
difference:
  subheadline: What makes it different?
  headline: Larger, more diverse, and free of data leakage that inflates other benchmarks
  items:
    - title: Leak-free splits
      text: Vessel audio is grouped by MMSI and background by day instead of random splitting. On previous datasets, random splitting inflated accuracy by 10–48 points.
    - title: Largest open ONC dataset
      text: The balanced benchmark subset alone has 4× the audio and 12× the vessels of DeepShip, and 70% more audio than the unbalanced Oceanship dataset.
    - title: Rich AIS metadata
      text: 17 fields per sample, including MMSI, distance to hydrophone, speed, course, length, beam, draught, and navigation status.
    - title: Ready-made splits
      text: Choose anything from a 25-hour quick-start subset to the full 3,437-hour corpus, with five 80/10/10 folds.
    - title: Baselines included
      text: MobileNetV3, ViT-B/16, and SwinV2 with STFT and Mel inputs. The best result is 66.5% accuracy (Swin + Mel).
    - title: Cleaner background class
      text: 8km ship-free radius ensures quieter ambient samples for the background class

# ==================================================
# DATA RELEASES
# Button styles: primary or outline
# ==================================================
releases:
  subheadline: Data releases
  headline: Current dataset splits
  text: All splits are vessel-disjoint and include per-sample AIS metadata. Samples are 5-second clips at 20 kHz; full-length recordings are available through the codebase.
  items:
    - title: 5 Class - Balanced (Benchmark)
      image: "/assets/images/release-coastal-placeholder.svg"
      image_alt: Placeholder
      description: Contains the main 5 classes (Tug/Tow, Tanker, Passengership, Cargo) and balances the total audio for each class such that they are equal.
      size: "89 GB (Unzipped), 59 GB (Zipped)"
      views: 213h, 3175 vessels, 5 classes
      date: Released March 2026
      buttons:
        - label: Download bundle
          url: "#request"
          target: _blank
          style: primary
        - label: Annotation details
          url: "#"
          target: _blank
          style: outline
    - title: 12 Class - 5 Hours Each
      image: "/assets/images/release-coastal-placeholder.svg"
      image_alt: Placeholder
      description: Contains all ship classes and balances the total audio such that it is 5 hours each class.
      size: "10 GB (Unzipped), 7 GB (Zipped)"
      views: 60h, 4218 vessels, 12 classes
      date: Released March 2026
      buttons:
        - label: Download bundle
          url: "#request"
          target: _blank
          style: primary
        - label: Annotation details
          url: "#"
          target: _blank
          style: outline

# ==================================================
# REQUEST FORM
# ==================================================
request:
  subheadline: Data access
  headline: Request the dataset
  text: >-
    Datasets are distributed to named researchers under CC BY 4.0. Tell us who you are and what you plan to build, and we'll send signed download links plus the matching annotation and evaluation packages.
  benefits:
    - Clear licensing and use requirements
    - Versioned bundles and documentation
    - A defined path for support questions
  form:
    action: "https://your-form-service.com/your-form-id"
    method: post
    submit_label: Request download
    submitting_label: Sending request…
    error_message: Something went wrong. Please try again.

    success:
      eyebrow: Request received
      headline: Thanks for your submission
      text: We received your request and will contact you with additional information.

    fields:
      - type: text
        name: name
        label: Full name
        width: half
        required: true
        autocomplete: name

      - type: email
        name: email
        label: Work email
        width: half
        required: true
        autocomplete: email

      - type: text
        name: organization
        label: Organization
        width: half
        autocomplete: organization

      - type: select
        name: release
        label: Release requested
        width: half
        placeholder: Select a release
        required: true
        options:
          - Full dataset
          - Training split
          - Evaluation split

      - type: textarea
        name: intended_use
        label: Intended research use
        width: full
        placeholder: Describe how you plan to use the dataset.
        required: true

      - type: checkbox
        name: agreement
        label: I agree to the dataset terms and conditions.
        value: accepted
        width: full
        required: true

# ==================================================
# CITATION AND CONTACT
# ==================================================
citation:
  subheadline: Citing this dataset
  headline: Reference the dataset paper
  text: If you use UniqueShip, please cite the paper below.
  code: |-
    @inproceedings{hashemi_2026_uniqueship,
      author    = {Hashemi, Connor and Stout, Trevor and Hoogs, Anthony and Parham, Jason},
      title     = {UniqueShip: Mitigating Data Leakage in Acoustic Ship Classification Benchmark Datasets},
      booktitle = {OCEANS 2026},
      year      = {2026},
      pages     = {TODO}
    }
  contact:
    headline: Questions, corrections, or collaboration?
    text: Our team can help with access and research partnerships.
    button_label: Contact the team
    email: data@example.org

---
