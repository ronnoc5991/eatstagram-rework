/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import { StyledImageCropper, CropperWrapper } from './ImageCropper.styles';
import Input from '../../atoms/Input/Input';
import getCroppedImg from '../../../utils/cropImage';

type ImageCropperProps = {
  setCroppedImageUrl: (imageUrl: string) => void;
};

export default function ImageCropper({ setCroppedImageUrl }: ImageCropperProps): JSX.Element {
  const [imageFile, setImageFile] = useState<string>('');
  const [imageIsSet, setImageIsSet] = useState(false);
  const [croppedArea, setCroppedArea] = useState<CroppedArea>();
  const [crop, setCrop] = useState<CroppedArea>({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  } as CroppedArea);
  const [zoom, setZoom] = useState(1);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement).files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files![0]);
      reader.addEventListener('load', () => {
        setImageFile(reader.result as string);
      });
    }
  };

  const triggerInput = () => {
    if (imageInputRef.current) imageInputRef.current.click();
  };

  type CroppedArea = {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  const onCropComplete = (croppedAreaPercentage: CroppedArea, croppedAreaPixels: CroppedArea) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSetImage = async () => {
    const croppedImage = await getCroppedImg(imageFile, croppedArea as CroppedArea);
    setCroppedImageUrl(croppedImage);
    setImageIsSet(true);
  };

  const handleCropChange = (newCrop: any) => {
    setCrop(newCrop);
  };

  return (
    <StyledImageCropper>
      {imageFile && !imageIsSet && (
        <CropperWrapper>
          <Cropper
            image={imageFile}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={handleCropChange}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
          <button type="button" onClick={onSetImage}>
            Set Image
          </button>
        </CropperWrapper>
      )}
      <button type="button" onClick={triggerInput}>
        Upload a file
      </button>
      <Input
        type="file"
        name="recipeImage"
        accept="image/*"
        onChange={onSelectFile}
        forwardRef={imageInputRef}
        hidden
      />
    </StyledImageCropper>
  );
}
