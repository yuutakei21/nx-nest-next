import Pagination, { PaginationProps } from '@mui/material/Pagination';

const UIPagination = (props: PaginationProps) => {
  return (
    <Pagination
      className="ui-pagination"
      color="primary"
      showFirstButton
      showLastButton
      variant="outlined"
      shape="rounded"
      {...props}
    />
  );
};

export default UIPagination;
