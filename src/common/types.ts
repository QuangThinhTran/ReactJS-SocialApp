type IBlog = {
  id: number;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  images?: object,
  name: string
}

interface ImageProps {
  path?: IPath[] | undefined;
}

interface IPath {
  id: number;
  path: string;
}