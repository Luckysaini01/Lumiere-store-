import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // Primary Detail Featured Product: Fluid Silk Slip Dress
  {
    id: 'fluid-silk-slip-dress',
    name: 'Fluid Silk Slip Dress',
    price: 890.0,
    formattedPrice: '$890.00',
    subtitle: '100% Mulberry Silk',
    tag: 'Collection № 04',
    category: 'dresses',
    material: '100% Mulberry Silk',
    origin: 'Milan, Italy',
    description:
      'A masterclass in minimalist draping. This bias-cut silhouette is crafted from 32mm heavy-weight mulberry silk, designed to trace the contours of the body with a liquid-like finish. Featuring delicate adjustable straps and a raw-edge hem.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPeOLVpYX8AArLWueEhfJVXNpbQaz7kstoCrEOxqvSOtHitciOf7rh0XTkmGBfng81LbBwyNI8nN6Uwjeigmj54y6GXi7lVrideJOLvJooqBZC8YT6oOzO5KfxGa0IlW3mL_sKfrR-lvZwvaiDEJDWDVNxvm-i3u4sTWnARr31MgbskTWV580j6jkuSF4sfoVgHt2w7pyK3gBg5mOwinrDZYriuNtOI3J3N-1_Gnk2qZ3v07OWrSdrGFvceJeL6SPVjAIau24uRzw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpkKP_ZyaC5JOQMv4yCwUSrEzhHCgMG37K30xI8JFAPwYTZD2xxmiLgWlWWrF-NnTx5U9a7eHZz3iGmYO5oO5HnaPUusIXeMD9YaJIfRfvbvzOPzpkiPaoLCYmdsQMpu_oCd_hATlq-NJRg-8PI6-Zhn2eHWo0tXc-hC8Zp4odTW9BEY8RbcH8Rb_VCM0XGctYPk2TLprbi3sa6AWOOCaVa2kXe92kAjtuMyB02Qmgh54vj-Z3D5a6i-a_Fdx4_VCryQ4qeTwqPfM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxYlaab3avIwOron6RYsQWyEAQGr6S6m1kFgCw1S2P0PMrPybqeHOa-EnB2WfuZ8AWVax5-XUxx8eVrwMCF9jxlOtuJAm-Bm31FpnR_oXSvxTTfydUKPhAJy6oWql9z2rU1lm3OD-m1ZxTB5g6k3o6tp6A9tagt_Fg4cm-C9iOplDZjyS9KjK8nuUmKIYnyij84f3eua00d1twlHUsUPqOvpibFIIGpkLMDylWIYf8hBjbrRE-2BYxUnbMTTc6AY3rcT-t5XCVkWk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSepdBKduIBWbgmYmBidKet9Ucwyaq0LGkg1x9n-By8WHSM0-aPhg1rwFj_1Y7_NRAFPg1iqnHLUDsQrBO-Z95LPLDNy_foa7M88HL9SGgY3v3DjOe8yKlvMpy8CkMPYXHqnn-rZ3XcZNJ9gsOvCQd4nKrgCnv6fN04w7tqdEATVl5aHKo8mGExaK-9BJFdb5lBF1L9CyJOoQlLmhMV3PF2u-xI9uw8tz7y7g65KFeULrIN9I5PatJNZOXm2toQQzfO60I6wA0Wy8',
    ],
    aspect: 'portrait',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'MONO',
    fabric: 'SILK',
  },

  // Shop Catalog Screen Products
  {
    id: 'the-archival-trench',
    name: 'The Archival Trench',
    price: 1240.0,
    formattedPrice: '$1,240',
    subtitle: '100% Virgin Wool',
    tag: "Collection 004 / L'Essence",
    category: 'outerwear',
    material: '100% Virgin Wool',
    origin: 'Biella, Italy',
    description:
      'Impeccably tailored longline silhouette crafted from double-faced virgin wool. Designed with storm flaps, horn buttons, and an architectural belted waist.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuApYsvpdRsRuz-CYxlD8bddEP4LDufTAE72JrWLoyMcwX9qz0pmIGHJKxjb4zOio8USQ_HAfaU8tBrxAqI1rdXVhLN1Ac6zZSoyyjTx_ScDvX1IuiGKpKEPewHuDPPi63JxY4U1RgoUEDloXbH9iv6IpdmFUoKruL1--M6NUud8DydhJ15Y8SOwDAaV0BFZZT_tQFxMJIVfil-2ege9S1BUC2pamtu06b7PhYYP4gOTVTIk_f_hQFkRJTxWHNOjNWTnMl6f9Usc8Gk',
    aspect: 'portrait',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'MONO',
    fabric: 'WOOL',
  },
  {
    id: 'structure-top',
    name: 'Structure Top',
    price: 480.0,
    formattedPrice: '$480',
    subtitle: 'Sculpted Canvas',
    tag: "Collection 004 / L'Essence",
    category: 'separates',
    material: 'Sculpted Heavy Canvas',
    origin: 'Kyoto, Japan',
    description:
      'A study in proportion and tactile tension. High-density woven canvas with subtle boat neckline and clean raw finished seams.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Oa5NwuxNmtGKYk7WaR0jE8K3b9rTqYrn1yO9TjTsCHOjLPPLuhtmeAx83GWzo-4tQdxQMexMSuwX4TakbQkoWBZSbmyaazwZ0_E7T3cLvpx1U_90Z137oSKwsRiDM_inKTKkh8OJNqypa9XDVzcQopGQ5NBiBGMS_FVheA9Td6k-7uYYFCVHQZdVcSUX5nvlbZk2mO8Z7i7THNzjbZKf1g-7dNl9i6DsGtFE7X0oUiE8HxQvecuCuk4emIU7Cwg0jvfNzaecQ3w',
    aspect: 'square',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'MONO',
    fabric: 'CANVAS',
  },
  {
    id: 'silk-narrative',
    name: 'Silk Narrative',
    price: 390.0,
    formattedPrice: '$390',
    subtitle: 'Mulberry Silk',
    tag: 'Essential Separates',
    category: 'separates',
    material: 'Mulberry Silk',
    origin: 'Como, Italy',
    description:
      'Sensual minimalism cut from feather-light washed silk. Delicate binding with natural body-skimming contour.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDkbqTiGSEkIJBW6ECqef_6Z3OuFgVCC0k7y4Tfvu-hz5mSaCOENt8k_nxOV_AZuRkNk91e2dR-kdci75hV87nQNijLAZk_w4qbJmGZmjwDEi_3n2GmP38uqiGLpHR3ZXnA9daZdTTYBWa2dhOoJHpkEeQ7o9QKzrn0R58T3mSWaHZsZj3zbc8RUv-1Fr0lhL_Cvp6NZtVzWrd6ABZcDJCXrcDycc8pczCrsCMecwBX2ACtv3xSM0s5c-9jO7kCr5i8mtHiYyk5kI',
    aspect: 'tall',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'MONO',
    fabric: 'SILK',
  },
  {
    id: 'the-void-trousers',
    name: 'The Void Trousers',
    price: 550.0,
    formattedPrice: '$550',
    subtitle: 'Relaxed Fit Cotton',
    tag: 'Tailored Solitude',
    category: 'tailoring',
    material: 'Relaxed Fit Cotton Poplin',
    origin: 'Lisbon, Portugal',
    description:
      'Deep single pleats paired with an elongated rise and floor-sweeping fluid silhouette. Finished with internal drawstring waist.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXlheGTbu06nZmepHQ61V6IxJzgPpd-NXwoRDLeVijIIwZerqhTn5Z5V6VamlDanAWUVap1gkaIouPcglUpzfs5K72ePweUdvNclbQavmb8ui5nJbSp1NKclVawfcDFO0OXqfFREr5p7vLj73hCfgQ-d1K9rCov5Kdw6qAwFREaA0c4sSHvm8OiXbcNFU_IM8b04n4DKfcVuUCY8fPkge10g1jm4Qc1zvx9FK0yDtR8OMIY4I_vMpTRPSzvMfBIQGuyZ61nJ_pnxc',
    aspect: 'wide',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'MONO',
    fabric: 'COTTON',
  },
  {
    id: 'leather-obscura',
    name: 'Leather Obscura',
    price: 210.0,
    formattedPrice: '$210',
    subtitle: 'Calfskin Accessories',
    tag: 'Leather Atelier',
    category: 'footwear',
    material: 'Vegetable-Tanned Calfskin',
    origin: 'Tuscany, Italy',
    description:
      'Anatomically molded low-profile sneaker crafted from supple matte calfskin with raw hand-stitched welt detailing.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrVpztCumLNBoAItFeOmuvk3f7I9J7dI2Cux0WS_1EFfYkjVp0UtaExlIar94q8V-FGB6tOgevReYSv3Tw-fWRO30TuLHGiWE3_enU1Wjm5JHhVwN9i9Oj89-NkWYO3mQlYedFWSGhb-IiP7mIOZBk-LwPP7dGN0KKM26wZ5x2wf0bkOONtcbrvcCXfeeBOClKdyr-uJUsd11xSzJiLjW6rLeaU0I1BgtItEI75tP-UCkkHBb5IQaLmhkdDi7Sk34iHShzuhCJ3mU',
    aspect: 'square',
    sizes: ['37', '38', '39', '40', '41'],
    color: 'MONO',
    fabric: 'LEATHER',
  },
  {
    id: 'linear-layering',
    name: 'Linear Layering',
    price: 890.0,
    formattedPrice: '$890',
    subtitle: 'Seasonal Set',
    tag: 'Monochrome Study',
    category: 'tailoring',
    material: 'Fine Gauge Merino & Silk',
    origin: 'Edinburgh, Scotland',
    description:
      'Complementary two-piece composition engineered with subtle tonal nuances and architectural seam placement.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnqpDt0A4LrUz4DUFet98zPoD70Dy2Rukt5Pw8piXcwEdcie42Vc3gTZvUeO2Ud9GPLeP47DBwvRYjjnsJ2HqrUVBMud2hr038w_TpNfKkN4nrqf6_gQ39gxnBglwAEO_yjeZfIp6UsWm3rcSTwMtuC4jWfivJyQ-hSHWaLmjFTxQl0vAXDyAms-NVeyRhs_IvpKHy2fS3HLxoj2nh_5jFoVMiO62Crw6C-iXTRGGn7Z-CUsMfIVMYPFznHXK0hoESmYFPS9kEaTA',
    aspect: 'portrait',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'MONO',
    fabric: 'WOOL',
  },

  // Wishlist Screen Products
  {
    id: 'sculpted-silk-gown',
    name: 'Sculpted Silk Gown',
    price: 2450.0,
    formattedPrice: '$2,450.00',
    subtitle: "Autumn / Winter '24",
    tag: 'Runway Exclusive',
    category: 'dresses',
    material: 'Pure Crepe de Chine Silk',
    origin: 'Paris, France',
    description:
      'A statuesque sleeveless maxi silhouette draped with pleated bodice, open neckline, and floor-brushing skirt volume.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXjm9gytZ_vcWUwuQtTUMW7UVTAGFj0tPbYXZa_Pb5veWnmekt9H4g_dD1BYk-gKY6P4W-55ImCXo7tVwRNaKQpvRHRVUljk5-ka7xFJ2ESLobdWw0V5tjiat3TloS6UFTRnSSKcqHWnxPfOMt2Vsw3RuLE_afbkAKafGbRUYzU-FlcmWLyW2lf8DFRMjJNXRNqlsZbOj5xklFzvlvKzByQVpQQ_rqhafTiVGiXXLMgdSLRih2uS28gVQmd5l1tiXULhOb5B8fd7Y',
    aspect: 'square',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'NOIR',
    fabric: 'SILK',
  },
  {
    id: 'archive-clutch',
    name: 'Archive Clutch',
    price: 890.0,
    formattedPrice: '$890.00',
    subtitle: 'Grained Palmellato Leather',
    tag: 'Permanent Collection',
    category: 'accessories',
    material: 'Structured Grained Leather',
    origin: 'Florence, Italy',
    description:
      'Geometry meets functional storage. Structured top handle silhouette with magnetic lock closure and silver foil debossed branding.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfCXnEoxSjm1vprDCZIO6xHGH4yyRMrAWoA0tdrYH1frMCHvrGY4V-ZZhXqiSM9kCn3qSQUvmnHioppH0PYXbG3rbYfkPaHKcsn3ZR8ql8d0e1YRexykhOPPIDOFMizI-KMK1spqGVVokHHgaEDlkdYqWOqoLb96JprRCRYp01BQC4GcvojMubvOv8ciX0N9Vo7njV3GrCND80HH79hmAixUYDGere_37Ohx0hXD0yf5GGXhDnx5AZSPTVgVvJfIiFRoudsiRMvAA',
    aspect: 'square',
    sizes: ['ONE SIZE'],
    color: 'NOIR',
    fabric: 'LEATHER',
  },
  {
    id: 'structured-blazer',
    name: 'Structured Blazer',
    price: 1200.0,
    formattedPrice: '$1,200.00',
    subtitle: 'Woven Sand Wool',
    tag: 'Tailoring Atelier',
    category: 'tailoring',
    material: '100% Wool Crepe',
    origin: 'London, United Kingdom',
    description:
      'Impeccably sharp single-breasted blazer featuring padded shoulders, peaked lapels, and horn button detail in oat ecru wool.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDa0AOJS1_hnUDp5sTjQBKwvZnErVdmSuRWibtbC2OxMO3YBdF2vh_CiiLc9g_tCKxgdGq3f10v4ukY2SsANfrB5kW-0aMpcnjq9nK-RtqAa7SX3BP5m-wuXR_TYoE1NXh5PDBD029VzWutYrCp9U6_6jKmmgoey9jm9pV_FkDAw5oL8lu3Ab2Msrhy1Cg_bidj5l8QCmmqjnpTydARkfmVWXqsW2mpfBjTQ5FpodtSNI1PCE9YUPZcu-7Bc6WJUCCx5wJcEsP4MhE',
    aspect: 'portrait',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'OAT',
    fabric: 'WOOL',
  },
  {
    id: 'lumiere-trench',
    name: 'Lumière Trench',
    price: 3100.0,
    formattedPrice: '$3,100.00',
    subtitle: 'Cashmere Blend Set',
    tag: 'Limited Edition',
    category: 'outerwear',
    material: '80% Cashmere, 20% Silk',
    origin: 'Zurich, Switzerland',
    description:
      'Hand-numbered limited piece featuring a storm collar, fluid raglan sleeve cut, and silk satin lined interior.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY3wii-Z4qR0xFlKFPvv4vnkF_KTx2WERbN3fhmhdFxcIPOg2Xqx3nhnMLnNOaeuiT1JTmbY3IfHPS17KWSGxk5SPK6oVgMACf8_1yJHFqSqfGig6p218DlZ_NqVliWOvJcvyLTTmrKMcAjchrkZ5zShL-fujANRW9C-4arGKku9eklL5rhtuGkMtYkALlqKAKdF1Ye3Vn7mzV3VNl25R28XBPMPsvJgKpSwlxQKMbjUUttFxJIxX7Ue-cvdjJH-j72QnK0s8QSnA',
    aspect: 'square',
    sizes: ['XS', 'S', 'M', 'L'],
    color: 'MONO',
    fabric: 'WOOL',
  },

  // Complete The Look Items
  {
    id: 'strappy-heel',
    name: 'Strappy Heel',
    price: 420.0,
    formattedPrice: '$420.00',
    subtitle: 'Sculpted Block Heel',
    tag: 'Footwear Collection',
    category: 'footwear',
    material: 'Glazed Goat Leather & Wood',
    origin: 'Alicante, Spain',
    description:
      'Linear ankle-strap sandal with a sculpted geometric wooden block heel and padded insole for all-day gallery strolls.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUa8Fu2pirc21alV0kkll4JTC40cGCnw0R0lD7k_-HsA2nh2k13E2KyefEiT0Zd_ziUQV9MUizb_5FHh3DB9FNZknNjgBZOaWqzwlbjZqy171-6RR5WPBfoizFR5ieFmMM3fQqEVYQbn5jfNegF4s-OV3aPsgAcPoCyO691SyCdLb4ePWzBOlOR_5VSCq9dfZkI8NK4H4Go-61c2Jcj-H3y3R7A1h858ASGCDQzK8K-R_CLWq2WBVgb0AFiUGZG2pgX_sVFlISjLw',
    aspect: 'portrait',
    sizes: ['37', '38', '39', '40', '41'],
    color: 'NOIR',
    fabric: 'LEATHER',
  },
  {
    id: 'vault-clutch',
    name: 'Vault Clutch',
    price: 1250.0,
    formattedPrice: '$1,250.00',
    subtitle: 'Brushed Brass Hardware',
    tag: 'Permanent Collection',
    category: 'accessories',
    material: 'Full-Grain Espresso Leather',
    origin: 'Florence, Italy',
    description:
      'Vintage vanity bag reinterpreted through brutalist lines with solid cast brass clasp and removable shoulder strap.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrWKCDpYrQY5Y7xe2byqE9mqOxrNaH1XtNMSzh_Xi0XARmUiKjkHskAPUjweDZa0UM7yAOouBh1kekBYosEf55vumCopVrk352BLZGvz9eZzsrCLgMwb7zwYEyqq6U5Dec6A5ld5RY27r55Tu_R94pH1YWe4XTNMy6zYvlqlImuh_X0qZ3t_wajzH1UIGWgyjIcAegb73Q8p3uPvlu9IoOwMNj_8vt7QTM0dTbiRI9demAzK2WLy9hK-1tv_mNJK3wxzAIdcFHGp0',
    aspect: 'portrait',
    sizes: ['ONE SIZE'],
    color: 'OAT',
    fabric: 'LEATHER',
  },
  {
    id: 'helix-earrings',
    name: 'Helix Earrings',
    price: 310.0,
    formattedPrice: '$310.00',
    subtitle: '18k Gold Plated Vermeil',
    tag: 'High Jewellery',
    category: 'accessories',
    material: 'Recycled Silver & 18k Vermeil',
    origin: 'Arezzo, Italy',
    description:
      'Organic spiral hoops cast with gentle undulations inspired by molten water surfaces. Lightweight comfort fitting.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrELrCmyNDCC7YEA2Sm9L-Yfore6rKn2vzEnwixIwR8vLXAsInPPl-HaFyZ0FNr2TgqNKdCXT81ok7BXrzjwNE94XVApkZbpWQqjw1AriPkQmFOE_MQ8fYloAHOXsnSGky4IUSnOkFh6tNOmrorkjmsk9296TXAnCh5JY8OZIt2aWfarsaa45VtGj6krcgin_45Jvf39c33Spx7R8lUoh4ZlmRHVg5PRQxxTETeCWa8y697slhXAvS_GodmW-8o-9Tsl-thZ_uWZw',
    aspect: 'portrait',
    sizes: ['ONE SIZE'],
    color: 'OAT',
    fabric: 'CANVAS',
  },
];

export const CATEGORY_CAROUSEL = [
  {
    name: 'Dresses',
    category: 'dresses',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSJaVdU-Yp97KUrtuZAJRDERnslbMVGlbp8zpr_G8zwHIPrt5ccB9J5a0gIBFUpCOwTCeCuFTNit5FJPVRPJLnCcFE2ZhQwQz_-fSdHYCsF2eXEwZJpzXx5f6dztor6bfY9zvvLtsMx5AlWbemtHuNxHdQSfgNmyrGWKF-97ZLTY7KBViyxUNOt3ODHGXHyq3ryned5e3k78e-4Zr_pvYUtxDsyDJAo2Wv-wz4eHdXPTf-6gAIoQaWYeU25PSPhyojMZYSJnsnW50',
  },
  {
    name: 'Outerwear',
    category: 'outerwear',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUBUxvThoefWN2gPYiWDSUVwokFjbnw1OaSO7-JFyrj6PBdMLX4vtex30RsetAJ33Hgug6GTXrZ1QuH6GFva7AX4xHjEQGBs71gZ5oMJcnEILxd46fbk51iNVkrUSLkgR6vKkzeTi9dsKSXi3vRsc9439uMXjT4biUThN19HZHeNIPMQo9d_U6Kov5SgCLZPnkMYm-HHpYE79N8V61kWfgLjg1MJJSxSbzFIGx0Myg4yeeL-2V_m0FrjmK14z1K58j0Ey-i-GUAH0',
  },
  {
    name: 'Accessories',
    category: 'accessories',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvypu-dUEgyEQDjmoIHiZHXWIcRknTm4T6sX3Y15QSnLf3O7S25C2so7BIf1azOZd49kD3O2mtRATxlX7uyNq7t0pKXoI1QsawCyl5FIYS76Xo6hQsq6_YwR1qevGsh9lSo_27obp4j5LnXJi0dPo72hmCKY0-q1iTecf_CXaNFIbvQ0gZb51lBjB6dswFbjiEDV2QcgM-Xy0uYz_70_VWSgjyk9gnx-XXoviiuaLG3z9Gd6Vz85Jt51zb3zWkRIgx6T0z-ZKqSiw',
  },
  {
    name: 'Footwear',
    category: 'footwear',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8gTjOiUwNyQHIsxe0D3ih0eaNX5uRlhH8ftYAN-pDLswu9pH7KgOpg8BvEJEM5TSCOqmQlnvIODJozzgFa8kk1kJHxRLkrztjT909YM7nsptBs5-Cp5c9TAtuGGXo_NSgTOShfV0c3F03foAU2gio_Ecnznt4t2-nQwQODl3_tyhu8IShAlwNnrUgMFGT3KAbbkaN7Uyf6X3-Bf_QE6qocuJEZb-Rm8BuMLI2lAU-TqL5ssjSiwdmUFTO-RUODKK-a5cMrhlRnbk',
  },
  {
    name: 'Tailoring',
    category: 'tailoring',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHTvRRfbvpwtA4ReXlzPxxvFjHmYaf9zvuGIfr2p-bx4tH6teC6bITpsjpxh7zUnnjtHqEvJPD_5KB9Qob1nKyr-q7bXkE2MhtbeEiNx4XYvFvV4sueAN3DADhdgx6p20v8FuWZ32kq5YnS5F5ZWQlnASbIo91dQ4lojECnHiPTV6Q44SoE6E9-qcjEMZkbuhjpemMuxRPPj69B9h2MiouMV5vqJDvMQ5naTeqVYfnhFWBTTrpZ0iS7fnGmNZRg2pNETShvEZe8FA',
  },
];
