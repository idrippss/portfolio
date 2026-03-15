import mediaManifest from '@/generated/media-manifest.js';

const fallbackHeroImages = ['/image/hero/ne.jpeg'];
const fallbackGalleryImages = [
  '/sitewebmedia/gallery/1.jpg',
  '/sitewebmedia/gallery/2.jpg',
  '/sitewebmedia/gallery/2b.jpg',
  '/sitewebmedia/gallery/3.jpeg',
  '/sitewebmedia/gallery/IMG_1649.jpg',
  '/sitewebmedia/gallery/IMG_2967.jpg',
  '/sitewebmedia/gallery/IMG_3552.jpg'
];

const fallbackHighlights = [
  {
    title: 'ANIMALS',
    thumbnail: '/sitewebmedia/highlights/animals/IMG_9149.jpg',
    images: ['/sitewebmedia/highlights/animals/IMG_9149.jpg', '/sitewebmedia/highlights/animals/IMG_9193.jpg']
  },
  {
    title: 'CHESS',
    thumbnail: '/sitewebmedia/highlights/chess/IMG_8752.jpg',
    images: ['/sitewebmedia/highlights/chess/IMG_8752.jpg']
  },
  {
    title: 'DJERBA',
    thumbnail: '/sitewebmedia/highlights/djerba/IMG_8888.jpg',
    images: [
      '/sitewebmedia/highlights/djerba/IMG_8888.jpg',
      '/sitewebmedia/highlights/djerba/IMG_8892.jpg',
      '/sitewebmedia/highlights/djerba/IMG_8896.jpg'
    ]
  },
  {
    title: 'KARTING',
    thumbnail: '/sitewebmedia/highlights/karting/IMG_0437.jpg',
    images: ['/sitewebmedia/highlights/karting/IMG_0437.jpg']
  },
  {
    title: 'MODELING',
    thumbnail: '/sitewebmedia/highlights/modeling/_MG_7833.jpg',
    images: [
      '/sitewebmedia/highlights/modeling/_MG_7833.jpg',
      '/sitewebmedia/highlights/modeling/_MG_8010.jpg',
      '/sitewebmedia/highlights/modeling/IMG_4324.JPG',
      '/sitewebmedia/highlights/modeling/IMG_7416.jpg',
      '/sitewebmedia/highlights/modeling/IMG_7472.jpg'
    ]
  },
  {
    title: 'NATURE',
    thumbnail: '/sitewebmedia/highlights/nature/_DSC0595.JPG',
    images: [
      '/sitewebmedia/highlights/nature/_DSC0595.JPG',
      '/sitewebmedia/highlights/nature/IMG_1373.jpg',
      '/sitewebmedia/highlights/nature/IMG_4404.jpg',
      '/sitewebmedia/highlights/nature/IMG_6164.jpg',
      '/sitewebmedia/highlights/nature/WhatsApp%20Image%202021-02-07%20at%2010.19.15%20PM%20(3).jpeg'
    ]
  },
  {
    title: 'NIGHTLIFE',
    thumbnail: '/sitewebmedia/highlights/nightlife/IMG_5582.jpg',
    images: [
      '/sitewebmedia/highlights/nightlife/IMG_5582.jpg',
      '/sitewebmedia/highlights/nightlife/IMG_5831.jpg',
      '/sitewebmedia/highlights/nightlife/IMG_6582.JPG',
      '/sitewebmedia/highlights/nightlife/IMG_6950.jpg',
      '/sitewebmedia/highlights/nightlife/IMG_8132.jpg',
      '/sitewebmedia/highlights/nightlife/IMG_8519.png'
    ]
  },
  {
    title: 'PARIS',
    thumbnail: '/sitewebmedia/highlights/paris/IMG_4735.jpg',
    images: [
      '/sitewebmedia/highlights/paris/IMG_4735.jpg',
      '/sitewebmedia/highlights/paris/IMG_4736.jpg',
      '/sitewebmedia/highlights/paris/IMG_4738.jpg',
      '/sitewebmedia/highlights/paris/IMG_4739.jpg',
      '/sitewebmedia/highlights/paris/IMG_4740.jpg',
      '/sitewebmedia/highlights/paris/IMG_4741.jpg'
    ]
  },
  {
    title: 'PORTRAITS',
    thumbnail: '/sitewebmedia/highlights/portraits/IMG_5214.jpg',
    images: [
      '/sitewebmedia/highlights/portraits/IMG_5214.jpg',
      '/sitewebmedia/highlights/portraits/IMG_5222.jpg',
      '/sitewebmedia/highlights/portraits/IMG_5223.jpg',
      '/sitewebmedia/highlights/portraits/IMG_5229.jpg',
      '/sitewebmedia/highlights/portraits/IMG_52292.jpg'
    ]
  },
  {
    title: 'RANDO',
    thumbnail: '/sitewebmedia/highlights/rando/IMG_1965.jpg',
    images: [
      '/sitewebmedia/highlights/rando/IMG_1965.jpg',
      '/sitewebmedia/highlights/rando/IMG_1976.jpg',
      '/sitewebmedia/highlights/rando/IMG_1996.jpg',
      '/sitewebmedia/highlights/rando/IMG_3462.jpg',
      '/sitewebmedia/highlights/rando/IMG_3559.jpg',
      '/sitewebmedia/highlights/rando/IMG_4737.jpg'
    ]
  },
  {
    title: 'SPORTS',
    thumbnail: '/sitewebmedia/highlights/sports/IMG_3128.jpg',
    images: ['/sitewebmedia/highlights/sports/IMG_3128.jpg']
  },
  {
    title: 'STREET',
    thumbnail: '/sitewebmedia/highlights/Street/1.jpg',
    images: [
      '/sitewebmedia/highlights/Street/1.jpg',
      '/sitewebmedia/highlights/Street/IMG_4740.jpg'
    ]
  }
];

function normalizeImageList(list) {
  return (list || []).filter(Boolean);
}

export function getHeroImages() {
  const images = normalizeImageList(mediaManifest?.heroImages);
  const selected = images.length ? images : fallbackHeroImages;

  return selected.map((url, index) => ({
    url,
    alt: `Hero image ${index + 1}`
  }));
}

export function getGalleryImages() {
  const images = normalizeImageList(mediaManifest?.galleryImages);
  const selected = images.length ? images : fallbackGalleryImages;

  return selected.map((url, index) => ({
    url,
    alt: `Gallery image ${index + 1}`
  }));
}

export function getHighlightCategories() {
  const categories = (mediaManifest?.highlights || [])
    .filter((item) => item?.images?.length)
    .map((item) => ({
      title: item.title,
      thumbnail: item.thumbnail || item.images[0],
      images: item.images
    }));

  return categories.length ? categories : fallbackHighlights;
}

export function getProjectImages(projectKey, fallback = []) {
  const images = normalizeImageList(mediaManifest?.projects?.[projectKey]?.images);
  return images.length ? images : fallback;
}

export function getProjectVideos(projectKey, fallback = []) {
  const videos = (mediaManifest?.projects?.[projectKey]?.videos || [])
    .filter((video) => video?.url)
    .map((video) => ({
      title: video.title || 'Video',
      videoUrl: video.url
    }));

  return videos.length ? videos : fallback;
}
