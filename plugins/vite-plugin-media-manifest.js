import path from 'node:path';
import { generateMediaManifest } from '../tools/generate-media-manifest.js';

const WATCHABLE_DIRS = [
  `${path.sep}public${path.sep}image${path.sep}`,
  `${path.sep}public${path.sep}freelanceprojects${path.sep}`
];

const MEDIA_EXT_REGEX = /\.(png|jpe?g|webp|gif|avif|svg|mp4|mov|webm|m4v)$/i;

function shouldRegenerate(filePath) {
  const normalized = filePath.split('/').join(path.sep);
  return WATCHABLE_DIRS.some((dirToken) => normalized.includes(dirToken)) && MEDIA_EXT_REGEX.test(normalized);
}

export default function mediaManifestPlugin() {
  let timeoutId = null;

  const scheduleRegenerate = (server) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      generateMediaManifest();
      server.ws.send({ type: 'full-reload' });
    }, 120);
  };

  return {
    name: 'media-manifest-plugin',

    configResolved() {
      generateMediaManifest();
    },

    buildStart() {
      generateMediaManifest();
    },

    configureServer(server) {
      const onFsEvent = (filePath) => {
        if (shouldRegenerate(filePath)) {
          scheduleRegenerate(server);
        }
      };

      server.watcher.on('add', onFsEvent);
      server.watcher.on('unlink', onFsEvent);
      server.watcher.on('change', onFsEvent);
    }
  };
}
