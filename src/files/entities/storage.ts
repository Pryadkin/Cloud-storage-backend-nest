import { diskStorage } from 'multer';
import { uuid } from 'uuidv4';

const normalizeFileName = (req, file, callback) => {
  const fileExtName = file.originalname.split('.').pop();
  console.log('fileExtName', fileExtName);

  callback(null, `${uuid()}.${fileExtName}`);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
});
