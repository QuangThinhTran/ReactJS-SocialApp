type IBlog = {
  id?: number
  slug: string;
  content: string;
  createdAt: string;
  images?: object,
  name: string,
  users: IUser
}

type IUser = {
  name: string;
  username: string;
  email: string;
}
interface ImageProps {
  path?: IPath[] | undefined;
}

interface IPath {
  id: number;
  path: string;
}