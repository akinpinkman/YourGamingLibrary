export const get1080pImage = (image) => {
  if (image && image.url) {
    return image.url.replace('t_thumb', 't_1080p')
  } else {
    return 'No Image Available'
  }
}
