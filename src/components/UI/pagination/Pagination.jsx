import { Pagination } from "antd";

const PaginationComponent = ({ totalPages, changePage, page, limit }) => {
  return (
    <Pagination
      className="pagination"
      current={page}
      defaultPageSize={limit}
      total={totalPages}
      onChange={changePage}
			pageSizeOptions={[10, 20, 30]}
    />
  );
};

export default PaginationComponent;
