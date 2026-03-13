import mediaManifest from '@/generated/media-manifest.js';

const fallbackHeroImages = ['/image/hero/ne.jpeg'];
const fallbackGalleryImages = [
  '/image/gallery/1.jpg',
  '/image/gallery/2.jpg',
  '/image/gallery/2a.JPG',
  '/image/gallery/2b.jpg',
  '/image/gallery/3.jpeg'
];

const fallbackHighlights = [
  {
    title: 'ANIMALS',
    thumbnail: '/image/highlights/animals/IMG_9149.jpg',
    images: ['/image/highlights/animals/IMG_9149.jpg', '/image/highlights/animals/IMG_9193.jpg']
  },
  {
    title: 'CHESS',
    thumbnail: '/image/highlights/chess/IMG_8752.jpg',
    images: ['/image/highlights/chess/IMG_8752.jpg']
  },
  {
    title: 'DJERBA',
    thumbnail: '/image/highlights/djerba/IMG_8888.jpg',
    images: [
      '/image/highlights/djerba/IMG_8888.jpg',
      '/image/highlights/djerba/IMG_8892.jpg',
      '/image/highlights/djerba/IMG_8896.jpg'
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
