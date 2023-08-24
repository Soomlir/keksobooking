const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const WIDTH_PREVIEW = 70;
const HEIGHT_PREVIEW = 70;

const previewAvatar = () => {
  const avatarUpload = document.querySelector('.ad-form-header__input');
  const avatarPreview = document.querySelector('.ad-form-header__preview img');

  avatarUpload.addEventListener('change', () => {
    const file = avatarUpload.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      avatarPreview.src = URL.createObjectURL(file);
    }
  });
};

const previewHousing = () => {
  const housingUpload = document.querySelector('.ad-form__input');
  const housingPreview = document.querySelector('.ad-form__photo');

  housingUpload.addEventListener('change', () => {
    const file = housingUpload.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    const img = document.createElement('img');
    if (matches) {
      img.src = URL.createObjectURL(file);
      img.style.width = `${WIDTH_PREVIEW}px`;
      img.style.height = `${HEIGHT_PREVIEW}px`;
      housingPreview.append(img);
    }
  });
};

export { previewAvatar, previewHousing };
