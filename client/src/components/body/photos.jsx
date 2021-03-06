const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  },
  {
    src: 'https://live.staticflickr.com/65535/47587238362_5d355937cb_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02494',
    alt: 'DSC02494',
    key: '47587238362',
    srcSet: [
      'https://live.staticflickr.com/65535/47587238362_5d355937cb.jpg 500w',
      'https://live.staticflickr.com/65535/47587238362_5d355937cb_c.jpg 800w',
      'https://live.staticflickr.com/65535/47587238362_5d355937cb_b.jpg 1024w',
      'https://live.staticflickr.com/65535/47587238362_65fe216f4b_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/40673437303_ec8b5a7246_b.jpg',
    width: 1065,
    height: 1600,
    title: 'DSC02428',
    alt: 'DSC02428',
    key: '40673437303',
    srcSet: [
      'https://live.staticflickr.com/65535/40673437303_ec8b5a7246.jpg 333w',
      'https://live.staticflickr.com/65535/40673437303_ec8b5a7246_c.jpg 533w',
      'https://live.staticflickr.com/65535/40673437303_ec8b5a7246_b.jpg 682w',
      'https://live.staticflickr.com/65535/40673437303_c88d6174a2_h.jpg 1065w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/40673436833_5fc1ab52fe_b.jpg',

    width: 1600,
    height: 1065,
    title: 'DSC02576',
    alt: 'DSC02576',
    key: '40673436833',
    srcSet: [
      'https://live.staticflickr.com/65535/40673436833_5fc1ab52fe.jpg 500w',
      'https://live.staticflickr.com/65535/40673436833_5fc1ab52fe_c.jpg 800w',
      'https://live.staticflickr.com/65535/40673436833_5fc1ab52fe_b.jpg 1024w',
      'https://live.staticflickr.com/65535/40673436833_6f245db6aa_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/47587238132_4683fdabb2_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02565',
    alt: 'DSC02565',
    key: '47587238132',
    srcSet: [
      'https://live.staticflickr.com/65535/47587238132_4683fdabb2.jpg 500w',
      'https://live.staticflickr.com/65535/47587238132_4683fdabb2_c.jpg 800w',
      'https://live.staticflickr.com/65535/47587238132_4683fdabb2_b.jpg 1024w',
      'https://live.staticflickr.com/65535/47587238132_54f98ac5e9_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/32697497947_7d6dfaf5ec_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02548',
    alt: 'DSC02548',
    key: '32697497947',
    srcSet: [
      'https://live.staticflickr.com/65535/32697497947_7d6dfaf5ec.jpg 500w',
      'https://live.staticflickr.com/65535/32697497947_7d6dfaf5ec_c.jpg 800w',
      'https://live.staticflickr.com/65535/32697497947_7d6dfaf5ec_b.jpg 1024w',
      'https://live.staticflickr.com/65535/32697497947_81c6d9139e_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/32697497647_31cd88c0b5_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02540',
    alt: 'DSC02540',
    key: '32697497647',
    srcSet: [
      'https://live.staticflickr.com/65535/32697497647_31cd88c0b5.jpg 500w',
      'https://live.staticflickr.com/65535/32697497647_31cd88c0b5_c.jpg 800w',
      'https://live.staticflickr.com/65535/32697497647_31cd88c0b5_b.jpg 1024w',
      'https://live.staticflickr.com/65535/32697497647_7a36437b05_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/47587238242_6776b8a582_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02535',
    alt: 'DSC02535',
    key: '47587238242',
    srcSet: [
      'https://live.staticflickr.com/65535/47587238242_6776b8a582.jpg 500w',
      'https://live.staticflickr.com/65535/47587238242_6776b8a582_c.jpg 800w',
      'https://live.staticflickr.com/65535/47587238242_6776b8a582_b.jpg 1024w',
      'https://live.staticflickr.com/65535/47587238242_feab7e0aa0_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/40673437163_703ffe416d_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02520',
    alt: 'DSC02520',
    key: '40673437163',
    srcSet: [
      'https://live.staticflickr.com/65535/40673437163_703ffe416d.jpg 500w',
      'https://live.staticflickr.com/65535/40673437163_703ffe416d_c.jpg 800w',
      'https://live.staticflickr.com/65535/40673437163_703ffe416d_b.jpg 1024w',
      'https://live.staticflickr.com/65535/40673437163_7f4a4d66f2_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/32697498187_7a74849c76_b.jpg',
    width: 1600,
    height: 840,
    title: 'DSC02492',
    alt: 'DSC02492',
    key: '32697498187',
    srcSet: [
      'https://live.staticflickr.com/65535/32697498187_7a74849c76.jpg 500w',
      'https://live.staticflickr.com/65535/32697498187_7a74849c76_c.jpg 800w',
      'https://live.staticflickr.com/65535/32697498187_7a74849c76_b.jpg 1024w',
      'https://live.staticflickr.com/65535/32697498187_9d07b79e86_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/40673436913_c48ac9e6d5_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02489',
    alt: 'DSC02489',
    key: '40673436913',
    srcSet: [
      'https://live.staticflickr.com/65535/40673436913_c48ac9e6d5.jpg 500w',
      'https://live.staticflickr.com/65535/40673436913_c48ac9e6d5_c.jpg 800w',
      'https://live.staticflickr.com/65535/40673436913_c48ac9e6d5_b.jpg 1024w',
      'https://live.staticflickr.com/65535/40673436913_dbb2320a41_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/40673437213_3480e88c8b_b.jpg',
    width: 1600,
    height: 957,
    title: 'DSC02479',
    alt: 'DSC02479',
    key: '40673437213',
    srcSet: [
      'https://live.staticflickr.com/65535/40673437213_3480e88c8b.jpg 500w',
      'https://live.staticflickr.com/65535/40673437213_3480e88c8b_c.jpg 800w',
      'https://live.staticflickr.com/65535/40673437213_3480e88c8b_b.jpg 1024w',
      'https://live.staticflickr.com/65535/40673437213_5bfff3ef95_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/47587238482_5ac51de790_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02461',
    alt: 'DSC02461',
    key: '47587238482',
    srcSet: [
      'https://live.staticflickr.com/65535/47587238482_5ac51de790.jpg 500w',
      'https://live.staticflickr.com/65535/47587238482_5ac51de790_c.jpg 800w',
      'https://live.staticflickr.com/65535/47587238482_5ac51de790_b.jpg 1024w',
      'https://live.staticflickr.com/65535/47587238482_b8b1478145_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/32697498227_a3bc50aa6c_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02460',
    alt: 'DSC02460',
    key: '32697498227',
    srcSet: [
      'https://live.staticflickr.com/65535/32697498227_a3bc50aa6c.jpg 500w',
      'https://live.staticflickr.com/65535/32697498227_a3bc50aa6c_c.jpg 800w',
      'https://live.staticflickr.com/65535/32697498227_a3bc50aa6c_b.jpg 1024w',
      'https://live.staticflickr.com/65535/32697498227_e5a478e65c_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/40673437263_b03be98bae_b.jpg',
    width: 1600,
    height: 1086,
    title: 'DSC02456',
    alt: 'DSC02456',
    key: '40673437263',
    srcSet: [
      'https://live.staticflickr.com/65535/40673437263_b03be98bae.jpg 500w',
      'https://live.staticflickr.com/65535/40673437263_b03be98bae_c.jpg 800w',
      'https://live.staticflickr.com/65535/40673437263_b03be98bae_b.jpg 1024w',
      'https://live.staticflickr.com/65535/40673437263_bebc91464c_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/32697497717_1fb25b32be_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02453',
    alt: 'DSC02453',
    key: '32697497717',
    srcSet: [
      'https://live.staticflickr.com/65535/32697497717_1fb25b32be.jpg 500w',
      'https://live.staticflickr.com/65535/32697497717_1fb25b32be_c.jpg 800w',
      'https://live.staticflickr.com/65535/32697497717_1fb25b32be_b.jpg 1024w',
      'https://live.staticflickr.com/65535/32697497717_4bf3235964_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/47587238552_cfce31cc10_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02441',
    alt: 'DSC02441',
    key: '47587238552',
    srcSet: [
      'https://live.staticflickr.com/65535/47587238552_cfce31cc10.jpg 500w',
      'https://live.staticflickr.com/65535/47587238552_cfce31cc10_c.jpg 800w',
      'https://live.staticflickr.com/65535/47587238552_cfce31cc10_b.jpg 1024w',
      'https://live.staticflickr.com/65535/47587238552_44cd3655ea_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/47640016631_cfffe28dd0_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02439',
    alt: 'DSC02439',
    key: '47640016631',
    srcSet: [
      'https://live.staticflickr.com/65535/47640016631_cfffe28dd0.jpg 500w',
      'https://live.staticflickr.com/65535/47640016631_cfffe28dd0_c.jpg 800w',
      'https://live.staticflickr.com/65535/47640016631_cfffe28dd0_b.jpg 1024w',
      'https://live.staticflickr.com/65535/47640016631_ec4ec9f250_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/47640017061_d6f554a175_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02436',
    alt: 'DSC02436',
    key: '47640017061',
    srcSet: [
      'https://live.staticflickr.com/65535/47640017061_d6f554a175.jpg 500w',
      'https://live.staticflickr.com/65535/47640017061_d6f554a175_c.jpg 800w',
      'https://live.staticflickr.com/65535/47640017061_d6f554a175_b.jpg 1024w',
      'https://live.staticflickr.com/65535/47640017061_cf1fd70288_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/32697497787_ebd9165050_b.jpg',
    width: 1600,
    height: 708,
    title: 'DSC02435',
    alt: 'DSC02435',
    key: '32697497787',
    srcSet: [
      'https://live.staticflickr.com/65535/32697497787_ebd9165050.jpg 500w',
      'https://live.staticflickr.com/65535/32697497787_ebd9165050_c.jpg 800w',
      'https://live.staticflickr.com/65535/32697497787_ebd9165050_b.jpg 1024w',
      'https://live.staticflickr.com/65535/32697497787_e3c6cb4bc5_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
  {
    src: 'https://live.staticflickr.com/65535/46724351385_a6ff50ddda_b.jpg',
    width: 1600,
    height: 1065,
    title: 'DSC02427',
    alt: 'DSC02427',
    key: '46724351385',
    srcSet: [
      'https://live.staticflickr.com/65535/46724351385_a6ff50ddda.jpg 500w',
      'https://live.staticflickr.com/65535/46724351385_a6ff50ddda_c.jpg 800w',
      'https://live.staticflickr.com/65535/46724351385_a6ff50ddda_b.jpg 1024w',
      'https://live.staticflickr.com/65535/46724351385_3a29cde51c_h.jpg 1600w',
    ],
    sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
  },
]
export default photos;
