# Academy Section Map

Sectionized mapping used by `/education`:

1. `AcademyHeaderNavigation`
   - `prelude` + `headerTop` (`0bd7ccc`) + `headerMain` (`b7ab050`, first) + `headerSticky` (`b7ab050`, second)
2. `AcademyHeroSlider`
   - `hero` (`06495e7`)
3. `AcademyCountryDestinations`
   - Split from the combined trust band (`ace3e60` + `346cc73` + `0c42b44`) up to `OUR Collaborations`
4. `AcademyPartnersLogoStrip`
   - Split from trust band around `OUR Collaborations`
5. `AcademyCertificationsTrust`
   - Split from trust band around `Credentials and Certifications`
6. `AcademyIndustryRecognition`
   - Split from trust band around `Industry Recognitions`
7. `AcademyFeaturesValueBlocks`
   - `features` (`d7c5f30`)
8. `AcademyServices`
   - `services` (`a7bcb69`)
9. `AcademyAboutChaseGlobal`
   - `testimonials` (`9bf0366`) section block currently holding the About content area
10. `AcademyWhyChooseUsTestimonial`
   - Split from `whyChoose` (`bdc2de9`) before FAQ/booking markers
11. `AcademyBookingSection`
   - Split from `whyChoose` around `Book An Appointment`, fallback to `afterWhyChoose` (`128e56b`)
12. `AcademyFaqSection`
   - Split from `whyChoose` around `FREQUENTLY ASKED QUESTIONS`
13. `AcademyFooterContact`
   - `footerMain` (`8ccde96`) + `footerBottom` (`cede30e`)

Notes:
- Source class names and markup are preserved by rendering each chunk as raw HTML.
- URL references are rewritten via `public/assets/academy/asset-manifest.json` first; fallback uses `/source-assets/academy/*`.
