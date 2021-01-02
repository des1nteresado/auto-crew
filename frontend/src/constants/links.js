const wpUrl = 'https://cloudandmortar.co';

export const wpLinks = {
  aboutUs: `${wpUrl}/about-us/`,
  privacyPolicy: `${wpUrl}/privacy-policy/`,
  termsConditions: `${wpUrl}/terms-conditions/`,
  faqs: `${wpUrl}/faqs/`,
  contactUs: `${wpUrl}/contact-us/`,
};

export const wpLinksConfig = [
  { title: 'About Us', link: wpLinks.aboutUs },
  { title: 'Terms + Conditions', link: wpLinks.termsConditions },
  { title: 'FAQs', link: wpLinks.faqs },
  { title: 'Privacy Policy', link: wpLinks.privacyPolicy },
  { title: 'Contact Us', link: wpLinks.contactUs },
];
