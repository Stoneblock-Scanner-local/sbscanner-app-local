const getSizeInMb = (sizeInBytes: number) => {
  return (sizeInBytes / 1024 / 1024) * 1.048576;
};

export interface ValidateFile {
  file: File | undefined;
  maxFileSize: number;
  setError: (err: string) => void;
}

export const validateFile = ({ file, maxFileSize, setError }: ValidateFile) => {
  if (!file) return;

  if (getSizeInMb(file.size) > maxFileSize) {
    setError(`File exceeds size limit of ${maxFileSize} MB.`);
    return false;
  }

  return true;
};
