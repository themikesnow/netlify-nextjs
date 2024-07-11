type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

type PageableResponse<T> = {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    unpaged: boolean;
  };
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
};

export default PageableResponse;
