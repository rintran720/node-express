export type BookCreateDto = {
  name: string;
  desc: string;
  author: string;
};

export type BookUpdateDto = {
  name?: string;
  desc?: string;
  author?: string;
};

export type BookReplaceDto = {
  name: string;
  desc: string;
  author: string;
};
