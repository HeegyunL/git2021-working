
interface TodoItemState {
  id: number;
  memo: string | undefined;
  username: string | undefined;
  createTime: number;
}


export type { TodoItemState };

interface FeedState {
  id: number;
  memo: string | undefined;
  dataURL : string |undefined;
  username: string | undefined;
  type : string;
  media : string;
  createTime: number;
  isEdit? : boolean;
  image? : string|undefined;
}
export type { FeedState}