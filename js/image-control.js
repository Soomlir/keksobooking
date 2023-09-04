const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const initImagePreview = (fieldElement, previewElement) => {
  const previewSrc = previewElement.src;

  fieldElement.addEventListener('change', () => {
    const file = fieldElement.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewElement.src = URL.createObjectURL(file);
    } else {
      previewElement.src = previewSrc;
    }
  });

  return () => (previewElement.src = previewSrc);
};

export { initImagePreview };
